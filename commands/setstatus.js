exports.run = function(client, message, args) {
 var argresult = args.join(' ');
    client.user.setStatus(argresult);
    if(args.length === 0){
      return message.channel.sendMessage('No Status Was Defined! Usage: ``setstatus [status]``')
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['ss'],
  permLevel: 4
};

exports.help = {
  name: 'setstatus',
  description: 'Sets The Status Of The Bot.',
  usage: 'setstatus <status>'
};