import { Application } from "../../deps/web/deps.ts";
import router from "./routes/routes.ts";

const port = 5000;
const server = new Application();

server.use(router.routes());
server.use(router.allowedMethods());

console.log(`Server run on port ${port}`);

await server.listen({ port });
