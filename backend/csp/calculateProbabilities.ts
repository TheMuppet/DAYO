import { MatchBoxSchema } from "../db/schemas/matchBox.ts";
import { MatchNightSchema } from "../db/schemas/matchNight.ts";
import { AYO } from "./AYOcsp.ts";

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

export async function getCurrenProbabilities(
  currentSeason: number,
  currentEpisode: number,
) {
  const man: Array<string> = [];
  const woman: Array<string> = [];
  let person11 = "";
  const matchbox: Array<MatchBoxSchema> = [];
  const matchnight: Array<MatchNightSchema> = [];

  // get data from db
  const matchboxes = await fetch(
    "http://dayo-project.herokuapp.com/api/v1/matchboxes/",
  )
    .then((res) => res.json());
  const matchnights = await fetch(
    "http://dayo-project.herokuapp.com/api/v1/matchnights/",
  )
    .then((res) => res.json());
  const participants = await fetch(
    "http://dayo-project.herokuapp.com/api/v1/participants",
  )
    .then((res) => res.json());

  for (const i in participants.data) {
    // filters participants data for men from current season
    if (
      JSON.stringify(participants.data[i].gender) == JSON.stringify("m") &&
      participants.data[i].season == currentSeason
    ) {
      man.push(participants.data[i].name);
    }
    // filters participants data for women from current season
    if (
      JSON.stringify(participants.data[i].gender) == JSON.stringify("w") &&
      participants.data[i].season == currentSeason
    ) {
      woman.push(participants.data[i].name);
    }
    if (
      participants.data[i].person11 &&
      participants.data[i].season == currentSeason
    ) {
      person11 = participants.data[i].name;
    }
  }
  // filters matchboxes data from current season
  for (const i in matchboxes.data) {
    if (matchboxes.data[i].season == currentSeason) {
      matchbox.push(matchboxes.data[i]);
    }
  }
  // filters matchnights data from current season
  for (const i in matchnights.data) {
    if (matchnights.data[i].season == currentSeason) {
      matchnight.push(matchnights.data[i]);
    }
  }

  const ayo = new AYO(man, woman, person11, matchbox, matchnight);
  const calculatedData = ayo.solveAyo();

  const y = json2array(calculatedData);
  const matchesObject = [];

  for (const i in y) {
    const highestVal = Math.max.apply(null, Object.values(y[i]));
    for (const j in Object.entries(y[i])) {
      if (Object.entries(y[i])[j][1] === highestVal) {
        matchesObject.push({
          "man": Object.keys(calculatedData)[i],
          "woman": Object.entries(y[i])[j][0],
          "probability": Object.entries(y[i])[j][1],
        });
        break;
      }
    }
  }

  const data = {
    matches: matchesObject,
    season: currentSeason,
    episode: currentEpisode,
  };

  await fetch("http://dayo-project.herokuapp.com/api/v1/matches", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .catch((error) => {
      return error;
    });

  return;
}
