
// for testing mongo connection

import { Router } from "https://deno.land/x/oak/mod.ts";
import { getUsers, createUser } from "../controller/test_controller.ts";

const router = new Router();
router
  .get("/", (ctx) => {
    ctx.response.body = "This is the home route";
  })
  .get("/get-users", getUsers)
  .post("/create-user", createUser);





export default router;