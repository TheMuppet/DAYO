import { Router } from "../../../deps/web/deps.ts";

const router = new Router();
router
  .get("/", (ctx) => {
    ctx.response.body = "This is the home route";
  });

export default router;
