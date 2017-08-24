const Discord = require('discord.js');
exports.run = function(client, msg, args) {
  msg.delete();
  msg.channel.send("Ping?").then(m => m.edit(`Pong! Latency is ${m.createdTimestamp - msg.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`) );
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['pi'],
  permLevel: 0
};

exports.help = {
  name: 'ping',
  description: 'Pings The Bot.',
  usage: 'ping'
};