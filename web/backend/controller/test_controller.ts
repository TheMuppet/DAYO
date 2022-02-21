/**
 * This file is to test the mongodb connection
 * Implements functions to write and read on db
 */

import { User } from "../db/mongo.ts";

const getUsers = async (ctx: undefined) => {
  try {
    const data = await User.find();
    ctx.response.body = { "status": true, data: data };
    ctx.response.status = 200;
  } catch (_err) {
    ctx.response.body = { status: false, data: null };
    ctx.response.status = 500;
  }
};

const createUser = async (ctx: undefined) => {
  try {
    const body = await ctx.request.body();
    const { name, phone, email } = await body.value;
    const id = await User.insertOne({
      name: name,
      phone: phone,
      email: email,
    });
    ctx.response.body = { status: true, data: id };
    ctx.response.status = 201;
  } catch (_err) {
    ctx.response.body = { status: false, data: null };
    ctx.response.status = 500;

  }
};

export { createUser, getUsers };
