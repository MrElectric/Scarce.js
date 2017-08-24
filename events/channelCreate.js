module.exports = channel => {
  console.log(`A ${channel.type} by the name of ${channel.name} and was ${channel.createdAt} with the ID of ${channel.id}`)
    if (channel.type === 'text') return channel.sendMessage(`You Were Successful In Creating **${channel.name}**`)
};