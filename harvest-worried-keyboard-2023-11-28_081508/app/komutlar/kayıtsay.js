const Discord = require('discord.js');
const db = require('quick.db')

exports.run = async (client, message, args) => {
  let kayityetkili = '1169278137956302899' //Kayıt yetkilisi İD
  if(!message.member.roles.has(kayityetkili)) 
  return message.channel.send(`Bu komutu kullanabilmek için \`Kayıt\` yetkisine sahip olmalısınız.`);
  
  let kişi = message.mentions.users.first();
  if(!kişi) {
    let erkek = await db.fetch(`kayıte_${message.author.id}`) || '0'
    let kız = await db.fetch(`kayıtk_${message.author.id}`) || '0'
    let toplam = await db.fetch(`kayıttoplam_${message.author.id}`) || '0'
 
    let kayıtlılar = new Discord.RichEmbed()
      .setColor('BLACK')
      .setDescription(`**${message.author.username} Kişisinin Teyit Bilgi**\n\n`)
      .addField('<:staff:1173637018199269457>  **Erkek**', erkek, true) 
      .addField('<:staff:1173637018199269457>  **Kız**', kız, true)
      .addField('<:staff:1173637018199269457>  **Toplam**', toplam)
    message.channel.send(kayıtlılar)
  }
    if(kişi) { 
    let erkek = await db.fetch(`kayıte_${kişi.id}`) || '0'
    let kız = await db.fetch(`kayıtk_${kişi.id}`) || '0'
    let toplam = await db.fetch(`kayıttoplam_${kişi.id}`) || '0'
    let kayıtlılar = new Discord.RichEmbed()
      .setColor('BLACK') 
      .setDescription(`**${kişi.username} kişisinin teyit bilgisi**\n\n`)
      .addField('<:staff:1173637018199269457>  **Erkek**', erkek, true) 
      .addField('<:staff:1173637018199269457>  **Kız**', kız, true)
      .addField('<:staff:1173637018199269457>  **Toplam**', toplam)
    message.channel.send(kayıtlılar)
  } 
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['ks'],
  permLevel: 0
}
exports.help = {
  name: 'kayıtsay',
  description: "Teyit sayısını gösterir",
  usage: 'kayıtsay <nick>'
}