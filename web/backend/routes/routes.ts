import { Router } from "../../../deps/web/deps.ts";
import {
  createParticipant,
  findAll,
} from "../controller/participantController.ts";
import { createMatches } from "../controller/matchController.ts";

const router = new Router();

const matches = [
  {
    "man": {
      "name": "Andre",
      "pic":
        "https://ais-cf.tvnow.de/tvnow/cms/7757881aaa8a0be975514c2277a67bda/400x0/image.jpg",
    },
    "woman": {
      "name": "Dana",
      "pic":
        "https://ais-cf.tvnow.de/tvnow/cms/5fa1f483fda2271d5395a7837748e777/400x0/image.jpg",
    },
    "probability": 100,
  },
  {
    "man": {
      "name": "Antonino",
      "pic":
        "https://ais-cf.tvnow.de/tvnow/cms/4b1e099767b2ceecdbecba42f4467d26/400x0/image.jpg",
    },
    "woman": {
      "name": "Estelle",
      "pic":
        "https://ais-cf.tvnow.de/tvnow/cms/075b491ef0600923d4b975c98128684d/400x0/image.jpg",
    },
    "probability": 100,
  },
  {
    "man": {
      "name": "Dustin",
      "pic":
        "https://ais-cf.tvnow.de/tvnow/cms/2611636cfc65f5f83cb12c4121e5b277/400x0/image.jpg",
    },
    "woman": {
      "name": "Isabelle",
      "pic":
        "https://ais-cf.tvnow.de/tvnow/cms/359cb304c833e004c8580a3a365f886e/400x0/image.jpg",
    },
    "probability": 80,
  },
];

router
  .get("/", (ctx) => {
    ctx.response.body = "This is the home route";
  })
  .post("/add-participant", createParticipant)
  .post("/add-matches", createMatches)
  .post("/get-participants", findAll)
  .get("/api/v1/matches", (context) => {
    context.response.body = matches;
  });

export default router;
