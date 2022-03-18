import { Matches } from "../schemas/matches.ts";
import { Bson, Context } from "../../../deps/web/deps.ts";

const createMatches = async (ctx: Context) => {
  try {
    const body = await ctx.request.body();
    const { matches, season, episode } = await body.value;
    const data = await Matches.insertOne({
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
    const allParticipant = await Matches.find({}).toArray();
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
  { params, response }: { params: { id: string }; response: any },
) => {
  try {
    const id = params.id;
    let betterId = new Bson.ObjectId("6221dce5822815bf6973a0e1");
    if (id != null) {
      betterId = new Bson.ObjectId(id);
    }
    const participant = await Matches.findOne({ _id: betterId });
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
