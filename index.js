const discord = require("discord.js")
require("dotenv").config()

const client = new discord.Client({
    intents: [
        
    ]
})

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
})

client.login(process.env.TOKEN)