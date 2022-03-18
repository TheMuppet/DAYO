import { Matchbox } from "../schemas/matchBox.ts";
import { Bson, Context } from "../../../deps/web/deps.ts";

// gets a new matchbox result with data in request
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

// gets all matchbox results from db
const getMatchBoxes = async (ctx: Context) => {
  try {
    const allMatchboxes = await Matchbox.find({}).toArray();
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
    const id = params.id;
    const betterId = new Bson.ObjectId(id);
    const matchbox = await Matchbox.findOne({ _id: betterId });
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
