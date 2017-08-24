const chalk = require('chalk')
module.exports = client => {
    console.log(chalk.bgGreen('I\'m Online\nI\'m Online'));
    console.log(`Logged In As ${client.user.username}`)
};
