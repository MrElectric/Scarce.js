const yt = require('ytdl-core');
exports.run = function(client, message){
     const voiceChannel = message.member.voiceChannel;
         if (!voiceChannel) {
      return message.reply(`Please be in a voice channel first!`);
    }
     voiceChannel.join()
      .then(connnection => {
        let stream = yt("https://www.youtube.com/watch?v=r7tiwkcd0qY&", {audioonly: true});
        const dispatcher = connnection.playStream(stream);
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
  name: 'naught',
  description: 'Mr Electric Send Him To The Principals Office And Have Him Expelled',
  usage: 'naught'
};