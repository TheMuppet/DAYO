import { Application } from "../../deps.ts";
import router from "./routes/routes.ts";
import {parse} from "../../deps.ts";

const { args } = Deno;
const port = parse(args).port;
const server = new Application();

server.use(router.routes());
server.use(router.allowedMethods());

console.log(`Server run on port ${port}`);

await server.listen({ port });
