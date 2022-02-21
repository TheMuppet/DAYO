/**
 * This file is to test the mongodb connection
 * Implements functions to write and read on db
 */

import { User } from "../db/mongo.ts";

const getUsers = async (ctx: any) => {
  try {
    const data = await User.find();
    ctx.response.body = { "status": true, data: data };
    ctx.response.status = 200;
  } catch (err) {
    ctx.response.body = { status: false, data: null };
    ctx.response.status = 500;
    console.log(err);
  }
};

const createUser = async (ctx: any) => {
  try {
    const body = await ctx.request.body();
    console.log(await body.value);
    const { name, phone, email } = await body.value;
    const id = await User.insertOne({
      name: name,
      phone: phone,
      email: email,
    });
    ctx.response.body = { status: true, data: id };
    ctx.response.status = 201;
  } catch (err) {
    ctx.response.body = { status: false, data: null };
    ctx.response.status = 500;
    console.log(err);
  }
};

export { createUser, getUsers };
