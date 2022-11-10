// const { SlashCommandBuilder } = require("discord.js");

// module.exports = {
//   data: new SlashCommandBuilder()
//     .setName("roll")
//     .setDescription("Roll a 2d6: 3")
//     .addNumberOption((option) =>
//       option
//         .setName("bonus")
//         .setDescription("The bonus stat of your roll")
//         .setRequired(false)
//     ),
//   /**
//    * @param {discord.Client} client
//    * @param {discord.CommandInteraction} interaction
//    */
//   async execute(interaction, client) {
//     let choiceArray = [1, 2, 3, 4, 5, 6];
//     const bonus = interaction.options.getNumber("bonus");
//     let diceOne = choiceArray[Math.floor(Math.random() * choiceArray.length)];
//     let diceTwo = choiceArray[Math.floor(Math.random() * choiceArray.length)];
//     let total = diceOne + diceTwo + bonus;
//     let message = "";

//     if (total >= 10) {
//       message = `Crit Success: You rolled ${diceOne} + ${diceTwo} + ${bonus} = ${total}`;
//     } else if (total >= 7) {
//       message = `Partial Success: You rolled ${diceOne} + ${diceTwo} + ${bonus} = ${total}`;
//     } else {
//       message = `Fail: You suck, you rolled ${diceOne} + ${diceTwo} + ${bonus} = ${total}`;
//     }
//     try {
//       await interaction.reply({ content: message });
//     } catch (err) {
//       console.log(err);

//       await interaction.reply({
//         content: "There was an error while executing this command...",
//         ephemeral: true,
//       });
//     }
//   },
// };
