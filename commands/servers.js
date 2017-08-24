var Discord = require("discord.js");
  var main = require("../app.js")
exports.run = function(client, message, args) {
  var client = main.client;
                  const embed = new Discord.RichEmbed()
  .setTitle('Servers')
  .setAuthor(`${message.author.username}`, `${message.author.displayAvatarURL}`)
  .setColor(0x00AE86) 
  .setDescription(`**Scarce.js Is On ${client.guilds.size} Servers! \n Scarce.js Is On ${client.channels.size} Channels!**`)
  .setFooter('Servers', 'https://goo.gl/hkFYh0')
  .setThumbnail('https://cdn.discordapp.com/avatars/204334590687445005/72b3119d31519bb564185a84409b86bd.jpg?size=1024')
  .setTimestamp()

message.channel.sendEmbed(
  embed,
  '',
  { disableEveryone: true }
  );
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'servers',
  description: 'Displays All Of The Servers That Have Scarce.js',
  usage: 'servers'
};
