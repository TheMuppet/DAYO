import { MatchBoxSchema } from "../db/schemas/matchBox.ts";
import { MatchNightSchema } from "../db/schemas/matchNight.ts";
import { MatchesSchema } from "../db/schemas/matches.ts";
import { ParticipantSchema } from "../db/schemas/participant.ts";
import { AYO } from "./AYOcsp.ts";
import { db } from "../db/mongo.ts";

// deno-lint-ignore no-explicit-any
function json2array(json: any) { // skipcq: JS-0323
  // deno-lint-ignore no-explicit-any
  const result: any[] = []; // skipcq: JS-0323
  const keys = Object.keys(json);
  keys.forEach(function (key) {
    result.push(json[key]);
  });
  return result;
}

// deno-lint-ignore no-explicit-any
function createDBdata(person11gender: string, y: any[], calculatedData: any) { // skipcq: JS-0323
  const matchesObject = [];

  if (person11gender == "m" || person11gender == "") {
    for (const i in y) {
      const x = json2array(y[i]);
      const highestVal = Math.max.apply(null, Object.values(y[i]));
      for (const j in Object.entries(y[i])) {
        if (Object.entries(y[i])[j][1] === highestVal) {
          let probability = x[j] * 100;
          const stringProb = probability.toString().split(".");
          probability = +stringProb[0];
          matchesObject.push({
            "man": Object.keys(calculatedData)[i],
            "woman": Object.entries(y[i])[j][0],
            "probability": probability,
          });
          break;
        }
      }
    }
  } else if (person11gender == "w") {
    for (const i in y) {
      const x = json2array(y[i]);
      const highestVal = Math.max.apply(null, Object.values(y[i]));
      for (const j in Object.entries(y[i])) {
        if (Object.entries(y[i])[j][1] === highestVal) {
          let probability = x[j] * 100;
          const stringProb = probability.toString().split(".");
          probability = +stringProb[0];
          matchesObject.push({
            "woman": Object.keys(calculatedData)[i],
            "man": Object.entries(y[i])[j][0],
            "probability": probability,
          });
          break;
        }
      }
    }
  }
  return matchesObject;
}

export async function getCurrentProbabilities(
  currentSeason: number,
  currentEpisode: number,
) {
  const man: Array<string> = [];
  const woman: Array<string> = [];
  let person11 = "";
  let person11gender = "";
  const matchbox: Array<MatchBoxSchema> = [];
  const matchnight: Array<MatchNightSchema> = [];

  // get data from db
  const matchboxes: MatchBoxSchema[] = await db.find<MatchBoxSchema>(
    "matchbox",
    {},
    {},
  );
  const matchnights: MatchNightSchema[] = await db.find<MatchNightSchema>(
    "matchnight",
    {},
    {},
  );
  const participants: ParticipantSchema[] = await db.find<ParticipantSchema>(
    "participant",
    {},
    {},
  );

  for (const i in participants) {
    // filters participants data for men from current season
    if (
      JSON.stringify(participants[i].gender) == JSON.stringify("m") &&
      participants[i].season == currentSeason
    ) {
      man.push(participants[i].name);
    }
    // filters participants data for women from current season
    if (
      JSON.stringify(participants[i].gender) == JSON.stringify("w") &&
      participants[i].season == currentSeason
    ) {
      woman.push(participants[i].name);
    }
    if (
      participants[i].person11 &&
      participants[i].season == currentSeason
    ) {
      person11 = participants[i].name;
      person11gender = participants[i].gender;
    }
  }
  // filters matchboxes data from current season
  for (const i in matchboxes) {
    if (matchboxes[i].season == currentSeason) {
      matchbox.push(matchboxes[i]);
    }
  }
  // filters matchnights data from current season
  for (const i in matchnights) {
    if (matchnights[i].season == currentSeason) {
      matchnight.push(matchnights[i]);
    }
  }

  const ayo = new AYO(man, woman, person11, matchbox, matchnight);
  const calculatedData = ayo.solveAyo();

  const y = json2array(calculatedData);

  const matchesObject = createDBdata(person11gender, y, calculatedData);

  await db.insertOne<MatchesSchema>("matches", {
    matches: matchesObject,
    season: currentSeason,
    episode: currentEpisode,
  });

  return;
}
