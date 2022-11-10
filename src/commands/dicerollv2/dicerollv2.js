const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("roll")
    .setDescription("Roll a 2d6 + your stat bonus")
    .addNumberOption((option) =>
      option
        .setName("bonus")
        .setDescription("The bonus stat of your roll")
        .setRequired(true)
    ),
  /**
   * @param {discord.Client} client
   * @param {discord.CommandInteraction} interaction
   */
  async execute(interaction, client) {
    let choiceArray = [1, 2, 3, 4, 5, 6];
    const bonus = interaction.options.getNumber("bonus");
    let diceOne = choiceArray[Math.floor(Math.random() * choiceArray.length)];
    let diceTwo = choiceArray[Math.floor(Math.random() * choiceArray.length)];
    let total = diceOne + diceTwo + bonus;
    let message = "";
    let title = "";
    let footer = "No experience gained";

    if (total >= 10) {
      title = "Critical Success";
      message = `You rolled ${diceOne} + ${diceTwo} + ${bonus} = ${total}`;
    } else if (total >= 7) {
      title = "Partial Success";
      message = `You rolled ${diceOne} + ${diceTwo} + ${bonus} = ${total}`;
    } else {
      title = "Failure";
      message = `You rolled ${diceOne} + ${diceTwo} + ${bonus} = ${total}`;
      footer = "Mark one experience :thumbsup:";
    }
    try {
      const embed = new EmbedBuilder()
        .setColor(0x0099ff)
        .setTitle(`:game_die: ${title}`)
        .setTimestamp()
        .setFooter({ text: footer })
        .setDescription(message);

      await interaction.reply({ embeds: [embed] });
    } catch (err) {
      console.log(err);

      await interaction.reply({
        content: "There was an error while executing this command...",
        ephemeral: true,
      });
    }
  },
};
