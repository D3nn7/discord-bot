const { ActionRowBuilder, ButtonBuilder, ButtonStyle, SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('about')
		.setDescription('Get infos about this bot.'),
	async execute(interaction) {
		const row = new ActionRowBuilder()
			.addComponents(
				new ButtonBuilder()
					.setLabel('Repository')
					.setURL('https://github.com/D3nn7/discordjs-bot')
					.setStyle(ButtonStyle.Link),
			);
		await interaction.reply({ content: '**Simple.** Bot \n This bot was created by D3nn7#6666 to experiment with discordjs. You can visit the source code on Github.', components: [row] });
	},
};