import { MatchesSchema } from "../db/schemas/matches.ts";
import { Bson, Context } from "../../deps/web/deps.ts";
import { db } from "../db/mongo.ts";

const createMatches = async (ctx: Context) => {
  try {
    const body = await ctx.request.body();
    const { matches, season, episode } = await body.value;
    const data = await db.insertOne<MatchesSchema>("matches", {
      matches: matches,
      season: season,
      episode: episode,
    });
    ctx.response.body = { status: true, data: data };
    ctx.response.status = 201;
  } catch (_err) {
    ctx.response.body = {
      status: false,
      error: _err.name,
      error_message: _err.message,
    };
    ctx.response.status = 500;
  }
};

const getMatches = async (ctx: Context) => {
  try {
    const allParticipant: MatchesSchema[] = await db.find<MatchesSchema>(
      "matches",
      {},
      {},
    );
    ctx.response.body = { status: true, data: allParticipant };
    ctx.response.status = 200;
  } catch (error) {
    ctx.response.body = {
      status: false,
      error: error.name,
      error_message: error.message,
    };
    ctx.response.status = 500;
  }
};

// any used in here
const getMatch = async (
  // deno-lint-ignore no-explicit-any
  { params, response }: { params: { id: string }; response: any }, // skipcq: JS-0323
) => {
  try {
    const id = params.id;
    const participant: MatchesSchema | undefined = await db.findOne<
      MatchesSchema,
      { _id: Bson.ObjectId }
    >("matches", {
      _id: new Bson.ObjectId(id),
    });
    response.body = { status: true, data: participant };
    response.status = 200;
  } catch (error) {
    response.body = {
      status: false,
      error: error.name,
      error_message: error.message,
    };
    response.status = 500;
  }
};

export { createMatches, getMatch, getMatches };
