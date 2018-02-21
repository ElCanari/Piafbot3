
exports.run = (client, message, args) => {
const mlist = message.guild.members.map(g => g.role.username)

    message.channel.send("a faire").catch(console.error);

}
