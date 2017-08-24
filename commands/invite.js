const Discord = require('discord.js');
exports.run = function(client, message) {
    let embedinvite = new Discord.RichEmbed();
        embedinvite
        .setColor(0x00AE86)
        .setTitle("Discord Invite Link")
        .setDescription("Use This Link To Get Scarce.js! \n \n Invite Link >> https://discordapp.com/oauth2/authorize?permissions=2146958463&scope=bot&client_id=285900485880446977 << Invite Link")
     message.author.sendEmbed(embedinvite)
  message.reply('An invite link has been sent directly to you! :mailbox_with_mail:') 
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'invite',
  description: 'Get Scarce.js On Your Server',
  usage: 'invite'
};