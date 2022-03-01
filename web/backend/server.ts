import { Application } from "../../deps/web/deps.ts";
import { parse } from "../../deps/web/deps.ts";

const { args } = Deno;
const port: number = parse(args).port || 8080;
const app = new Application();

app.use(async (context, next) => {
  try {
    await context.send({
      root: `${Deno.cwd()}/../frontend/dist/`,
      index: "index.html",
    });
  } catch {
    next();
  }
});

console.log(`Server run on port ${port}`);

await app.listen({ port });
