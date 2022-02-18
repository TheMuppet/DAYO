// import { Application } from "../deps.ts";
// import router from "./routes.ts";

// const port = 5000;
// const server = new Application();

// server.use(router.routes());
// server.use(router.allowedMethods());

// console.log(`Server run on port ${port}`);

// await server.listen({ port });



// for testing mongo connection
import { Application } from "https://deno.land/x/oak/mod.ts";

const app = new Application();
import router from "./routes/routes.ts";
const PORT = 3000;

app.use(router.routes());
app.use(router.allowedMethods());
app.listen({ port: PORT });