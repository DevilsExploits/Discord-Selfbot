const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

client.on("ready", () => {
  console.log(`SelfBot was made by @DevilsExploits#0970`); 
  console.log(`Channels cleaned by Denied720#3939 - in ɢʀᴜᴍᴘ.ᴠɪᴘ 💣 ID:554085158794297364`); 
  client.user.setPresence({
        game: {
            name: 'with depression',
            type: "STREAMING",
            url: "https://www.twitch.tv/faker"
        }
    });
});

client.on("guildCreate", guild => {
  console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
  client.user.setActivity(`Serving ${client.guilds.size} servers`);
});

client.on("guildDelete", guild => {
  console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
  client.user.setActivity(`Serving ${client.guilds.size} servers`);
});


client.on("message", async message => {
  if(message.author.bot) return;
  
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  
  if(command === "destroy") {
var server = client.guilds.get("");
for (var i = 0; i < server.channels.array().length; i++) {
    server.channels.array()[i].delete();
	}
	
}  

 if (command === "userinfo") {
        let user = message.mentions.users.first()
        if (!user) { return message.edit(":x: Unknown user!") }
        message.edit(("", { embed: new Discord.RichEmbed().setTitle("**Userinfo**").setColor("#00D4FF").setThumbnail(user.avatarURL).setDescription("Username - **" + user.username + "**\nDiscrim - **" + user.discriminator + "**\nID - **" + user.id + "**\nGame - **" + user.presence.game.name + "**\nStatus - **" + user.presence.status + "**\n").setFooter("Information sourced from Discord") }));
    }

   if(message.content === "lol" || message.content === "Lol") {
	return message.reply("Take that lol and shove it up your ass");
	return false;
   }
 if(message.content === "no u" || message.content === "No u") {
	return message.reply("Just shut the fuck up you retarded twats");
   }
   
    if(message.content === "Shut up" || message.content === "stfu" || message.content === "Shut up") {
	return message.reply("Nigga i am satans son you can't tell me to stfu");
   }
	if(message.content === "Denied" || message.content === "denied") {
	return message.reply("Denied is a bitch as nigga that eats dick for breakfast and ass before bet.. and now have a little spam.");
	for (i = 0; i < 5; i++) {
		   message.channel.send("@everyone ya'll gotten aids");
	  }
   }
   
   if(message.content === "Trav" || message.content === "trav") {
	return message.reply("Oh god not trav he fucks up Databases kms :cry:");
   }

	if(message.content === "Alma" || message.content === "alma") {
	return message.reply("Alma is like that special kid in school that is secretly gay but won't admit it");
   }
	
   if(message.content === "Devil" || message.content === "devil") {
	const m = await message.channel.send("Devil??");
    m.edit("He is an awesome fucktard we all know that yo");
	message.reply("I know you wish you were like me");
	message.author.sendMessage("Devil is sexy")
   }
   
    if(command === "dm") {
		for (i = 0; i < 35; i++) {
			message.author.sendMessage("Devil is lowkey so god damn sexy")
	  }
	}
  
  if(command === "ping") {
   const m = await message.channel.send("Ping?");
    m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
  }
  
  if(command === "say") {
    const sayMessage = args.join(" ");
    message.delete().catch(O_o=>{}); 
    message.channel.send(sayMessage);
  }
    
  if(command === "kick") {
    if(!message.member.roles.some(r=>["Admin †", "Admin"].includes(r.name)) )
      return message.reply("Sorry, you don't have permissions to use this!");
    
    let member = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!member)
      return message.reply("Please mention a valid member of this server");
    if(!member.kickable) 
      return message.reply("I cannot kick this user! Do they have a higher role? Do I have kick permissions?");
    
    let reason = args.slice(1).join(' ');
    if(!reason) reason = "No reason provided";
    
    await member.kick(reason)
      .catch(error => message.reply(`Sorry ${message.author} I couldn't kick because of : ${error}`));
    message.reply(`${member.user.tag} has been kicked by ${message.author.tag} because: ${reason}`);

  }
  
  if(command === "channel") {
	var server = message.guild;
	var name = message.author.username;
	for (i = 0; i < 35; i++) {
		server.createChannel(name+"- Satanic", "text");
	  }
  }
  
  if(command === "ban") {
     if(!message.member.roles.some(r=>["Admin †", "Admin"].includes(r.name)) )
      return message.reply("Sorry, you don't have permissions to use this!");
    
    let member = message.mentions.members.first();
    if(!member)
      return message.reply("Please mention a valid member of this server");
    if(!member.bannable) 
      return message.reply("I cannot ban this user! Do they have a higher role? Do I have ban permissions?");

    let reason = args.slice(1).join(' ');
    if(!reason) reason = "No reason provided";
    
    await member.ban(reason)
      .catch(error => message.reply(`Sorry ${message.author} I couldn't ban because of : ${error}`));
    message.reply(`${member.user.tag} has been banned by ${message.author.tag} because: ${reason}`);
  }
  if(command === "spam") {
	if(!args[0])
	{
	return message.reply("Usage : d!spam Message");
	}
	  for (i = 0; i < 5; i++) {
		   message.channel.send(args[0]);
	  }
  }
  
  if(command === "") {
    return message.reply("Nigga wtf you doing");
  }
});

client.login(config.token);