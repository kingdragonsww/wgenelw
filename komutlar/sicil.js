const Discord = require("discord.js")
const db = require('quick.db');
exports.run = async(client, message, args) => {    
 if(!message.member.roles.cache.some(r => ["789194951967375418", "789194951967375417"].includes(r.id))) //
    return message.reply("**Bu Komutu Kullanmak İçin Yeterli Yetkin Bulunmamakta !**")
  //------------------------------------------------KAYITLAR-----------------------------------------------\\    STG   
 let adam = message.mentions.users.first()
if(!adam) {
  let cezapuan = db.fetch(`cezaPuan.${message.author.id}`);
  let jailsorgu = db.fetch(`jailSorgu.${message.author.id}`);
  let mutesorgu = db.fetch(`muteSorgu.${message.author.id}`);
  let jailsebep = db.fetch(`jailreason.${message.author.id}`)
  let uyarı = db.fetch(`uyari.${message.author.id}`) 
  
  if(cezapuan === null) cezapuan = "0" 
  if(cezapuan === undefined) cezapuan = "0" 
  if(jailsorgu === null) jailsorgu = "0"
  if(jailsorgu === undefined) jailsorgu = "0"
  if(mutesorgu === null) mutesorgu = "0"
  if(mutesorgu === undefined) mutesorgu = "0"
  if(uyarı === null) uyarı = "0"
  if(uyarı === undefined) uyarı = "0"
  const kaytlar = new Discord.MessageEmbed()
 .setThumbnail(message.author.avatarURL())     
    .setTitle(`${message.author.username|| message.mentions.members.first}`) 
    .setDescription(`
<a:hydrayildizi2:791092801063354408> •** Jaile Girme Sayısı: \`${jailsorgu}\`**
<a:hydracrown3:816355855179841557> •** Mutelenme Sayısı: \`${mutesorgu}\`**
<a:hydra:792002325370634270> •** Uyarılma Sayısı: \`${uyarı}\`**
<a:hydratac:789369824249643009> •** Toplam Ceza Puanın: \`${cezapuan}\`**

`)
    .setColor("0x2f3136")
  return message.channel.send(kaytlar)
};
if(adam) {
 let cezapuan2 = await db.fetch(`cezaPuan.${adam.id}`) 
 let jailsorgu2 = await db.fetch(`jailSorgu.${adam.id}`)
 let mutesorgu2 = db.fetch(`muteSorgu.${adam.id}`); 
 let jailsebep2 = db.fetch(`jailreason.${adam.id}`)
 let uyarı2 = db.fetch(`uyari.${adam.id}`)
  if(cezapuan2 === null) cezapuan2 = "0" 
  if(cezapuan2 === undefined) cezapuan2 = "0" 
  if(jailsorgu2 === null) jailsorgu2 = "0"    
  if(jailsorgu2 === undefined) jailsorgu2 = "0"
  if(mutesorgu2 === null) mutesorgu2 = "0"
  if(mutesorgu2 === undefined) mutesorgu2 = "0"
  if(uyarı2 === null) uyarı2 = "0"
  if(uyarı2 === undefined) uyarı2 = "0"
  const kaytlar2 = new Discord.MessageEmbed()
   .setImage('https://media.discordapp.net/attachments/697503979680301077/814497209357041664/thor.gif?width=161&height=161')   
  .setThumbnail(adam.avatarURL())     
  .setTitle(`${adam.username}`) 
    .setDescription(`
<a:hydrayildizi2:791092801063354408> **• Jaile Girme Sayısı:  \`${jailsorgu2}\`**
<a:hydracrown3:816355855179841557> **• Mutelenme Sayısı:  \`${mutesorgu2}\`**
<a:hydra:792002325370634270> **• Uyarılma Sayısı: \`${uyarı2}\`**
<a:hydratac:789369824249643009> **• Toplam Ceza Puanları: \`${cezapuan2}\`**

`)
    .setImage('https://media.discordapp.net/attachments/697503979680301077/814497209357041664/thor.gif?width=161&height=161')     
  .setColor("RANDOM")
    
  return message.channel.send(kaytlar2)
}}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sicil', 'cv'],
  permLevel: 0,
  kategori: ``
};

exports.help = {
  name: 'sicil',
  description: '',
  usage: ''
};