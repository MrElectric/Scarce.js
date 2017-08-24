const Discord = require('discord.js');
exports.run = function(client, message) {
  const botChannel = message.guild.voiceConnection;
  let voiceChan = message.member.voiceChannel;
  if (!botChannel) {
    return message.channel.sendMessage('I am not in a voice channel!');
  } 
    if (!voiceChan) {
    return message.channel.sendMessage('You are not in a voice channel!');
  } 
  if(voiceChan && botChannel) {
   return message.channel.sendMessage('Leaving...').then(() => {
      voiceChan.leave();
    }).catch(error => message.channel.sendMessage(error));
  }
}

  exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'leave',
  description: 'Leave The Voice Channel.',
  usage: 'leave'
};
  