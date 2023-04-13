const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('poll')
        .setDescription('Create a poll with reactions.')
        .addStringOption(option =>
            option.setName('question')
                .setDescription('The question for the poll.')
                .setRequired(true))
        .addStringOption(option =>
            option.setName('option1')
                .setDescription('The first option.')
                .setRequired(true))
        .addStringOption(option =>
            option.setName('option2')
                .setDescription('The second option.')
                .setRequired(true))
        .addStringOption(option =>
            option.setName('option3')
                .setDescription('The third option.'))
        .addStringOption(option =>
            option.setName('option4')
                .setDescription('The fourth option.')),

    async execute(interaction) {
        const question = interaction.options.getString('question');
        const option1 = interaction.options.getString('option1');
        const option2 = interaction.options.getString('option2');
        const option3 = interaction.options.getString('option3');
        const option4 = interaction.options.getString('option4');

        const embed = new EmbedBuilder()
            .setTitle("💬 Poll time")
            .setDescription(`
            **${question}**
            1️⃣ ${option1}
            2️⃣ ${option2}
            ${option3 != null ? "3️⃣ " + option3 : "" }
            ${option4 != null ? "4️⃣ " + option4 : "" }
            `)
            .setColor('#7AA874')
            .setTimestamp()
            .setFooter({ text: 'Poll created by ' + interaction.user.username });

        const msg = await interaction.reply({ embeds: [embed], fetchReply: true });

        await msg.react('1️⃣');
        await msg.react('2️⃣');
        if (option3 != null) await msg.react('3️⃣');
        if (option4 != null) await msg.react('4️⃣');
    },
};