var {
    WAConnection,
    MessageType,
    Presence,
    Mimetype,
    GroupSettingChange
} = require('@adiwajshing/baileys')
var qrcode = require('qrcode-terminal')
var figlet = require('figlet')
var fs = require('fs')
var colors = require('colors')
var welcome = require('./Danz/group')

var { color, bgcolor, biocolor, KirLog } = require("./lib/color");
var { getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, start, info, success, close } = require("./lib/functions")

require('./danz.js')
nocache('./danz.js', module => console.log(color(`'${module}' Di Ubah 🤨`)))

var starts = async (dani = new WAConnection()) => {
                  dani.logger.level = 'warn'
                  dani.version = [2, 2143, 3]
                  dani.browserDescription = [ 'DanzzBotz', 'Chrome', '3.0' ]
                  
                  fs.existsSync(`./session.json`) && dani.loadAuthInfo(`./session.json`)
                  dani.on('connecting', () => {
		          console.log(color('[ LOADING ]', 'purple'), color('MEMUAT SCRIPT', 'white'));
	              })
                  dani.on('open', () => {
		          console.log(color('[ 𝗦𝗨𝗖𝗖𝗘𝗦 ]', 'green'), color('BERHASIL CONNECT Subscribe 𝖸𝖳 : SuryaAzhuraa', 'red'));
	              })
                  await dani.connect({
		          timeoutMs: 30 * 1000
	              })
fs.writeFileSync(`./session.json`, JSON.stringify(dani.base64EncodedAuthInfo(), null, '\t'))
start('2',colors.bold.gray('\n✇ DaniBotz'));
        dani.on('group-participants-update', async (anu) => {
        await welcome(dani, anu)
        })
        dani.on('chat-update', async (message) => {
        require('./danz.js')(dani, message)
        })
        }
        
function nocache(module, cb = () => { }) {
console.log(color('danzz.js Dipantau Oleh Om Om', 'blue'))
fs.watchFile(require.resolve(module), async () => {
await uncache(require.resolve(module))
cb(module)
})
}
function uncache(module = '.') {
return new Promise((resolve, reject) => {
try {
delete require.cache[require.resolve(module)]
resolve()
} catch (e) {
reject(e)
}
})
}

starts()