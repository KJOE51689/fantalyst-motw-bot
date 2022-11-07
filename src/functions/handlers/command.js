const { REST } = require(`@discordjs/rest`);
const { Routes } = require("discord-api-types/v9");
const fs = require("fs");

module.exports = (client) => {
  client.command = async () => {
    const commandsFolders = fs.readdirSync("./src/commands");
    for (const folder of commandsFolders) {
      const commandFiles = fs
        .readdirSync(`./src/commands/${folder}`)
        .filter((file) => file.endsWith(".js"));
      const { commands, commandArray } = client;
      for (const file of commandFiles) {
        const command = require(`../../commands/${folder}/${file}`);
        console.log("command", command.data.name);
        commands.set(command.data.name, command);
        commandArray.push(command.data.toJSON());
        console.log(`command: ${command.data.name} registered`);
      }
    }
    const clientId = process.env.client;
    const rest = new REST({ version: 9 }).setToken(process.env.token);
    try {
      console.log(" Started refreshing application (/) commands");

      console.log("command", client.commandArray.length);
      await rest.put(Routes.applicationCommands(clientId), {
        body: client.commandArray,
      });

      console.log("sucessfully reloaded");
    } catch (error) {
      console.log(error);
    }
  };
};
