# Discord Bot
A simple bot written with [discordjs](discord.js.org) for the Discord chat platform.

## Installation
1. Clone the repository
2. Run `npm install`
3. Copy `env.example` to `.env` and fill in the values [see below](#env-file-setup)
4. Run `npm run deploy` to deploy you commands to discord
5. Run `npm run start` to start the bot

### ENV file setup
BOT_TOKEN - The token of the bot [(details)](https://discordjs.guide/preparations/setting-up-a-bot-application.html#your-bot-s-token)

BOT_CLIENT_ID - The client ID of the bot [(details)](https://support-dev.discord.com/hc/en-us/articles/360028717192-Where-can-I-find-my-Application-Team-Server-ID-#:~:text=The%20Application%20ID%2C%20also%20known,the%20game%20in%20your%20Library.)

## Commands
`/about` - Displays information about the bot

`/poll [question] [option1] [option2] [option3]? [option4]?` - Created a poll with up to 4 options

---
This project is not affiliated with Discord. Discord is a registered trademark of [Discord Inc](https://discordapp.com).