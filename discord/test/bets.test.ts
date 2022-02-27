import { createOptions } from "../commands/bet.ts";
import { assertEquals, assertNotEquals } from "../../deps/tests/deps.ts";

Deno.test({
  name: "createOptions returns a list of dictionaries with length of 10",
  fn: () => {
    const options = createOptions();
    assertNotEquals(options, []);
    assertEquals(options.length, 10);
  },
});
