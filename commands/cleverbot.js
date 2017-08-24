var cleverbot = require("cleverbot.io")
exports.run = function(client, message, args) {
    if(args.length > 0){
var argresult = args.join(' ');
bot = new cleverbot("pIVW0U2grBaEiVVM", "PjjqobsQR2r4ik2X1jjHfvqB09X3GQjy");
bot.setNick('Scarce.js');
bot.create(function (err, session) {
  bot.ask(argresult, function (err, response) {
    return message.channel.sendMessage(response); 
  }); if(args.length === 0){
      return message.channel.sendMessage('No Sentace Was Given. Usage ``cleverbot [sentance]')
  }
  });
}; 
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'cleverbot',
  description: 'Talk To CleverBot!',
  usage: 'cleverbot [sentance]'
};
