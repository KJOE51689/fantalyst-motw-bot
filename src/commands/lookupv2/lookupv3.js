const {
  SlashCommandBuilder,
  AttachmentBuilder,
  EmbedBuilder,
} = require("discord.js");

const lookupValues = [
  {
    name: "Act Under Pressure",
    value: "https://imgur.com/bAaNWDI.png",
  },
  {
    name: "Help Out",
    value: "https://imgur.com/sDMKXbV.png",
  },
  {
    name: "Investigate a Mystery",
    value: "https://imgur.com/hiqaDb6.png",
  },
  {
    name: "Kick Some Ass",
    value: "https://imgur.com/diwDzvL.png",
  },
  {
    name: "Manipulate Someone",
    value: "https://imgur.com/40UmphC.png",
  },
  {
    name: "Protect Someone",
    value: "https://imgur.com/oBLxcxK.png",
  },
  {
    name: "Read a Bad Situation",
    value: "https://imgur.com/rLgXDkS.png",
  },
  {
    name: "Use Magic",
    value: "https://imgur.com/PuRAiKe.png",
  },
  {
    name: "Big Magic",
    value: "https://imgur.com/OWztfXX.png",
  },
  {
    name: "Harm",
    value: "https://imgur.com/IMgpGcl.png",
  },
  {
    name: "Recovery",
    value: "https://imgur.com/1u6VIpd.png",
  },
  {
    name: "Luck",
    value: "https://imgur.com/q0CgVNF.png",
  },
  {
    name: "Level Up",
    value: "https://imgur.com/KROI67L.png",
  },
  {
    name: "End of Session",
    value: "https://imgur.com/3dYcmR4.png",
  },
];

module.exports = {
  data: new SlashCommandBuilder()
    .setName("lookup")
    .setDescription("Lookup different Monster Of the Week moves.")
    .addStringOption((option) =>
      option
        .setName("category")
        .setDescription("The gif category")
        .setRequired(true)
        .addChoices(...lookupValues)
    ),
  async execute(interaction, client) {
    let choice = interaction.options.getString("category");
    const attachment = new AttachmentBuilder(choice);
    const embed = new EmbedBuilder()
      .setTitle("Lookup Result: Imgur")
      .setColor(0x18e1ee)
      .setThumbnail(client.user.displayAvatarURL())
      .setTimestamp(Date.now());

    await interaction.reply({
      files: [attachment],
      ephemeral: true,
    });

    await interaction.edit;
  },
};
