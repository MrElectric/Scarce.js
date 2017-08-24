const Discord = require('discord.js')
exports.run = function(client, message) {
              const uptimeh = Math.floor(process.uptime() / (60 * 60));
  const uptimem = Math.floor(process.uptime() % (60 * 60) / 60);
  const uptimes = Math.floor(process.uptime() % 60);
  let embed = {
    color: 2455143,
    author: {
      name: `Scarce.js Info`,
      icon_url: '' 
    },
   fields: [
      { name: 'Owner:',
        value: 'ᅠᅠ#2757',
        inline: true },
      { name: 'Library:',
        value: 'Discord.js',
        inline: true },
      { name: 'Scarce.js Version:',
        value: '3.5.0',
        inline: true },
      { name: 'Servers:',
        value: client.guilds.size,
        inline: true },
      { name: 'Channels:',
        value: client.channels.size,
        inline: true },
      { name: 'Users:',
        value: client.users.size,
        inline: true },
      { name: 'Uptime:',
        value: `${uptimeh}h ${uptimem}m ${uptimes}s`,
        inline: true },
      { name: 'Scarce.js Server:',
        value: `[Click Here](https://discord.gg/P323cmV)`,
        inline: true },
        {
          name: 'GitHub',
          value: `[Click Here](https://github.com/MrSchnee)`,
          inline: true 
        }
    ]
     };
  return message.channel.sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'info',
  description: 'Talks About Scarce.js And The Creator',
  usage: 'info'
};