const fs = require("fs");
const { Client, Collection, GatewayIntentBits } = require("discord.js");
require("dotenv").config();
const { token } = process.env;

const client = new Client({ intents: [GatewayIntentBits.Guilds] });
client.commands = new Collection();
client.commandArray = [];

const functionFolders = fs.readdirSync("./src/functions");
for (const folder of functionFolders) {
  const functionFiles = fs
    .readdirSync(`./src/functions/${folder}`)
    .filter((file) => file.endsWith("js"));
  for (const file of functionFiles) {
    require(`./functions/${folder}/${file}`)(client);
  }
}

client.events();
client.command();
client.login(token);

// const commandsPath = path.join(__dirname, "commands");
// const commandFiles = fs
//   .readdirSync(commandsPath)
//   .filter((file) => file.endsWith(".js"));
// for

// for (const file of commandFiles) {
//   const filePath = path.join(commandsPath, file);
//   const command = require(filePath);
//   client.commands.set(command.data.name, command);
// }
