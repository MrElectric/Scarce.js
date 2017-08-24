module.exports = (guild, user) => {
      guild.defaultChannel.sendMessage(`**${user.username}** Was Just Unbanned From **${guild.name}**!`);
};