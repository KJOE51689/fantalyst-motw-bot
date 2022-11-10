const { SlashCommandBuilder } = require("discord.js");

const lookupValues = [
  {
    name: "Kick Some Ass",
    value: "When you get into a fight and kick some ass, roll +Tough.",
  },
  {
    name: "Act Under Pressure",
    value: "When you act under pressure, roll +Cool.",
  },
  {
    name: "Help Out",
    value: "When you help another hunter, roll +Cool.",
  },
  {
    name: "Manipulate Someone",
    value: `Once you have given them a reason, tell
  them what you want them to do and roll
  +Charm.`,
  },
  {
    name: "protect someone",
    value: `When you prevent harm to another
  character, roll +Tough.`,
  },
  {
    name: "Read A Bad Situation",
    value: `When you look around and read a bad
  situation, roll +Sharp.`,
  },
  {
    name: "Investigate a mystery",
    value: `When you investigate a mystery, roll +Sharp.`,
  },
];

module.exports = {
  data: new SlashCommandBuilder()
    .setName("lookup-text")
    .setDescription("Lookup different Monster Of the Week moves. Part 10")
    .addStringOption((option) =>
      option
        .setName("category")
        .setDescription("The gif category")
        .setRequired(true)
        .addChoices(...lookupValues)
    ),
  async execute(interaction, client) {
    let choice = interaction.options.getString("category");
    console.log("values", choice);

    await interaction.reply({ content: `Answer: ${choice}` });
  },
};
