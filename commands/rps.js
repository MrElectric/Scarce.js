const yt = require('ytdl-core');
exports.run = function(client, message, args){
     const arg = args.join(' ')
      var choice = Math.floor(Math.random() * 3) + 1;
      var rock = 'rock'
      var paper = 'paper'
      var scissors = 'scissors'
      if(!arg === rock || paper || scissors){
        return
      }
      if(choice === 1){//rock
        if(arg === rock){
         return message.reply('We Tied, Dang! Lets Play Again!')
        }
        if(arg === paper){
         return message.reply('You Won, Dang! Lets Play Again!')
        }
        if(arg === scissors){
          return message.reply('Ha, I won! Lets Play Again!')
        }
        if(choice === 2){//paper
        if(arg === rock){
         return message.reply('I Won, Ha! Lets Play Again!')
        }
        if(arg === paper){
         return message.reply('We Tied, Dang! Lets Play Again!')
        }
        if(arg === scissors){
          return message.reply('You Won, Dang! Lets Play Again!')
        }
      }
      if(arg === scissors){
          return message.reply('Ha, I won! Lets Play Again!')
        }
        if(choice === 3){//scissors
        if(arg === rock){
         return message.reply('You Won, Dang! Lets Play Again!')
        }
        if(arg === paper){
         return message.reply('I Won, Ha! Lets Play Again!')
        }
        if(arg === scissors){
          return message.reply('We Tied, Dang! Lets Play Again!')
        }
      }
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'rps',
  description: 'Play Some Rock Paper Scissors!',
  usage: 'rps <tool>'
};