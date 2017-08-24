exports.run = function(client, message, args){
    if(message.author.id !== "204334590687445005") return message.reply("You Are ___***NOT***___ A Global Admin!");
function clean(text) {
  if (typeof(text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  else
      return text;
}
     var argresult = args.join(' ');
         try {
      var code = args.join(" ");
      var evaled = eval(code);

      if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled);

      message.channel.sendCode("xl", clean(evaled));
    } catch (err) {
      message.channel.sendMessage(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``); 
    }
};


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 04
};

exports.help = {
  name: 'eval',
  description: 'Eval Command',
  usage: 'eval '
};