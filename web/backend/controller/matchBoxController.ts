import { Matchbox } from "../schemas/matchBox.ts";
import { Context } from "../../../deps/web/deps.ts";

// creates a new participant with data in request
const createMatchBox = async (ctx: Context) => {
  try {
    const body = await ctx.request.body();
    const { name_m, name_w, match, season, mb_number } = await body.value;
    const data = await Matchbox.insertOne({
      name_m: name_m,
      name_w: name_w,
      match: match,
      season: season,
      mb_number: mb_number,
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

export { createMatchBox };
