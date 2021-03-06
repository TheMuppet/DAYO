import { MatchesSchema } from "../../backend/db/schemas/matches.ts";
import { db } from "../../backend/db/mongo.ts";

function matchesToString(matches: MatchesSchema["matches"]): string {
  let msg = "Current Matches:\n";
  matches.forEach(
    function (
      match: { man: string; woman: string; probability: number },
    ) {
      msg = msg +
        `${match.man} ❤ ${match.woman} with ${match.probability}% certainty!\n`;
    },
  );
  msg = msg + "\n" +
    "Check the website for more information: https://dayo-project.herokuapp.com";
  return msg;
}

export async function showMatches(): Promise<string> {
  const newestMatchDocument: MatchesSchema[] = await db.find<MatchesSchema>(
    "matches",
    {},
    { sort: { "season": -1, "episode": -1 }, limit: 1 },
  );

  const newestMatch: MatchesSchema = newestMatchDocument[0];

  if (newestMatch) {
    return matchesToString(newestMatch.matches);
  } else {
    return "No matches found";
  }
}
