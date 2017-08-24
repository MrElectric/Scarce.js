const Discord = require('discord.js')
exports.run = function(client, message, args) {
 var argresult = args.join(' ');
 var stockFetcher = require("stock-fetcher");
if(args.length === 0){
    return message.channel.sendMessage('No Company Was Defined! Usage: ``stock [Company]`')
}
stockFetcher.getPrice(argresult, function(err, price){
     return message.channel.sendMessage(`**The Current Stock Of ${argresult} is $${price} Per Stock**`)
});

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'stock',
  description: 'Check A Company\'s Stock!',
  usage: 'stock [Company]'
};
