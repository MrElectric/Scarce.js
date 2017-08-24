exports.run = function(client, msg, args){
   let messagecount = parseInt(args[0]) ? parseInt(args[0]) : 1;
  msg.channel.fetchMessages({limit: messagecount})
  .then(messages => {
    let msg_array = messages.array();
    msg_array = msg_array.filter(m => m.author.id === client.user.id);
    msg_array.length = messagecount + 1;
    msg_array.map(m => m.delete().catch(console.error));
    msg.channel.sendMessage(`Cleaned ${messagecount} messages!`)
   }); 
};


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 04
};

exports.help = {
  name: 'clean',
  description: 'Clean The Bots Messages',
  usage: 'clean'
};