import { Router } from "../../../deps/web/deps.ts";
import {
  createParticipant,
  findAll,
} from "../controller/participantController.ts";
import { createMatchBox } from "../controller/matchBoxController.ts";
import { createMatchNight } from "../controller/matchNightController.ts"

const router = new Router();
router
  // .get("/", (ctx) => {
  //   ctx.response.body = "This is the home route";
  // })
  .post("/add-matchbox", createMatchBox)
  .post("/add-matchnight", createMatchNight)
  .post("/add-participant", createParticipant)
  .post("/get-participants", findAll);

export default router;
