


import { Router } from "../../../deps.ts";
import { getUsers, createUser } from "../controller/test_controller.ts";

const router = new Router();
router
  .get("/", (ctx) => {
    ctx.response.body = "This is the home route";
  })
  // for testing mongo connection
  .get("/get-users", getUsers)
  .post("/create-user", createUser);


export default router;