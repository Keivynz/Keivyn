const version = require("@whiskeysockets/baileys/package.json").version


global.language = "id"
//connecting 
global.sessionName = "session"
global.pairingCode = true // true / false
global.pairingNumber = " " // masukin nomor bot
global.runWith = "pterodactyl"
global.newsletterJid = "120363185390263663@newsletter"
global.newsletterName = "© LynnZxD"
//owner
global.ownerName = "LynnZxD"
global.nomerOwner = ["6285692195658"]
//sosmed
global.syt = 'https://www.youtube.com/@lynnzxd'
global.sgc = 'https://chat.whatsapp.com/IxJaJFd2d1aKSPffWFgF6Y'
global.sig = 'https://instagram.com/lynnzxdd'
global.web = 'https://youtube.com/@lynnzxd'
//setbot
global.botName = "LynnBotz" 
global.wm = "© LynnZxD"
global.setmenu = "image" 
global.docType = "application/vnd.ms-excel"
global.public = true
global.baileysMd = true
global.antiSpam = true
global.multi = true
global.prefa = "!"
global.fake = botName
global.Console = false
global.autorespon = true
global.copyright = `LynnBotz`
global.baileysVersion = `Baileys ${version}`
global.On = "On"
global.Off ="Off"
global.autoblockcmd = false
global.fake1 ="Bot WhatsApp"
global.packName = `udh ngentod\neh SUKSES:)`
global.authorName = "wa : 6285692195658"
global.replyType = "sgc"
global.setwelcome = "type1"
global.autoblockcmd = false
global.autoReport = true
global.autoLevel = false
global.autoSticker = false
global.autoBio = false
global.gamewaktu = 60
global.limitCount = 30
global.Intervalmsg = 1000 //detik
//hiasan
global.gris = '`' // Jangan di ubah
global.fileStackApi ="AVKHbeyXsT0G9IKI01qenz" //daftar di filestack
global.fotoRandom = [
"https://telegra.ph/file/37bf86c3c7b6784977f2b.jpg",
"https://telegra.ph/file/6e28588c987db0ea4ef33.jpg"]


//Apikey Nya
global.skizo = 'memberaja'
global.Betabotz = 'LSd7Lq9S'
global.Lolhuman = '652c7664865e2b0e70929768',
global.FilestackApi = 'AJgyzwz0FQk67sTuplYoiz'


    
global.gcounti = {
'prem' : 1000,
'user' : 5
} 
 



let d = new Date();
      let locale = "id";
      let gmt = new Date(0).getTime() - new Date("1 Januari 2021").getTime();
      let week = d.toLocaleDateString(locale, { weekday: "long" });
      const calender = d.toLocaleDateString("id", {
      day: "numeric",
      month: "long",
      year: "numeric",
      });

global.calender = calender;

const fs = require("fs");
const { color } = require("./lib/color");
const chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})






