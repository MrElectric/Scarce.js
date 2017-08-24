const Discord = require('discord.js')
exports.run = function(client, msg, args) {
var google = require('google')
 var argresult = args.join(' ');
google.resultsPerPage = 1
var nextCounter = 0
 
google(argresult, function (err, res){
  if (err) console.error(err)
 
  for (var i = 0; i < res.links.length; ++i) {
       var link = res.links[i];
                  const embed = new Discord.RichEmbed()
  .setTitle('Google Search!')
  .setAuthor(`${msg.author.username}`, `${msg.author.displayAvatarURL}`)
  .setColor(0x00AE86) 
  .addField('Result:', link.title + ' - ' + link.href)
  .addField('Description:', link.description + "\n")
  .setTimestamp()

msg.channel.sendEmbed(
  embed,
  '',
  { disableEveryone: true }
  );
  }
}) 
if(args.length === 0){
  return msg.channel.sendmsg('You Did Not Define A Search! Usage: ``google [search]`')
}
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'google',
  description: 'Search Google',
  usage: 'google [search]'
};
