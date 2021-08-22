var Mineflayer = require("mineflayer")

var address = " "

var bot = Mineflayer.createBot({
    host: address,
    username: " ",
    version: '1.8.8'
})

function chasePlayerAndDestroyHim() {
    const playerFilter = (entity) => entity.type === "player" && entity.username != "schillo_" && entity.username != "zWhiteHell" && entity.username != "RektGirl" && entity.username != "farmer"
    const playerEntity = bot.nearestEntity(playerFilter)

    if (!playerEntity) return

    const pos = playerEntity.position.offset(0, playerEntity.height, 0)

    bot.lookAt(pos, true, () => {
        bot.attack(playerEntity)
    })

    bot.setControlState("forward", true)
    bot.setControlState("sprint", true)
    bot.setControlState("jump", true)
}

bot.on("physicTick", chasePlayerAndDestroyHim)

bot.on("login", () => {
    bot.chat("/register OOOOOO OOOOOO")
    bot.chat("/login OOOOOO")
    bot.chat("Tua madre")
})
bot.on("spawn", () => {
    bot.chat("/comando")
    bot.chat("/comando")
})
