import { MatchBoxSchema } from "../db/schemas/matchBox.ts";
import { Bson, Context } from "../../deps/web/deps.ts";
import { db } from "../db/mongo.ts";

// gets a new matchbox result with data in request
const createMatchBox = async (ctx: Context) => {
  try {
    const body = await ctx.request.body();
    const { man, woman, match, season, episode } = await body.value;
    const data = await db.insertOne<MatchBoxSchema>("matchbox", {
      man: man,
      woman: woman,
      match: match,
      season: season,
      episode: episode,
    });
    ctx.response.body = { status: true, data: data };
    ctx.response.status = 201;
  } catch (_err) {
    console.log(_err);
    ctx.response.body = {
      status: false,
      error: _err.name,
      error_message: _err.message,
    };
    ctx.response.status = 500;
  }
};

// gets all matchbox results from db
const getMatchBoxes = async (ctx: Context) => {
  try {
    const allMatchboxes: MatchBoxSchema[] = await db.find<MatchBoxSchema>(
      "matchbox",
      {},
      {},
    );
    ctx.response.body = { status: true, data: allMatchboxes };
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

// gets one matchbox result
const getMatchBox = async (
  // deno-lint-ignore no-explicit-any
  { params, response }: { params: { id: string }; response: any }, // skipcq: JS-0323
) => {
  try {
    const id: string = params.id;
    const matchbox: MatchBoxSchema | undefined = await db.findOne<
      MatchBoxSchema,
      { _id: Bson.ObjectId }
    >("matchbox", {
      _id: new Bson.ObjectId(id),
    });
    response.body = { status: true, data: matchbox };
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

export { createMatchBox, getMatchBox, getMatchBoxes };
