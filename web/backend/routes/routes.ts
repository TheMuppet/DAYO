import { Router } from "../../../deps/web/deps.ts";
import {
  createParticipant,
  getParticipant,
  getParticipants,
} from "../controller/participantController.ts";
import {
  createMatchBox,
  getMatchBox,
  getMatchBoxes,
} from "../controller/matchBoxController.ts";
import {
  createMatchNight,
  getMatchNight,
  getMatchNights,
} from "../controller/matchNightController.ts";
import {
  createMatches,
  getMatch,
  getMatches,
} from "../controller/matchController.ts";

const router = new Router();

router
  .get("/api/v1", (ctx) => {
    ctx.response.body = "This is the home route";
  })
  // API matchnights
  .post("/api/v1/matchnights", createMatchNight)
  .get("/api/v1/matchnights", getMatchNights)
  .get("/api/v1/matchnights/:id", getMatchNight)
  // API matchboxes
  .post("/api/v1/matchboxes", createMatchBox)
  .get("/api/v1/matchboxes", getMatchBoxes)
  .get("/api/v1/matchboxes/:id", getMatchBox)
  // API matches
  .post("/api/v1/matches", createMatches)
  .get("/api/v1/matches", getMatches)
  .get("/api/v1/matches/:id", getMatch)
  // API participant
  .post("/api/v1/participants", createParticipant)
  .get("/api/v1/participants", getParticipants)
  .get("/api/v1/participants/:id", getParticipant)

export default router;
