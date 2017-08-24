module.exports = (guild, user) => {
   guild.defaultChannel.sendMessage(`**${user.username} (${user.id})** Was Just Banned From **${guild.name}**!`);
};