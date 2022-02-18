
import { User } from "../db/mongo.ts";



let getUsers = async (ctx: any) => {
    try {
      let data: any = await User.find();
      ctx.response.body = { "status": true, data: data };
      ctx.response.status = 200;
    } catch (err) {
      ctx.response.body = { status: false, data: null };
      ctx.response.status = 500;
      console.log(err);
    }
  };
  
  
  let createUser = async (ctx: any) => {
    try {
      let body: any = await ctx.request.body();
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


export {createUser, getUsers}