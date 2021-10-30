// require .env file which holds enviorment variables
require('dotenv').config();

// create discord instance
const Discord = require('discord.js');

// initalize client and intents
const { Client, Intents, Channel, DiscordAPIError } = require("discord.js");
//
const fs = require('fs');

//create client instance 
const client = new Discord.Client({intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.DIRECT_MESSAGES, 'GUILD_VOICE_STATES', 'GUILD_MESSAGES', 'GUILDS']});
// set client command member
client.commands = new Discord.Collection();

// 
const commandFile = fs.readdirSync('./src/').filter(file => file.endsWith('.js'));

// for each file in the command file
for(const file of commandFile)
{
  const command = require(`./${file}`);
  client.commands.set(command.name, command)
}

// logs the bot onto discord using token
client.login(process.env.DISCORD_BOOGIE_TOKEN);

// ready message is displayed when connection is made
client.on('ready', () => {
  console.log(`${client.user.username} is booging now boys`)
});

// cases for user input
client.on("messageCreate", (message) => {  
  // checks if bot is inputing message
  if(message.author.bot) { return; }

  //switch case for inputs
  switch(message.content.toLowerCase())
  {
    // user inputs join command
    case "$join":
        client.commands.get('join command').join(message);
        break;
    // user inputs play command
      case "$play":
        message.channel.send("Play");
        break;
    // user inputs skip command
      case "$skip":
        message.channel.send("Skip");
        break;
    // user inputs repeat command
      case "$repeat":
        message.channel.send("Repeat");
        break;
    //user inputs leave command
      case "$leave":
        client.commands.get('leave command').leave(message);
        break;
  }
});
