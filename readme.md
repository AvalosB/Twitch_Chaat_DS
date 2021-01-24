###THIS IS THE TWITCH_CHAT_DS bot;

##WHAT YOU WILL NEED

    - NodeJS installed on your machine [(https://nodejs.org/en/download/)]

    - Discord Dev account [(https://discord.com/developers/)]

    - A TMI password, must be linked to your twitch account [(https://twitchapps.com/tmi/)]

##DISCORD DEV ACCOUNT:


    - Once you have a Dicrod Dev account you will want to create a new application 

    - Name it something like Twitch_Chat_DS

    - Click the Bot option on the left and turn it into a bot

    - You are going to want to put the Token in the .env file

##THE .ENV SETUP 
    
    -instructions for creating are below

    -DISCORD_TOKEN=this is where the Discord Dev Token will go
    
    -DISCORD_CHANNEL= instructions below
    
    -TMI_PASSWORD= this is where the TMI password will go
    
    -TWITCH_CHANNEL= This is the name of your twitch channel ex...'SecretSpook'


##create .env File

    -open Notepad 

    -copy and paste the the fields in above section

    -ALL caps and no spaces

    -Exapmle TWITCH_CHANNEL=SecretSpook

    -Save as, file name ".env", save as type "all files"

    -save file into downloaded folder


##Discord Text Channel ID
    
    -Open discord

    -Go to settings

    -Apperances

    -Scroll Down and Enable Developer Mode 

    -Go to your Discord server that has the bot

    -Create a new text channel called "twitch-chat"

    -Right click the text chat and copy ID

    -Paste that ID in the .env 

##ONCE THE FILES ARE DOWNLOADED ON YOUR MACHINE & .env is created 

    -Make sure files are extracted and on your C drive

    -Open up your cmd (click windows key + R), then type "cmd" and hit run

    -CD to the file where the files are "cd C:\Users\youruser\Documents\Twitch_Chat_DS"

    -in the console type "npm install". this will install all the packages that allow this bot to work

    -When complete enter the command "node index.js" this will use Node.JS to run the program

    -As long as the console is up and running the bot will be active