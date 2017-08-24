module.exports = member => {
    let guild = member.guild
    guild.defaultChannel.sendMessage(`Please Welcome **${member.user.username}** To **${guild.name}**!`);
};