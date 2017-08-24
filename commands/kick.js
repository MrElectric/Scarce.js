const Discord = require('discord.js');
exports.run = (client, message, args) => {
     if(!(message.member.hasPermission("KICK_MEMBERS"))) {
      return message.channel.sendCode(`${message.author.username}, You Lack The Permission KICK_MEMBERS!`);
     }
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  if (reason.length < 1) return message.reply('You must supply a reason for the kick.');
  if (message.mentions.users.size < 1) return message.reply('You must mention someone to kick them.').catch(console.error);

  if (!message.guild.member(user).kickable) return message.reply('I cannot kick that member');
  message.guild.member(user).kick();

  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .addField('Action:', 'kick')
    .addField('User:', `${user.username}#${user.discriminator} (${user.id})`)
    .addField('Modrator:', `${message.author.username}#${message.author.discriminator}`)
    .addField('Reason', reason);
    user.sendMessage(`You've Been Kicked From ${guild.name}, ${reason}`)
  return message.guild.defaultChannel.sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'kick',
  description: 'Kicks the mentioned user.',
  usage: 'kick [mention] [reason]'
};