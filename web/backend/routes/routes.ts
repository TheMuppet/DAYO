import { Router } from "../../../deps.ts";
import {
  createParticipant,
  findAll,
} from "../controller/participantController.ts";

const router = new Router();
router
  .get("/", (ctx) => {
    ctx.response.body = "This is the home route";
  })
  .post("/get-participants", findAll)
  .post("/add-participant", createParticipant);

export default router;
