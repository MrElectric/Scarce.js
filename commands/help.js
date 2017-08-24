const settings = require('../settings.json');
exports.run = (client, message, params) => {
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.author.sendCode('asciidoc', `= Command List =\n\n[Use ${settings.prefix}help <commandname> for details]\n\n${client.commands.map(c => `${settings.prefix}${c.help.name}${' '.repeat(longest - c.help.name.length)} :: ${c.help.description}`).join('\n')}`);
    message.author.sendMessage(' Some Commands Do **NOT** Work Through DM. While Some **Do**')
    message.author.sendMessage('Join The Official Scarce.js Discord!\n https://discord.gg/P323cmV')
             message.reply(' A List Of Commands Were Sent Directly To You! :mailbox_with_mail: ')
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
   message.author.sendCode('asciidoc', `= ${command.help.name} = \n${command.help.description}\nusage::${command.help.usage}`);
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'halp'],
  permLevel: 0
};

exports.help = {
  name: 'help',
  description: 'Displays all the available commands for your permission level.',
  usage: 'help [command]'
};
