require('dotenv').config()
const tmi = require('tmi.js');

const Discord = require('discord.js');
const client = new Discord.Client();
const PREFIX = '!';

const options = {
    options: {
        debug: true,
    }, 

    connection: {
        cluster: 'aws',
        reconnect: true,
    },
    identity: {
        username: 'TwichDS',
        password: process.env.TMI_PASSWORD
    },

    channels: [process.env.TWITCH_CHANNEL],
}
const Twitch_Client = new tmi.client(options)
    Twitch_Client.connect();

    Twitch_Client.on('connected', (address, port) => {
        Twitch_Client.action(process.env.TWITCH_CHANNEL, 'Hello TwitchDS Bot is connected')
    })


client.login(process.env.DISCORD_TOKEN)
client.once('ready', () => {
    console.log('Discord Log in')
    
    Twitch_Client.on('chat', (channel, user, message, self) => {

        var DiscordRelay= `${user['display-name']}: ${message}`;

        try {
            let channel = client.channels.fetch(process.env.DISCORD_CHANNEL).then( channel => {
                channel.send(DiscordRelay);
            }).catch(err => {
                console.log(err)
            })
        } catch (error) {
            console.log(error)
        }
    })

    Twitch_Client.on('raided', (channel, username, viewers) => {
        console.log(`${username} has Raided you with ${viewers}!`)
        let raidEmbed = new Discord.MessageEmbed()
        .setTitle('RAID!')
        .addField(`${username}:`, `has raided you with ${viewers} viewers!`)
        try {
            let channel = client.channel.fetch(process.env.DISCORD_CHANNEL).then( channel =>  {
                channel.send(raidEmbed)
            })
        } catch (error) {
            console.log(error)
        }
    })
})

client.on('message', (message => {
    let sender = message.author.username;
    let chat = message.content;
    const chatCheck = () => {
        let checkFirst = chat.split('')
        return checkFirst[0]
    }
    //console.log(message.channel.id, process.env.DISCORD_CHANNEL)

    if(message.channel.id === process.env.DISCORD_CHANNEL){
        if(chatCheck() === "!"){
            let args = message.content.substring(PREFIX.length).split(' ');
        switch(args[0]){
            case 'clearchat':
                    let channel = client.channels.fetch(process.env.DISCORD_CHANNEL).then( channel => {
                    channel.bulkDelete(100);
                    })
                    break;

            case 'clear':
                let numberToParse = args[1];
                let parsedNumber = parseInt(numberToParse, 10);
                try {
                    let channel = client.channels.fetch(process.env.DISCORD_CHANNEL).then( channel => {
                        channel.bulkDelete(parsedNumber + 1);
                    })
                } catch {
                    console.error(err)
                }
                break;
            }
        } else{
            if(sender !== 'Twitch_Chat'){
                let chatMessage = `${sender}: ${chat}`
                Twitch_Client.action('SecretSpook', chatMessage)
            }
        }            
    }

}))