import { MatchesSchema } from "../../web/backend/db/schemas/matches.ts";
import { db } from "../../web/backend/db/mongo.ts";
import { Document, FindCursor } from "../../deps/discord/deps.ts";

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
  const newestMatchDocument: FindCursor<Document["MatchesSchema"]> = await db
    .collection("matches").find().sort({
      "season": -1,
    }).limit(1);
  const newestMatch: MatchesSchema = await newestMatchDocument.toArray()
    .then(
      function (obj: Document["MatchesSchema"]) {
        return obj[0];
      },
    );
  if (newestMatch) {
    return matchesToString(newestMatch.matches);
  }
  return "No matches found";
}
