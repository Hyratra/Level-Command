let xp = 0
let level = 1
let levelUp = 44
let levelXp = 120
let temps = new Set();
let temps1 = 10;
let on = true

client.on("message", function(message){
  if(message.content.startsWith(prefix + "level")){
    const user = message.mentions.users.first()
    if(user){
      const member = message.guild.member(user)
      if(member){
        let embed = new Discord.RichEmbed()
        embed
          .setTitle("Stats de l'utilisateur :")
          .setColor("RANDOM")
          .addField(`Expérience : ${member.xp}`, "­")
          .addField(`Niveau : ${member.level}`, "­")
        message.channel.send(embed)  
      }
    }
    if(!user){
      let author = message.author
      let embed = new Discord.RichEmbed()
      embed
        .setTitle("Vos stats :")
        .setColor("RANDOM")
        .addField(`Expérience : ${author.xp}`, "­")
        .addField(`Niveau : ${author.level}`, "­")
      message.channel.send(embed) 
    }
  }
  if(on === true){
    xp.value = xp.value + 4
    on.value = false
    .setTimeout({
      on.value = true;
    }, temps1 * 1000)
  }
  if(xp === levelXp){
    let author = message.author
    let member = author.guildMember
    level.value = level.value + 1
    levelXp.value = levelXp.value + levelUp.value
    xp.value = 0
    message.channel.send("Bravo ${member.mention}, vous venez de passer au niveau ${level}!")
  }
})
