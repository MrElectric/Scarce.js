module.exports = member => {
    let guild = member.guild
    guild.defaultChannel.sendMessage(`Bye Bye **${member.user.username}**...`);
};