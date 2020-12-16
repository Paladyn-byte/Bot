


const Discord = require('discord.js')
const client = new Discord.Client()
require('dotenv').config();

client.on('ready', () =>{
console.log('ON_line')
})

client.login(process.env.BOTTOKEN)

client.on('message', gotMessage);

function gotMessage(msg){
    console.log(msg.content);
    if (msg.content === 'test')
    {
        msg.reply('Yo Brachu');
    
    }
    if(msg.channel.id=='726507915879514174' && msg.content === 'test1')
    {
        msg.reply('Swędzą Ciebie Jaja ?');
    }
    if(msg.channel.id=='726507915879514174' && msg.content === 'test2')
    {
        msg.channel.send('testowanie');
    }
}
