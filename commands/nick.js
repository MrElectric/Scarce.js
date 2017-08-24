exports.run = function(client, message, args) {
 var argresult = args.join(' ');
 if (argresult){
   message.guild.member(client.user).setNickname(argresult).then(user => message.reply(`My New Nickname Is ${argresult}!`)).catch(console.error);
  }
  else {
      message.guild.member(client.user).setNickname(null).then(user => message.reply(`Nickname Turned Off!`)).catch(console.error);
 } 
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4
};

exports.help = {
  name: 'nick',
  description: 'NickName The Bot!.',
  usage: 'nick [name]'
};