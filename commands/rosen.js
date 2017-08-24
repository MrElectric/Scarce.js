const yt = require('ytdl-core');
exports.run = function(client, message){
     const voiceChannel = message.member.voiceChannel;
      var video = Math.floor(Math.random() * 7);
    if (!voiceChannel) {
      return message.reply(`Please be in a voice channel first!`);
    }
 if(video === 1){
     voiceChannel.join()
      .then(connnection => {
        let stream = yt("https://www.youtube.com/watch?v=Akwm2UZJ34o", {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => {
          voiceChannel.leave();
        });
      });
   }
   if(video === 2){
       voiceChannel.join()
      .then(connnection => {
        let stream = yt("https://www.youtube.com/watch?v=7BxQLITdOOc", {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => {
          voiceChannel.leave();
        });
      });
   }
    if(video === 3){
       voiceChannel.join()
      .then(connnection => {
        let stream = yt("https://www.youtube.com/watch?v=dmeS6U_OcE4", {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => {
          voiceChannel.leave();
        });
      });
   }
    if(video === 4){   
       voiceChannel.join()
      .then(connnection => {
        let stream = yt("https://www.youtube.com/watch?v=tATTHlG5lxg", {audioonly: true}); 
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => {
          voiceChannel.leave();
        });
      });
   }
    if(video === 5){
       voiceChannel.join()
      .then(connnection => {
        let stream = yt("https://www.youtube.com/watch?v=98kUCEFtwRI", {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => {
          voiceChannel.leave();
        });
      });
   }
    if(video === 6){     
       voiceChannel.join()
      .then(connnection => {
        let stream = yt("https://www.youtube.com/watch?v=vwcbh7IOdPQ", {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => {
          voiceChannel.leave();
        });
      });
      if(video === 7){     
       voiceChannel.join()
      .then(connnection => {
        let stream = yt("https://www.youtube.com/watch?v=z1cfVQyrQ3Q&", {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => {
          voiceChannel.leave();
        });
      });
    }
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'rosen',
  description: 'Chooses From 4 Micheal Rosen Videos',
  usage: 'rosen'
};