const Discord = require('discord.js');
exports.run = (client, message, args) => {
    let reason = args.slice(1).join(' ');

  if(args.length > 1){
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  if (reason.length < 1) return message.reply('You must supply a reason for the warning.');
  if (message.mentions.users.size < 1) return message.reply('You must mention someone to warn them.').catch(console.error);
  const embed = new Discord.RichEmbed()
  .setColor(0x00AE86)
  .setTimestamp()
  .addField('Action:', 'Warning')
  .addField('User:', `${user.username}#${user.discriminator}`)
  .addField('Reason:', reason)
  .addField('Moderator:', `${message.author.username}#${message.author.discriminator}`);
   message.channel.sendEmbed(
  embed,
  '',
  { disableEveryone: true }
  );
  } else {
      return message.channel.sendMessage('No User/Reason Was Defined. Usage: ``warn [@user] [reason]`')
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'warn',
  description: 'Issues a warning to the mentioned user.',
  usage: 'warn [mention]'
};
