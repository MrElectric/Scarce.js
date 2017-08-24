const Discord = require('discord.js')
exports.run = function(client, message, args) {
const eightball = require('8ball')()
 var argresult = args.join(' ');
if (message.author.id === "149655352932040705"){
return message.channel.sendMessage('The Answer Is Yes, Dont Ask Again')
}
 client.startTyping
                 const embed = new Discord.RichEmbed()
  .setTitle(':8ball: **Ask The Magic 8Ball!** :8ball:')
  .setAuthor(`${message.author.username}`, `${message.author.displayAvatarURL}`)
  .setColor(0x00AE86) 
  .addField('**Question:**', `***${argresult}***`)
  .addField('**Answer:**', `***${eightball}***`)
  .setTimestamp()

message.channel.sendEmbed(
  embed,
  '',
  { disableEveryone: true }
  );
client.typingStop
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: '8ball',
  description: 'Ask The Magic 8Ball A Question!',
  usage: '8ball [question]'
};