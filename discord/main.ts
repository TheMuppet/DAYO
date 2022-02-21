import { config } from "../deps.ts";
import { Client, GatewayIntents, Message } from "../deps.ts";

const env = config();

const token = env.BOT_TOKEN;
const intents = [
  GatewayIntents.DIRECT_MESSAGES,
  GatewayIntents.GUILDS,
  GatewayIntents.GUILD_MESSAGES,
];

const client = new Client();

client.on("ready", () => {
  console.log(`Ready! User: ${client.user?.tag}`);
});

// Listen for event whenever a Message is sent
client.on("messageCreate", (msg: Message): void => {
  if (msg.content === "!ping") {
    msg.channel.send(`Pong! WS Ping: ${client.gateway.ping}`);
  }
});

client.connect(token, intents);
