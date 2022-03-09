import { Participant } from "../schemas/participant.ts";
import { Context } from "../../../deps/web/deps.ts";

// creates a new participant with data in request
const createParticipant = async (ctx: Context) => {
  try {
    const body = await ctx.request.body();
    const { name, gender, age, picture, season } = await body.value;
    const data = await Participant.insertOne({
      name: name,
      age: age,
      picture: picture,
      season: season,
      gender,
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

// finds and filter participant in mongodb (filter: season, gender, none)
const findAll = async (ctx: Context) => {
  let gender;
  let season;
  // get data from request body
  try {
    const body = await ctx.request.body().value;
    // handles season input
    try {
      season = body.season;
    } catch {
      season = undefined;
    }
    // handles gender input
    try {
      gender = body.gender;
    } catch {
      gender = undefined;
    }
    // if there is no filter it will just return all participants from every season
  } catch {
    season = undefined;
    gender = undefined;
  }
  await findParticipant(ctx, gender, season);
};

// finds the participants
const findParticipant = async (
  ctx: Context,
  gender: string,
  season: number,
) => {
  try {
    const allParticipant = await Participant.find({
      "gender": gender,
      "season": season,
    }).toArray();
    // to return an 404 error if no participant is found (alternatives: other error code or return [] and 200 {remove this if statement} )
    if (JSON.stringify(allParticipant) == JSON.stringify([])) {
      ctx.response.status = 404;
      ctx.response.body = {
        status: false,
        error_message: "No participants found",
      };
      return;
    }
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

export { createParticipant, findAll };
