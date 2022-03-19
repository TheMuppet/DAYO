import {MatchNight, MatchNightSchema} from "../db/schemas/matchNight.ts";
import { Bson, Context } from "../../../deps/web/deps.ts";

// creates a new matching night with data in request
const createMatchNight = async (ctx: Context) => {
  try {
    const body = await ctx.request.body();
    const { lights, season, episode, couples }: MatchNightSchema = await body.value;
    const data = await MatchNight.insertOne({
      couples: couples,
      lights: lights,
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

// gets all matching nights from db
const getMatchNights = async (ctx: Context) => {
  try {
    const allMatchNights = await MatchNight.find({}).toArray();
    ctx.response.body = { status: true, data: allMatchNights };
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

// gets one matching night from db
const getMatchNight = async (
  // deno-lint-ignore no-explicit-any
  { params, response }: { params: { id: string }; response: any }, // skipcq: JS-0323
) => {
  try {
    const id = params.id;
    const betterId = new Bson.ObjectId(id);
    const matchnight = await MatchNight.findOne({ _id: betterId });
    response.body = { status: true, data: matchnight };
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

export { createMatchNight, getMatchNight, getMatchNights };
