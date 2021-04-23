require("dotenv").config();
const Discord = require('discord.js');
const client = new Discord.Client();
client.login(process.env.BotToken);

client.on("ready", readyDiscord)

function readyDiscord(){
    console.log("Ready >:)");
}

client.on("message", gotMessage);

const replies = [
    'sus',
    'amogus haha',
    'pog',
    'lmao',
    'yes'
]

function gotMessage(msg) {
    // if (msg.channel.id == "834987460723343382") {
        if(msg.content === "amogus"){
            // msg.reply hace un @ con cada mensaje que envia
            const r = Math.floor(Math.random() * replies.length);
            msg.channel.send(replies[r]);
        }  else if (msg.content == "hi"){
            msg.channel.send("wenas"); 
        }
    }
// }