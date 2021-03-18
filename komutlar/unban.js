const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json')

module.exports.run = async (client, message, args) => {
 if(!message.member.roles.cache.get(ayarlar.BanYetkilisi) && !message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('**Bu Komutu Kullanmak İçin Yetkiniz Bulunmamakta.**')

 
let unbanid = args[0]
if(!unbanid) return message.reply("**Banını kaldırmak istediğin kişinin id sini yazmalısın.**")

  
message.guild.members.unban(unbanid)
message.channel.send(`<@${unbanid}>, Adlı Kullanıcının Banı Kaldırıldı.`).then(msg => msg.delete(5000))

const unban = new Discord.MessageEmbed()
.setColor('#ac0000')
.setThumbnail(message.author.avatarURL())  
.setDescription(`
**<a:hydratac:789369824249643009> Η Y Đ Я Λ <a:hydratac:789369824249643009> **
**<a:hydraforever:816355857246715955> • Banı Kaldıran Yetkili : <@${message.author.id}>**
**<a:hydratac:789369824249643009> • Banı Kaldırılan Kullanıcı : <@${unbanid}>**`)
.setTimestamp()
.setImage('https://media2.giphy.com/media/P4bLhbzfxDaM0/giphy.gif?cid=790b7611927a1206a32a987fa98e88a78b2a26dcabe41fd6&rid=giphy.gif')
.setFooter('Η Y Đ Я Λ')
client.channels.cache.get(ayarlar.BanKanal).send(unban)

  

};
exports.conf = {
enabled:true,
guildOnly: true,
aliases: ["unban"],
permlevel: 2
};
exports.help = {
name: "unban",
description: "Herhangi bir kullanıcının banını açarsınız.",
usage: "unban kullanıcı"
};