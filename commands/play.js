const yt = require('ytdl-core');
const Discord = require('discord.js')
const YouTube = require('simple-youtube-api');
const youtube = new YouTube('AIzaSyAiDSEInk5gwufAtThoA3WLvcFlVJOfEVs');
exports.run = function(client, message, args){
     var argresult = args.join(' ');
 const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`Please be in a voice channel first!`);
    }
    youtube.searchVideos(argresult, 4)
      .then(results => {
    voiceChannel.join()
      .then(connnection => {
        let stream = yt(argresult, {audioonly: true}, {volume: '50'});
        const dispatcher = connnection.playStream(stream);
        message.delete()
                        const embed = new Discord.RichEmbed()
  .setTitle('**Now Playing:**')
  .setThumbnail(results[0].thumbail)
  .setAuthor(`${message.author.username}`, `${message.author.displayAvatarURL}`)
  .setColor(0x00AE86) 
  .setDescription(`**${results[0].title}**`)
  .addField('**Chosen By:**', `***${message.author.username}#${message.author.discriminator}***`)
  .setTimestamp()

message.channel.sendEmbed(
  embed,
  '',
  { disableEveryone: true }
  );
        dispatcher.on('end', () => {
          const embed2 = new Discord.RichEmbed()
  .setTitle('**Done Playing:**')
  .setAuthor(`${message.author.username}`, `${message.author.displayAvatarURL}`)
  .setColor(0x00AE86) 
  .setDescription(`**${results[0].title}**`)
  .setTimestamp()

message.channel.sendEmbed(
  embed2,
  '',
  { disableEveryone: true }
  );
          voiceChannel.leave();
        });
        });
      });
  }

  exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'play',
  description: 'Play Some Music.',
  usage: 'play [link]'
};
  