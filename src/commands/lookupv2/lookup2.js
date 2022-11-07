const {
  SlashCommandBuilder,
  AttachmentBuilder,
  EmbedBuilder,
} = require("discord.js");

const lookupValues = [
  {
    name: "Act Under Pressure",
    value: "pressure.jpg",
  },
  {
    name: "Help Out",
    value: "help.jpg",
  },
  {
    name: "Investigate a Mystery",
    value: "investigate.jpg",
  },
  {
    name: "Kick Some Ass",
    value: "KSA.jpg",
  },
  {
    name: "Manipulate Someone",
    value: "manipulate.jpg",
  },
  {
    name: "Protect Someone",
    value: "protect.jpg",
  },
  {
    name: "Read a Bad Situation",
    value: "situation.jpg",
  },
];

module.exports = {
  data: new SlashCommandBuilder()
    .setName("lookup2")
    .setDescription("Lookup different Monster Of the Week moves. Try 1")
    .addStringOption((option) =>
      option
        .setName("category")
        .setDescription("The gif category")
        .setRequired(true)
        .addChoices(...lookupValues)
    ),
  async execute(interaction, client) {
    let choice = interaction.options.getString("category");
    const attachment = new AttachmentBuilder(
      `./src/commands/lookupv2/img/${choice}`
    );
    const embed = new EmbedBuilder()
      .setTitle("Lookup Result")
      .setColor(0x18e1ee)
      .setImage(`attachment://${choice}`)
      .setThumbnail(client.user.displayAvatarURL())
      .setTimestamp(Date.now());

    await interaction.reply({ embeds: [embed], files: [attachment] });
  },
};
