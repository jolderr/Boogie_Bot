module.exports = {
    name: 'join command',
    description: 'command to make bot join discord channel',
    
    async join(message)
    {
        const {joinVoiceChannel} = require('@discordjs/voice')
        //TODO: Add checker for user being in voice channel
        joinVoiceChannel({
            channelId: message.member.voice.channel.id,
            guildId: message.member.voice.channel.guild.id,
            adapterCreator: message.member.voice.channel.guild.voiceAdapterCreator
        })
    }
}
