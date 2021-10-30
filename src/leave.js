module.exports = {
    name : 'leave command',
    description: 'command for the bot to leave channel',

    async leave(message) 
    {
        const {joinVoiceChannel} = require('@discordjs/voice')
        //TODO: Add checker for if user is in voice channel bot is in
        joinVoiceChannel({
            channelId: message.member.voice.channel.id,
            guildId: message.member.voice.channel.guild.id,
            adapterCreator: message.member.voice.channel.guild.voiceAdapterCreator
        }).destroy()
    }
}