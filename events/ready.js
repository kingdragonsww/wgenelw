const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = client => {
  console.log("K O M U T L A R   Y Ü K L E N İ Y O R");
  console.log("B O T   A K T İ F");
  client.user.setStatus("idle");
  client.user.setActivity("🔱King Of HYDRA🔱", { type: "WATCHING"}); //// TYPE - WATCHING , PLAYING , LISTENING gibi değiştirilebilir.
  console.log(``);

};