var main = require("../app.js");
var Discord = require("discord.js");
exports.run = function(client, message) {
    var client = main.client;
    var queue = main.queue;
    let mention = message.mentions.users.first();
let sender = "";

if (message.channel.guild.member(message.author).nickname == null) {
  sender = message.author.username;
} else {
  sender = message.channel.guild.member(message.author).nickname;
}

if (mention != null || mention != undefined) {
  var name = mention.username + "'s ";

  if (mention.username.endsWith("s")) {
    name = mention.username + "' ";
  }
  const avatarEmbedOther = new Discord.RichEmbed()
  .setTitle(`${mention.username} avatar`)
  .setColor([121])
  .setFooter('', '')
  .setImage(`${mention.avatarURL}`)
  .setTimestamp('')
  .setURL('')
  .addField('Avatar', `${mention.avatarURL}`, false);
message.channel.sendEmbed(avatarEmbedOther, '', { disableEveryone: true });
return;
} else {
  const avatarEmbed = new Discord.RichEmbed()
  .setColor([121])
  .setFooter('', '')
  .setImage(`${message.author.avatarURL}`)
  .setThumbnail()
  .setTimestamp('')
  .setURL('')
  .addField('Avatar', `${message.author.avatarURL}`, false);


message.channel.sendEmbed(avatarEmbed, '', { disableEveryone: true });
return;
}
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['a', 'vatar', 'icon'],
  permLevel: 0
};

exports.help = {
  name: 'avatar',
  description: 'Shows you your Avatar',
  usage: 'avatar'
};