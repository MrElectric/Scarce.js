const Discord = require('discord.js');
exports.run = function(client, message) {
         const embed = new Discord.RichEmbed()
  .setTitle(`${message.guild.name}`)
  .setAuthor(`${message.author.username}`, `${message.author.displayAvatarURL}`)
  .setColor(0x00AE86) 
  .addField('Info', `Members: ${message.guild.members.size} Member(s)\nOwner: ${message.guild.owner}\nRegion: ${message.guild.region}\nChannels: ${message.guild.channels.size}\nCreated At: ${message.guild.createdAt}\nId: ${message.guild.id}\nVerification Level: ${message.guild.verificationLevel}\nRoles: ${message.guild.roles.size}\nIs Large (over 250 people): ${message.guild.large ? "True" : "False"}\nDefault Channel: ${message.guild.defaultChannel}`)
  .setThumbnail(message.guild.iconURL)

message.channel.sendEmbed(
  embed,
  '',
  { disableEveryone: true }
  );
const embed2 = new Discord.RichEmbed()
  .setDescription(message.guild.emojis.array().join(','))

message.channel.sendEmbed(
  embed2,
  '',
  { disableEveryone: true }
  );
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['gi', 'ginfo', 'guildi', 'serverinfo', 'se'],
  permLevel: 0
};

exports.help = {
  name: 'guildinfo',
  description: 'Displays The Guild Info',
  usage: 'guildinfo'
};
