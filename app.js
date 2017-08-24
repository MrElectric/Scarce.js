const Discord = require('discord.js');
var client = new Discord.Client();
exports.client = client;
var cleverbot = require("cleverbot.io"),
bot = new cleverbot("WsX78ceaK9XM9YUR", "9wn38Z1zYwnIqot94nTjsjoYRctJ3DlB");
const settings = require('./settings.json');
const chalk = require('chalk');
const fs = require('fs');
const moment = require('moment');
require('./util/eventLoader')(client);
const Cleverbot = require('cleverbot-node');
const clbot = new Cleverbot;

bot.setNick("Scarce.js");


const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./commands/', (err, files) => {
  if (err) console.error(err);
  log(`Loading a total of ${files.length} commands.`);
  files.forEach(f => {
    let props = require(`./commands/${f}`);
    log(`Loading Command: ${props.help.name}. 👌`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});
client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./commands/${command}`)];
      let cmd = require(`./commands/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};


let responseObject = {
  "((lenny))": "**( ͡° ͜ʖ ͡°)**"
};

client.on("message", msg => {

const swearWords = ["darn", "shucks", "frak", "shite"];
if(swearWords.some(word => msg.content.includes(word)) ) {
  msg.delete()
  msg.reply("Oh noes you said a bad word!!!");
}

console.log(`In ${msg.guild.name} in ${msg.channel.name}, ${msg.author.tag} said: ${msg.content}`)
   if (msg.channel.type === 'dm') return;

    if(responseObject[msg.content]) {
    msg.channel.sendMessage(responseObject[msg.content]);
  }
  if (msg.author.bot) return;
});
client.elevation = msg => {
  if(msg.channel.type === 'dm') return;
  /* This function should resolve to an ELEVATION level which
     is then sent to the command handler for verification*/
   let permlvl = 0;
  let admin_role = msg.guild.roles.find('name', settings.adminrolename);
  if (admin_role && msg.member.roles.has(admin_role.id)) permlvl = 3;
    let mod_role = msg.guild.roles.find('name', settings.modrolename);
  if (mod_role && msg.member.roles.has(mod_role.id)) permlvl = 2;
    if (msg.author.id === settings.ownerid) permlvl = 4;
    if (msg.author.id === settings.global) permlvl = 4;
  return permlvl;
};



var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

	unirest = require('unirest')

client.on('warn', e => {
  console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
  console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

client.login(settings.token);