import { AdminSchema } from "../../web/backend/db/schemas/admin.ts";
import {
  checkInputMatches,
  createOptions,
  extractMatches,
  getAdminIds,
  Option,
  shuffleParticipants,
} from "../commands/util.ts";
import {
  ApplicationCommandInteraction,
  Client,
  User,
} from "../../deps/discord/deps.ts";
import { assertEquals } from "../../deps/tests/deps.ts";
import { ParticipantSchema } from "../../web/backend/db/schemas/participant.ts";
import { Bson } from "../../deps/web/deps.ts";

Deno.test("getAdminId", () => {
  const admins: Array<AdminSchema> = [
    {
      discordId: "12341234",
      name: "admin",
    },
    {
      discordId: "67576451324",
      name: "admin2",
    },
  ];
  const adminId: Array<string> = getAdminIds(admins);
  assertEquals(adminId.length, 2);
  assertEquals(adminId[0], "12341234");
  assertEquals(adminId[1], "67576451324");
});

Deno.test("createOptions", () => {
  const options: Array<Option> = createOptions("test", "case", false, 10);
  assertEquals(options.length, 10);
  assertEquals(options[0].name, "test-1");
  assertEquals(options[0].description, "case");
  assertEquals(options[0].required, false);
});

Deno.test("extractMatches", async (t) => {
  const client: Client = new Client();
  const user: User = new User(client, {
    id: "213412341234123",
    username: "test",
    discriminator: "1234",
    avatar: "1234123412341234123",
    bot: undefined,
    system: undefined,
    mfa_enabled: undefined,
    locale: undefined,
    verified: undefined,
    email: undefined,
    flags: undefined,
  });
  await t.step("Input Correct", () => {
    const interaction = new ApplicationCommandInteraction(client, {
      application_id: "",
      id: "",
      token: "",
      type: 2,
      data: {
        type: 2,
        options: [
          { value: "Man.Woman", type: 3, name: "case-1" },
          { value: "Man.Woman", type: 3, name: "case-2" },
          { value: "Man.Woman", type: 3, name: "case-3" },
          { value: "Man.Woman", type: 3, name: "case-4" },
          { value: "Man.Woman", type: 3, name: "case-5" },
          { value: "Man.Woman", type: 3, name: "case-6" },
          { value: "Man.Woman", type: 3, name: "case-7" },
          { value: "Man.Woman", type: 3, name: "case-8" },
          { value: "Man.Woman", type: 3, name: "case-9" },
          { value: "Man.Woman", type: 3, name: "case-10" },
        ],
        name: "test",
        id: "test",
      },
    }, {
      user: user,
      resolved: {
        users: {},
        channels: {},
        members: {},
        roles: {},
        messages: {},
      },
    });
    const matches: Array<Array<string>> = extractMatches(interaction, "case");

    assertEquals(matches.length, 10);
    assertEquals(matches[0][0], "Man");
    assertEquals(matches[0][1], "Woman");
  });

  await t.step("Arbitrary input", () => {
    const interaction = new ApplicationCommandInteraction(client, {
      application_id: "",
      id: "",
      token: "",
      type: 2,
      data: {
        type: 2,
        options: [
          { value: "asdfasdf", type: 3, name: "case-1" },
          { value: "SDFS;kl..j", type: 3, name: "case-2" },
          { value: "$&^%#$", type: 3, name: "case-3" },
          { value: "Man.Woman", type: 3, name: "case-4" },
          { value: "Man.Woman", type: 3, name: "case-5" },
          { value: "Man.Woman", type: 3, name: "case-6" },
          { value: "Man.Woman", type: 3, name: "case-7" },
          { value: "Man.Woman", type: 3, name: "case-8" },
          { value: "Man.Woman", type: 3, name: "case-9" },
          { value: "Man.Woman", type: 3, name: "case-10" },
        ],
        name: "test",
        id: "test",
      },
    }, {
      user: user,
      resolved: {
        users: {},
        channels: {},
        members: {},
        roles: {},
        messages: {},
      },
    });
    const matches: Array<Array<string>> = extractMatches(interaction, "case");

    assertEquals(matches.length, 10);
    assertEquals(matches[0][0], "asdfas");
    assertEquals(matches[0][1], "f");
    assertEquals(matches[1][0], "SDFS");
    assertEquals(matches[1][1], "kl");
    assertEquals(matches[2][0], "");
    assertEquals(matches[2][1], "");
  });
});

// This test only works if .env is configured
// Was tested locally
// ignore: true seems only to work locally
Deno.test("checkInputMatches", {
  ignore: true,
}, async (t) => {
  await t.step("Input Correct", async () => {
    const matchesCorrect: Array<Array<string>> = [
      ["Andre", "Dana"],
      ["Antonino", "Estelle"],
      ["Dustin", "Isabelle"],
      ["Jordi", "Jessica"],
      ["Leon", "Joelina"],
      ["Marius", "Kerstin"],
      ["Max", "Marie"],
      ["Mike", "Raphaela"],
      ["William", "Zaira"],
      ["Tim", "Monami"],
    ];
    const [check, msg]: [boolean, string] = await checkInputMatches(
      matchesCorrect,
    );

    assertEquals(msg, "");
    assertEquals(check, true);
  });

  await t.step("Input woman incorrect", async () => {
    const womanWrong: Array<Array<string>> = [["Andre", "None"]];
    const [check, msg]: [boolean, string] = await checkInputMatches(womanWrong);

    assertEquals(
      msg,
      `Sorry, ${womanWrong[0][1]} is not a female participant of this season`,
    );
    assertEquals(check, false);
  });

  await t.step("Input man incorrect", async () => {
    const manWrong: Array<Array<string>> = [["None", "Dana"]];
    const [check, msg]: [boolean, string] = await checkInputMatches(manWrong);

    assertEquals(
      msg,
      `Sorry, ${manWrong[0][0]} is not a male participant of this season`,
    );
    assertEquals(check, false);
  });
});

Deno.test("shuffleParticipants", () => {
  const participants: ParticipantSchema[] = [
    {
      _id: new Bson.ObjectId(),
      name: "Test",
      gender: "w",
      age: 23,
      img: "",
      season: 3,
    },
    {
      _id: new Bson.ObjectId(),
      name: "Test1",
      gender: "w",
      age: 23,
      img: "",
      season: 3,
    },
    {
      _id: new Bson.ObjectId(),
      name: "Test2",
      gender: "w",
      age: 23,
      img: "",
      season: 3,
    },
    {
      _id: new Bson.ObjectId(),
      name: "Test3",
      gender: "w",
      age: 23,
      img: "",
      season: 3,
    },
  ];

  const shuffled: ParticipantSchema[] = shuffleParticipants(participants);

  assertEquals(participants.length, shuffled.length);
  assertEquals(participants, shuffled);
});
