exports.run = function(client, message, args) {
   var argresult = args.join(' ');
   if(!argresult){
     client.user.setGame(null)
   }
    client.user.setGame(`on ${client.guilds.size} servers | ${argresult}`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sg'],
  permLevel: 4
};

exports.help = {
  name: 'setgame',
  description: 'Sets The Game Of The Bot.',
  usage: 'setgame [game]'
};