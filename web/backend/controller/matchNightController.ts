import { Matchnight } from "../schemas/matchNight.ts";
import { Context } from "../../../deps/web/deps.ts";

// creates a new participant with data in request
const createMatchNight = async (ctx: Context) => {
  try {
    const body = await ctx.request.body();
    const { lights, season, mn_number, couples } = await body.value;
    const data = await Matchnight.insertOne({
      couples: couples,
      lights: lights,
      season: season,
      mn_number: mn_number
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

export { createMatchNight };
