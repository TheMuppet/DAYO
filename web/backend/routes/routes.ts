import { Router } from "../../../deps/web/deps.ts";
import {
  createParticipant,
  findAll,
} from "../controller/participantController.ts";

const router = new Router();
router
  .get("/", (ctx) => {
    ctx.response.body = "This is the home route";
  })
  .post("/add-participant", createParticipant)
  .post("/get-participants", findAll);

export default router;
