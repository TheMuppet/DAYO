import {
  Participant,
  ParticipantSchema,
} from "../db/mongoDB/schemas/participant.ts";
import { Bson, Context } from "../../deps/web/deps.ts";

// creates a new participant with data in request
const createParticipant = async (ctx: Context) => {
  try {
    const body = await ctx.request.body();
    const { name, gender, age, img, season } = await body.value;
    const data = await Participant.insertOne({
      name: name,
      age: age,
      img: img,
      season: season,
      gender,
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

// returns all participants from db
const getParticipants = async (ctx: Context) => {
  try {
    const allParticipant: ParticipantSchema[] = await Participant.find({})
      .toArray();
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

const getParticipant = async (
  // deno-lint-ignore no-explicit-any
  { params, response }: { params: { id: string }; response: any }, // skipcq: JS-0323
) => {
  try {
    const id = params.id;
    const betterId = new Bson.ObjectId(id);
    const participant = await Participant.findOne({ _id: betterId });
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

export { createParticipant, getParticipant, getParticipants };
