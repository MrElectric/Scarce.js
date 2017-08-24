exports.run = function(client, message, args) {
 var argresult = args.join(' ');
 if (args.length > 0){
  return message.channel.sendMessage(argresult)
  
  } else {
      return message.channel.sendMessage('No Message Was Defined. Usage: ``say [message]`')
 } 
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'say',
  description: 'Says What You Want The Bot To Say.',
  usage: 'say [message]'
};