import { AdminSchema } from "../../web/backend/db/schemas/admin.ts";
import {
  createOptions,
  extractMatches,
  getAdminIds,
  Option,
} from "../commands/util.ts";
import {
  ApplicationCommandInteraction,
  Client,
  User,
} from "../../deps/discord/deps.ts";
import { assertEquals } from "../../deps/tests/deps.ts";

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

Deno.test("extractMatches", () => {
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
    resolved: { users: {}, channels: {}, members: {}, roles: {}, messages: {} },
  });
  const matches: Array<Array<string>> = extractMatches(interaction, "case");
  assertEquals(matches.length, 10);
  assertEquals(matches[0][0], "Man");
  assertEquals(matches[0][1], "Woman");
});
