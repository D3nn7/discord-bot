const { Events } = require('discord.js');

module.exports = {
	name: Events.ClientReady,
	once: true,
	execute(client) {
		console.log(`Ready! Logged in as ${client.user.tag}`);
    console.log(`Invite url: https://discord.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=8`);
	},
};