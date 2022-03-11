import { Matches } from "../schemas/matches.ts";
import { Context } from "../../../deps/web/deps.ts";

const createMatches = async (ctx: Context) => {
  try {
    const body = await ctx.request.body();
    const { matches } = await body.value;
    const data = await Matches.insertOne({
      matches: matches,
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

export { createMatches };
