exports.run = function(client, message){
     const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`Please be in a voice channel first!`);
    }
voiceChannel.join().then(connection => {
  const dispatcher = connection.playFile('./rr.mp3');
   dispatcher.on('end', () => {
          voiceChannel.leave();
   });
});
};

  exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'rickroll',
  description: 'RickRoll Your Friends!.',
  usage: 'rickroll'
};
  