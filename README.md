# Boogie_Bot
Author: Jonathan Olderr

October 2021 - Present

Language: Javascript
## Description
Currently developing a discord music bot. The bot would be able to join a discord voice channel and play music off the youtube API.

## Requirments
For the bot to run, you need to make sure you have a few elements.
* When initially creating your bot, make sure it has the proper permissions. Things such as joining a voice channel, speaking, sending messages, etc.
* Make sure you have a .env file added with your bot's token. It only needs to be one line, but in the case of this application, it would just be DISCORD_BOOGIE_TOKEN=//YourToken//. DO NOT share your token, as it is essentially the password for your bot. With it, mean people can make your bot do nefarious stuff.
* You will need a few .js files downloaded. Discord has its own discord.js and @discordjs/voice libraries, (both of which have great documentation at https://discord.js.org/#/docs/main/stable/general/welcome and https://discordjs.github.io/voice/), both will be needed for the program to work. They can be downloaded with the cmd commands ***npm install discord.js*** and ***npm install @discordjs/voice***.
* *When the youtube side of the bot is implemented, it will be with the yt-search and ytdl-core libraries*
* Other recommended libraries would be @discordjs/opus, and FFmpeg.
* One tool I have used which has been helping me throughout this implementation process has been nodemon. This tool is NOT required, I just use it for project simplicity. It automatically gives error reporting on your bot as it's running. It updates whenever something is changed in the code and can be set to display a message for when the bot is connected and ready to run (for this program, it's "Boogie Bot is booging now boys").


## Status
The bot is still underdeveloped. Currently, the bot can only join/leave a voice call given the commands ($join/$leave).

Current TODO:
* Bot interaction with youtube API to play a requested song
* Checker for if a user is in a voice channel
* General bug fixes


Future TODO:
* Song queuing
* Pause feature
* Finding a third party system to run the bot continuously
