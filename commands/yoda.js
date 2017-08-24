const Discord = require('discord.js')
exports.run = (client, message, args) => {
var YodaSpeak = require('yoda-speak');
var yoda = new YodaSpeak('NeFgXhPEB3mshsgEFbauFDPFjsj9p1GaTiPjsnlV4iYg9GyYv9');
 var argresult = args.join(' ');
 
yoda.convert(argresult,
function(err, result) {
    if (!err) {
                        const embed = new Discord.RichEmbed()
  .setTitle('**Yoda Translator!**')
  .setAuthor(`${message.author.username}`, `${message.author.displayAvatarURL}`)
  .setColor(0x00AE86) 
  .addField(`***Input:***`, `***${argresult}***`)
  .addField(`***Output:***`, `***${result.toString()}***`)
  .setTimestamp()

message.channel.sendEmbed(
  embed,
  '',
  { disableEveryone: true }
  );
  if (err) {
        const embedErr = new Discord.RichEmbed()
          .setTitle('Yoda Translator')
          .setColor(0x00AE86)
           .setAuthor(`${message.author.username}`, `${message.author.displayAvatarURL}`)
          .setTimestamp('')
          .addField(`Error:`, `**An Error Occured**`);
};

    };
});
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'yoda',
  description: 'Translate Things Into Yodish!',
  usage: 'yoda [message]'
};