const YouTube = require('simple-youtube-api');
const youtube = new YouTube('AIzaSyAiDSEInk5gwufAtThoA3WLvcFlVJOfEVs');
const Discord = require('discord.js')
exports.run = (client, message, args) => {
if(args.length > 0){
 var argresult = args.join(' ');
youtube.searchVideos(argresult, 4)
    .then(results => {
                        const embed = new Discord.RichEmbed()
  .setTitle(`YouTube Search!`)
  .setAuthor(`${message.author.username}`, `${message.author.displayAvatarURL}`)
  .setDescription(`Searched: ${argresult}`)
  .setColor(0x00AE86) 
  .addField(`1.${results[0].title}`, `\n${results[0].url}`)
  .addField(`2.${results[1].title}`, `\n${results[1].url}`)
  .addField(`3.${results[2].title}`, `\n${results[2].url}`)
  .addField(`4.${results[3].title}`, `\n${results[3].url}`)
  .setTimestamp()

  if (message.channel.type === 'dm') {
    message.channel.sendMessage('Check This DM For Results!')
  } else {
    message.channel.sendMessage("Searching").then(m=> {
  m.edit(`Check Your DM's For Results For: ${argresult}`);
})
  }

message.author.sendEmbed(
  embed,
  '',
  { disableEveryone: true }
  );
      })
} else {
    message.reply('Please Specify A Video!')
}
     
    };

  exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'search',
  description: 'Search Videos On YouTube!.',
  usage: 'search [search]'
};
  