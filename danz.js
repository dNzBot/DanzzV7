var 
{
   WAConnection,
   MessageType,
   Presence,
   MessageOptions,
   Mimetype,
   WALocationMessage,
   WA_MESSAGE_STUB_TYPES,
   WA_DEFAULT_EPHEMERAL,
   ReconnectMode,
   ProxyAgent,
   GroupSettingChange,
   waChatKey,
   mentionedJid,
   processTime,
} = 
    require('@adiwajshing/baileys')
    var fs = require('fs')
    var moment = require('moment-timezone')
    var { exec, spawn } = require('child_process')
    var crypto = require('crypto')
    var qrcode = require('qrcode')
    var ffmpeg = require('fluent-ffmpeg')
    var fetch = require('node-fetch')
    var fs = require('fs-extra')
    var ms = require('parse-ms')
    var axios = require('axios')
    var hx = require('hxz-api')
    var request = require('request')
    var fromBuffer = require('file-type')
    var FormData = require('form-data')
    var speed = require('performance-now')
    var yts = require('yt-search')
    var PhoneNumber = require('awesome-phonenumber')
    var JSDOM = require('jsdom')
    var fetch = require('node-fetch')
    var qs = require('qs')
    var cheerio = require('cheerio')
    var { sleep, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, NumberRandom } = require('./lib/functions')
  
//DOWNLOAD
var { yta } = require('./lib/ytdl')
var { fetchJson } = require('./lib/krbtz')
var { mediafireDl } = require('./lib/mediafire.js')
var { color, bgcolor, biocolor, KirLog } = require('./lib/color')
var { jadibot, stopjadibot, listjadibot } = require('./database/jadibot')
var { getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, start, info, success, close } = require('./lib/functions')
var { addLevelingId, addLevelingLevel, addLevelingXp, getLevelingId, getLevelingLevel, getLevelingXp } = require('./lib/levell')
var { isLimit, limitAdd, getLimit, giveLimit, addBalance, kurangBalance, getBalance, isGame, gameAdd, givegame, cekGLimit } = require('./lib/limit')
var { checkPetualangUser, addInventori, addBesi, sellBesi, getBesi, addDm, sellDm, getDm, addEmas, sellEmas, getEmas, addFish, sellFish, getFish } = require('./lib/rpg')
var { mediafireDl } = require('./lib/mediafire.js')
const { on } = require('events')

//DATABASE
var _scommand = JSON.parse(fs.readFileSync('./database/scommand.json'))
var antilink = JSON.parse(fs.readFileSync('./database/antilink.json'))
var welkom = JSON.parse(fs.readFileSync('./database/welcome.json'))
var _petualang = JSON.parse(fs.readFileSync('./database/inventori.json'))
var prem = JSON.parse(fs.readFileSync('./database/premium.json'))
var pendaftar = JSON.parse(fs.readFileSync('./database/user.json'))
var balance = JSON.parse(fs.readFileSync('./database/balance.json'))
var _level = JSON.parse(fs.readFileSync('./database/leveluser.json'))
var ban = JSON.parse(fs.readFileSync('./database/banned.json'))
var autoregis = JSON.parse(fs.readFileSync('./database/UserRegist.json'))
var autosticker = JSON.parse(fs.readFileSync('./database/autosticker.json'))
var balance = JSON.parse(fs.readFileSync('./database/balance.json'))
var glimit = JSON.parse(fs.readFileSync('./database/glimit.json'))
var limit = JSON.parse(fs.readFileSync('./database/limit.json'))
var _claim = JSON.parse(fs.readFileSync('./database/claim.json'))

//DATABASE GAME
var susunkata = JSON.parse(fs.readFileSync('./lib/game/susunkata.json'))
var asahotak = JSON.parse(fs.readFileSync('./lib/game/asahotak.json'))
var caklontong = JSON.parse(fs.readFileSync('./lib/game/caklontong.json'))
var tebakkata = JSON.parse(fs.readFileSync('./lib/game/tebakkata.json'))
var siapakahaku = JSON.parse(fs.readFileSync('./lib/game/siapakahaku.json'))

//SOUND
var soundnya = fs.readFileSync('./Danz/sound.mp3')
var soundnya1 = fs.readFileSync('./Danz/sound1.mp3')
var soundnya2 = fs.readFileSync('./Danz/sound2.mp3')
var soundnya3 = fs.readFileSync('./Danz/sound3.mp3')
var soundnya4 = fs.readFileSync('./Danz/sound4.mp3')
var soundnya5 = fs.readFileSync('./Danz/sound5.mp3')

//THUMBNAIL
var danzfake = fs.readFileSync('./media/thumb.jpg')
var danzfoto = fs.readFileSync('./media/DanzzFoto.jpg')
var danztod = fs.readFileSync('./media/allmenu.jpg')
var kirtodrpg = fs.readFileSync('./media/DaniBotzrpg.jpg')
var payment = fs.readFileSync('./media/payment.jpg')

var devil = fs.readFileSync('./media/zdevil.jpg')
var slime = fs.readFileSync('./media/zslime.jpg')
var demon = fs.readFileSync('./media/zdemon.jpg')
var goblin = fs.readFileSync('./media/zgoblin.jpg')
var demonking = fs.readFileSync('./media/zdemonking.jpg')
var behemoth = fs.readFileSync('./media/zbehemoth.jpg')

var editkirtod = JSON.parse(fs.readFileSync('./setting.json'))

ownerName = editkirtod.NamaOwner
botName = editkirtod.NamaBot
owner = editkirtod.NomorOwner2
ownerNumber = [`${owner}@s.whatsapp.net`,`6285742566708@s.whatsapp.net`,`6285742566708@s.whatsapp.net`]
lolkey = editkirtod.LolKeyy
api2 = editkirtod.apiweb2
api4 = editkirtod.apiweb4
api6 = editkirtod.apiweb6
api7 = editkirtod.apiweb7

fake = 's '

KirSelfPublic = false

var getCmd = (id) => {
let position = null;
Object.keys(_scommand).forEach((i) => {
if (_scommand[i].id === id) {
position = i;
}
});
if (position !== null) {
return _scommand[position].chats;
}
};  
function parseMention(text = '') {
return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
}

var time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
if(time2 < "23:59:00"){
var ucapanWaktu = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐌𝐚𝐥𝐚𝐦'
}
if(time2 < "19:00:00"){
var ucapanWaktu = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐏𝐞𝐭𝐚𝐧𝐠'
}
if(time2 < "18:00:00"){
var ucapanWaktu = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐨𝐫𝐞'
}
if(time2 < "15:00:00"){
var ucapanWaktu = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐢𝐚𝐧𝐠'
}
if(time2 < "11:00:00"){
var ucapanWaktu = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐏𝐚𝐠𝐢'
}
if(time2 < "05:00:00"){
var ucapanWaktu = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐌𝐚𝐥𝐚𝐦'
}

module.exports = DaniBotz = async (DaniBotz, todd) => {
	   try {
	   var 
	   { 
	   ownermenu 
	   ,
	   othermenu 
	   ,
	   groupmenu 
	   ,
	   islamimenu
	   ,
	   downloadmenu 
	   ,
	   nulismenu 
	   ,
	   stickermenu 
	   ,
	   fotomenu
	   ,
	   animemenu
       ,
       rpgmenu
       ,
       convertmenu 
       ,
       gamemenu
	   } 
	   = require('./Danz/listmenu')
       if (!todd.hasNewMessage) return
       todd = todd.messages.all()[0]
	   if (!todd.message) return
	   if (todd.key && todd.key.remoteJid == 'status@broadcast') return
	   global.blocked
	   todd.message = (Object.keys(todd.message)[0] === 'ephemeralMessage') ? todd.message.ephemeralMessage.message : todd.message
	   var { text, extendedText, contact, contactsArray, groupInviteMessage, buttonsMessage, location, liveLocation, image, video, sticker, document, audio, product, quotedMsg } = MessageType
       var content = JSON.stringify(todd.message)
	   var from = todd.key.remoteJid
	   var type = Object.keys(todd.message)[0]
       var cmd = (type === 'conversation' && todd.message.conversation) ? todd.message.conversation : (type == 'imageMessage') && todd.message.imageMessage.caption ? todd.message.imageMessage.caption : (type == 'videoMessage') && todd.message.videoMessage.caption ? todd.message.videoMessage.caption : (type == 'extendedTextMessage') && todd.message.extendedTextMessage.text ? todd.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
       var prefix = /^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*@,;]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*,;]/gi) : '.'
       body = (type === 'conversation' && todd.message.conversation.startsWith(prefix)) ? todd.message.conversation : (type == 'imageMessage') && todd.message[type].caption.startsWith(prefix) ? todd.message[type].caption : (type == 'videoMessage') && todd.message[type].caption.startsWith(prefix) ? todd.message[type].caption : (type == 'extendedTextMessage') && todd.message[type].text.startsWith(prefix) ? todd.message[type].text : (type == 'listResponseMessage') && todd.message[type].singleSelectReply.selectedRowId ? todd.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && todd.message[type].selectedButtonId ? todd.message[type].selectedButtonId : (type == 'stickerMessage') && (getCmd(todd.message[type].fileSha256.toString('base64')) !== null && getCmd(todd.message[type].fileSha256.toString('base64')) !== undefined) ? getCmd(todd.message[type].fileSha256.toString('base64')) : ""
       budy = (type === 'conversation') ? todd.message.conversation : (type === 'extendedTextMessage') ? todd.message.extendedTextMessage.text : ''
       var command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase() 
       var nopref = budy.slice(0).trim().split(/ +/).shift().toLowerCase()  
       var args = body.trim().split(/ +/).slice(1)
       var arg = body.substring(body.indexOf(' ') + 1)
       var ar = args.map((v) => v.toLowerCase())
       var argz = body.trim().split(/ +/).slice(1)
       var is = budy.slice(0).trim().split(/ +/).shift().toLowerCase()
       var isCmd = body.startsWith(prefix) 
       var q = args.join(' ')
       var Verived = "0@s.whatsapp.net"
       var txt = todd.message.conversation
       var botNumber = DaniBotz.user.jid
       var isGroup = from.endsWith('@g.us')
       var sender = isGroup ? todd.participant : todd.key.remoteJid
       var senderr = todd.key.fromMe ? DaniBotz.user.jid : todd.key.remoteJid.endsWith('@g.us') ? todd.participant : todd.key.remoteJid
       var totalchat = await DaniBotz.chats.all()
       var groupMetadata = isGroup ? await DaniBotz.groupMetadata(from) : ''
       var groupName = isGroup ? groupMetadata.subject : ''
       var groupId = isGroup ? groupMetadata.jid : ''
       var groupMembers = isGroup ? groupMetadata.participants : ''
       var groupDesc = isGroup ? groupMetadata.desc : ''
       var groupOwner = isGroup ? groupMetadata.owner : ''
       var groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
       var isBotGroupAdmins = groupAdmins.includes(botNumber) || false
       var isGroupAdmins = groupAdmins.includes(sender) || false
       var conts = todd.key.fromMe ? DaniBotz.user.jid : DaniBotz.contacts[sender] || { notify: jid.replace(/@.+/, '') }
       var pushname = todd.key.fromMe ? DaniBotz.user.name : conts.notify || conts.vname || conts.name || '-'
       var isOwner = ownerNumber.includes(sender)
       var isPetualang = checkPetualangUser(sender)
       var isPremium = prem.includes(sender)
       var isClaimOn = _claim.includes(sender)
       var isBanned = ban.includes(sender)
       var isPenggunaDaniBotz = autoregis.includes(sender)
       var status = `${KirSelfPublic ? 'SELF-MODE' : 'PUBLIC-MODE'}`
       var { wa_version, mcc, mnc, os_version, device_manufacturer, device_model } = DaniBotz.user.phone
       var readmore = "͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏"

var isAntiLink = isGroup ? antilink.includes(from) : false
var isWelkom = isGroup ? welkom.includes(from) : false
var isAuto = isGroup ? autosticker.includes(from) : false

// AUTO REGIST BY DaniBotz
if (isCmd && !isPenggunaDaniBotz) 
{
autoregis.push(sender)
fs.writeFileSync('./database/UserRegist.json', JSON.stringify(autoregis))
}
       
selectedButton = (type == 'buttonsResponseMessage') ? todd.message.buttonsResponseMessage.selectedButtonId : ''
responseButton = (type == 'listResponseMessage') ? todd.message.listResponseMessage.title : ''

var sendButMessage = (id, text1, desc1, but = [], options = {}) => {
var buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1
}
DaniBotz.sendMessage(id, buttonMessage, MessageType.buttonsMessage, options)
}
var sendButton = async (from, context, fortext, but, todd) => {
buttonMessages = {
contentText: context,
footerText: fortext,
buttons: but,
headerType: 1
}
DaniBotz.sendMessage(from, buttonMessages, buttonsMessage, {
quoted: todd
})
}
var sendButImage = async (from, context, fotext, img, but) => {
gam = img
kirtoddd = await DaniBotz.prepareMessage(from, gam, MessageType.image)
buttonMessagesI = {
imageMessage: kirtoddd.message.imageMessage,
contentText: context,
footerText: fotext,
buttons: but,
headerType: 4
}
DaniBotz.sendMessage(from, buttonMessagesI, MessageType.buttonsMessage, {quoted: krtd1})}
var sendButVideo = async(id, text1, desc1, vid1, but = [], options = {}) => {
kma = vid1
mhan = await DaniBotz.prepareMessage(from, kma, video)
var buttonMessages = {
videoMessage: mhan.message.videoMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 5
}
DaniBotz.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
var sendButloc = (from, title, text, desc, button, sen, men, file) => {
return DaniBotz.sendMessage(from, {"text": '',"contentText": title + text,"footerText": desc, "buttons": button, "headerType": "LOCATION", "locationMessage": { "degreesLongitude": "", "degreesLatitude": "", "jpegThumbnail": file}}, MessageType.buttonsMessage, { quoted: todd, contextInfo: {"mentionedJid": men ? men : []}})
}

mess = {
		  wait: 'Waittt.....',
		  success: 'Nih Kak',
		  banned: 'Maaf Kamu Sudah Di Ban',
		  error: {
		  stick: 'Gagal Convert Gambar To Sticker...Coba Lagi !!!',
		  Iv: 'Linknya Error Tod !!!'
		  },
only: {
		  owner: 'Khusus Owner !!!',
		  admin: 'Kusus Admin !!!',
		  group: 'Khusus Group !!!',
		  prem: 'Khusus User Premium !!!'
		  }
		  }

var kirprem1 = `Maaf Kak ${pushname} Kamu Belum Premium Silahkan Chat Owner Untuk Menjadi Premium`
var kirprem2 = `Silahkan Pencet Di Bawah Untuk Beli Premium`
var kirprem3 = 
[
{
buttonId: `${prefix}buypremium`,
buttonText: 
{
displayText: `BUY PREMIUM`,
},
type: 1,
}
]
		  
var elit = 'Petualang Biasa'
if (isPremium)
{
elit = 'Petualang Pro'
}
if (isOwner)
{
elit = 'GM IN GAME'
}

var hideTag = async function(from, text){
let anu = await DaniBotz.groupMetadata(from)
let members = anu.participants
let ane = []
for (let i of members){
ane.push(i.jid)
}
DaniBotz.sendMessage(from, {text:text, jpegThumbnail:fs.readFileSync('./media/DanzzFoto.jpg')}, 'extendedTextMessage', {contextInfo: {"mentionedJid": ane}})
}
var hideTagKontak = async function(from, nomor, nama){
var vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + nama + '\n' + 'ORG:Kontak\n' + 'TEL;type=CELL;type=VOICE;waid=' + nomor + ':+' + nomor + '\n' + 'END:VCARD'
var anu = await DaniBotz.groupMetadata(from)
var members = anu.participants
var ane = []
for (let i of members){
ane.push(i.jid)
}
DaniBotz.sendMessage(from, { displayname: nama, vcard: vcard}, MessageType.contact, {contextInfo: {"mentionedJid": ane}})
}
var sendKontak = (from, nomor, nama) => {
var vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + nama + '\n' + `ORG:Developer ${botName}\n` + 'TEL;type=CELL;type=VOICE;waid=' + nomor + ':+' + nomor + '\n' + 'END:VCARD'
DaniBotz.sendMessage(from, { displayname: nama, vcard: vcard}, MessageType.contact, {quoted: krtd1 , contextInfo: { forwardingScore: 508, isForwarded: true }})
}
var reply = (teks) => {
    DaniBotz.sendMessage(from, teks, text, { thumbnail: danzfoto, sendEphemeral: true, quoted: krtd1, contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: `200+ Member GiveAway 1Owner 3Premium`,body:"SELECT",previewType:"PHOTO",thumbnail:danzfoto,sourceUrl:`https://chat.whatsapp.com/FNgnDiDjbEoEAzu4JBArqv`}}})
    }
     var replytext = (teks) => {
     DaniBotz.sendMessage(from, teks, text, {quoted:todd})
     }

var levelRole = getLevelingLevel(sender, _level)
var role = 'Warrior III'
if (levelRole <= 5) {
role = 'Warrior II'
} else if (levelRole <= 10) {
role = 'Warrior I'
} else if (levelRole <= 15) {
role = 'Elite III'
} else if (levelRole <= 20) {
role = 'Elite II'
} else if (levelRole <= 25) {
role = 'Elite I'
} else if (levelRole <= 30) {
role = 'Master III'
} else if (levelRole <= 35) {
role = 'Master II'
} else if (levelRole <= 40) {
role = 'Master I'
} else if (levelRole <= 45) {
role = 'GrandMaster III'
} else if (levelRole <= 50) {
role = 'GrandMaster II'
} else if (levelRole <= 55) {
role = 'GrandMaster I'
} else if (levelRole <= 60) {
role = 'Epic III'
} else if (levelRole <= 65) {
role = 'Epic II'
} else if (levelRole <= 70) {
role = 'Epic I'
} else if (levelRole <= 75) {
role = 'Legend III'
} else if (levelRole <= 80) {
role = 'Legend II'
} else if (levelRole <= 85) {
role = 'Legend I'
} else if (levelRole <= 90) {
role = 'Mythic'
} else if (levelRole <= 95) {
role = 'Mythical Glory'
} else if (levelRole >= 100) {
role = 'Immortal'
} 

var ikan = ['🐳','🦈','🐬','🐋','🐟','🐠','🦐','🦑','🦀','🐡','🐙']
var hewan = ['🐔','🦃','🦆','🐐','🐏','🐖','🐑','🐎']
var burung = ['🦋','🕷','??','🐉','🦆','🦅','🕊','🐧','🐦','🦇']        
var petnya = ['😾','🐺','🦊','🐶','🐰']
var makan = ['🌭','🌮','🌯','🍙','🍝','🍕','🍘','🍟','🍞','🍖','🍡']
var buahan = ['🍇','🍎','🍏','🍐','🍒','🍊','🍋','🍑','🍓']

var sotoy = [
    '🍊 : 🍒 : 🍐',
    '🍒 : 🔔 : 🍊',
    '🍇 : 🍇 : 🍐',
    '🍋 : 🍋 : 🍋 Win👑', 
    '🔔 : 🍋 : 🔔', 
    '🔔 : 🍒 : 🍐',
    '🔔 : 🍒 : 🍊',
    '🍊 : 🍋 : 🔔',        
    '🍐 : 🍒 : 🍋',
    '🍐 : 🍒 : 🍐',
    '🍊 : 🍒 : 🍒',
    '🍒 : 🍒 : 🍒 Win👑',
    '🔔 : 🔔 : 🍇',
    '🍌 : 🍌 : 🔔',
    '🔔 : 🔔 : 🔔 Win👑',
    '🍐 : 🔔 : 🔔',
    '🍊 : 🍋 : 🍒',
    '🔔 : 🔔 : 🍇',    //Mau Ambil? Add Wm Lah Tod
    '🔔 : 🍇 : 🍇', 
    '🔔 : 🍐 : 🔔', 
    '🍊 : 🍒 : 🍐', 
    '🍒 : 🔔 : 🍊', 
    '🍇 : 🍇 : 🍇 Win👑', 
    '🍊 : 🍋 : 🔔', 
    '🔔 : 🍒 : 🍐', 
    '🔔 : 🍒 : 🍊', 
    '🍊 : 🍋 : 🔔',	
    '🍐 : 🍒 : 🍋', 
    '🍐 : 🍐 : 🍐 Win👑', 
    '🍊 : 🍒 : 🍒', 
    '🔔 : 🔔 : 🍇', 
    '🍌 : 🍒 : 🔔', 
    '🍐 : 🔔 : 🔔', 
    '🍊 : 🍋 : 🍒', 
    '🍋 : 🍋 : 🍌', 
    '🔔 : 🔔 : 🍇', 
    '🔔 : 🍐 : 🍇', 
    '🍌 : 🍌 : 🍌 Win👑']

var jam = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
var wib = moment.tz('Asia/Jakarta').format('HH : mm : ss')
var wita = moment.tz('Asia/Makassar').format('HH : mm : ss')
var wit = moment.tz('Asia/Jayapura').format('HH : mm : ss')         
var hour_now = moment().format('HH:mm:ss')

var dates = moment().tz('Asia/Jakarta').format("YYYY-MM-DDTHH:mm:ss");
var date = new Date(dates);
var tahun = date.getFullYear();
var bulan = date.getMonth();
var tanggal = date.getDate();
var hari = date.getDay();

switch(hari) 
{
case 0: hari = "𝐌𝐢𝐧𝐠𝐠𝐮"; break;
case 1: hari = "𝐒𝐞𝐧𝐢𝐧"; break;
case 2: hari = "𝐒𝐞𝐥𝐚𝐬𝐚"; break;
case 3: hari = "𝐑𝐚𝐛𝐮"; break;
case 4: hari = "𝐊𝐚𝐦𝐢𝐬"; break;
case 5: hari = "𝐉𝐮𝐦′𝐚𝐭"; break;
case 6: hari = "𝐒𝐚𝐛𝐭𝐮"; break;
}
switch(bulan) 
{
case 0: bulan = "𝐉𝐚𝐧𝐮𝐚𝐫𝐢"; break;
case 1: bulan = "𝐅𝐞𝐛𝐫𝐮𝐚𝐫𝐢"; break;
case 2: bulan = "𝐌𝐚𝐫𝐞𝐭"; break;
case 3: bulan = "𝐀𝐩𝐫𝐢𝐥"; break;
case 4: bulan = "𝐌𝐞𝐢"; break;
case 5: bulan = "𝐉𝐮𝐧𝐢"; break;
case 6: bulan = "𝐉𝐮𝐥𝐢"; break;
case 7: bulan = "𝐀𝐠𝐮𝐬𝐭𝐮𝐬"; break;
case 8: bulan = "𝐒𝐞𝐩𝐭𝐞𝐦𝐛𝐞𝐫"; break;
case 9: bulan = "𝐎𝐤𝐭𝐨𝐛𝐞𝐫"; break;
case 10: bulan = "𝐍𝐨𝐯𝐞𝐦𝐛𝐞𝐫"; break;
case 11: bulan = "𝐃𝐞𝐬𝐞𝐦𝐛𝐞𝐫"; break;
}

var Tanggal= "" + hari + ", " + tanggal + " " + bulan + " " + tahun;

var sendWebp = async(to, url) => {
var names = Date.now() / 10000;
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, './data' + names + '.png', async function () {
console.log('selesai');
let filess = './data' + names + '.png'
let asw = './data' + names + '.webp'
exec(`ffmpeg -i ${filess} -vf "scale=512:512:force_original_aspect_ratio=increase,fps=40, crop=512:512" ${asw}`, (err) => {
fs.unlinkSync(filess)
if (err) return reply(`${err}`)
exec(`webpmux -set exif ./data/data.exif ${asw} -o ${asw}`, async (error) => {
if (error) return reply(`${error}`)
DaniBotz.sendMessage(from, fs.readFileSync(asw), sticker, {sendEphemeral:true, quoted:krtd1})
fs.unlinkSync(asw)
});
});
});
}

var uploadImages = (buffData, type) => {      
return new Promise(async (resolve, reject) => {        
var { ext } = await fromBuffer(buffData)       
var cmd = text.toLowerCase()      
var filePath = 'utils/tmp.' + ext 
var _buffData = type ? await resizeImage(buffData, false) : buffData  
fs.writeFile(filePath, _buffData, { encoding: 'base64' }, (err) => {			
if (err) return reject(err)
console.log('s ')			
var fileData = fs.readFileSync(filePath)			
var form = new FormData()			
form.append('file', fileData, 'tmp.' + ext)    
fetch('https://telegra.ph/upload', {			   
method: 'POST',     	
body: form			
})     	
.then(res => res.json())     	
.then(res => {			
if (res.error) return reject(res.error)			
resolve('https://telegra.ph' + res[0].src)     	
})     	
.then(() => fs.unlinkSync(filePath))			   
.catch(err => reject(err))			   
})			 
})		
}

var sendFileFromUrl = async(link, type, options) => {
hasil = await getBuffer(link)
DaniBotz.sendMessage(from, hasil, type, options).catch(e => {
fetch(link).then((hasil) => {
DaniBotz.sendMessage(from, hasil, type, options).catch(e => {
DaniBotz.sendMessage(from, { url : link }, type, options).catch(e => {
reply('_[ ! ] Error Gagal Dalam Mendownload Dan Mengirim Media_')
console.log(e)
})
})
})
})
}

var fakee = (teks) => {
var mena = ['1','2','3'] 
var menhe = mena[Math.floor(Math.random() * mena.length)]     
DaniBotz.sendMessage(from, teks, text,{contextInfo :{text: 'hi',
"forwardingScore": 1000000000,
isForwarded: false,
sendEphemeral: false,
"externalAdReply": {
"title": `Hai Kak ${pushname}` ,
"body": `${ucapanWaktu}`,
"mediaType": "2",
"thumbnailUrl": "https://e.top4top.io/p_2231oxc0u0.png",
"mediaUrl": "wa.me/6285742566708",
"thumbnail": fs.readFileSync(`./media/DanzzFoto.jpg`),
"sourceUrl": "",
},mentionedJid:[sender]}, quoted : krtd1})
};

var isImage = (type === 'imageMessage')
var isVideo = (type === 'videoMessage')
var isSticker = (type == 'stickerMessage')

var isUrl = (url) => {
return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
}
var listmsg = (from, title, desc, list) => { 
let po = DaniBotz.prepareMessageFromContent(from, {"listMessage": {"title": title,"description": desc,"buttonText": "SELECT","footerText": `_*© ${botName}*_`,"listType": "SINGLE_SELECT","sections": list}}, {})
return DaniBotz.relayWAMessage(po, {waitForAck: true})
}
var sendMess = (hehe, teks) => {
DaniBotz.sendMessage(hehe, teks, text)
}
var sendVn = (teks) => {DaniBotz.sendMessage(from, teks, audio, {mimetype:"audio/mp4", ptt:true, quoted:krtd1,contextInfo: {forwardingScore: 508, isForwarded: true}})}
var mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ? DaniBotz.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : DaniBotz.sendMessage(from, teks.trim(), extendedText, { quoted: todd, contextInfo: { "mentionedJid": memberr } })
}            
var getRandom = (ext) => {
return `${Math.floor(Math.random() * 10000)}${ext}`
}
function randomNomor(min, max = null) {
if (max !== null) {
min = Math.ceil(min);
max = Math.floor(max);
return Math.floor(Math.random() * (max - min + 1)) + min;
} else {
return Math.floor(Math.random() * min) + 1
}
}
var costum = (pesan, tipe, target, target2) => {
DaniBotz.sendMessage(from, pesan, tipe, { quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` } } })
}
var runtime = function(seconds) {
seconds = Number(seconds);
var d = Math.floor(seconds / (3600 * 24));
var h = Math.floor(seconds % (3600 * 24) / 3600);
var m = Math.floor(seconds % 3600 / 60);
var s = Math.floor(seconds % 60);
var dDisplay = d > 0 ? d + (d == 1 ? " 𝙷𝙰𝚁𝙸, " : " 𝙷𝙰𝚁𝙸, ") : "";
var hDisplay = h > 0 ? h + (h == 1 ? " 𝙹𝙰𝙼, " : " 𝙹𝙰𝙼, ") : "";
var mDisplay = m > 0 ? m + (m == 1 ? " 𝙼𝙴𝙽𝙸𝚃, " : " 𝙼𝙴𝙽𝙸𝚃, ") : "";
var sDisplay = s > 0 ? s + (s == 1 ? " 𝙳𝙴𝚃𝙸𝙺" : " 𝙳𝙴𝚃𝙸𝙺") : "";
return dDisplay + hDisplay + mDisplay + sDisplay;
}
function monospace(string) {
return '```' + string + '```'
}   
var createSerial = (size) => {
return crypto.randomBytes(size).toString('hex').slice(0, size)
}

if (isGroup && !todd.key.fromMe && isAntiLink) {
if (budy.includes("://chat.whatsapp.com/")) {
if (isGroupAdmins) return reply('Your is Admin!! Bot not Found kick You :D')
console.log(color('[KICK]', 'green'), color('Link Terdeteksi', 'white'))
reply(`「 *LINK TERDETEKSI* 」\n\n_Link Group Terdeteksi!!_\n_Kamu Akan Di Kick Dari Group!!_`)
setTimeout(() => {
DaniBotz.groupRemove(from, [sender])
}, 2000);
}
}

if (isGroup && isPetualang) {
var currentLevel = getLevelingLevel(sender)
var checkId = getLevelingId(sender)
try {
if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
var amountXp = Math.floor(Math.random() * 10) + 100
var requiredXp = 5000 * (Math.pow(2, currentLevel) - 1)
var getLevel = getLevelingLevel(sender)
addLevelingXp(sender, amountXp)
if (requiredXp <= getLevelingXp(sender)) {
addLevelingLevel(sender, 1) 
var lvlup = monospace(`╭───「 Level Up 」\n│\n├ • Nama : ${pushname}\n├ • Rank : ${role}\n├ • Status : ${elit}\n├ • Xp : ${getLevelingXp(sender)}\n├ • Level : ${getLevelingLevel(sender)}\n│\n╰───「 Level By ${botName} 」`)
but = [{ buttonId: `${prefix}menu`, buttonText: { displayText: 'Back To Menu' }, type: 1 }]
sendButton(from, lvlup, 'Level Up', but)
}
} catch (err) {
console.error(err)
}
}

if (budy.includes(`eror`))
{
DaniBotz.updatePresence(from, Presence.composing)
var kr = fs.readFileSync('./stiker/6.webp')
DaniBotz.sendMessage(from, kr, sticker, { contextInfo: {mentionedJid: [sender]}, quoted: { "key": { "participant": `0@s.whatsapp.net`, "remoteJid":  '6283136505591-1614953337@g.us', "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": fs.readFileSync(`./media/DanzzFoto.jpg`), "mimetype": "application/octet-stream","title": "${botName}", "fileLength": "36", "pageCount": 0, "fileName": `Kenapa Bisa Eror 🗿`}}, "messageTimestamp": "1614069378", "status": "PENDING"}})
}

function clockString(ms) 
{
var h = isNaN(ms) ? "--" : Math.floor(ms / 3600000);
var m = isNaN(ms) ? "--" : Math.floor(ms / 60000) % 60;
var s = isNaN(ms) ? "--" : Math.floor(ms / 1000) % 60;
return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(":");
}

var settingstatus = 0;
if (new Date() * 1 - settingstatus > 1000) {
var _uptime = process.uptime() * 1000;
var uptimer = clockString(_uptime);
await DaniBotz.setStatus(`${uptimer} ⏰ | Status : ${status} ⚙️ | ${autoregis.length} User 👤`).catch((_) => _);
settingstatus = new Date() * 1;
}

var menunya = ['vnd.openxmlformats-officedocument.wordprocessingml.document','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','zip','pdf']
var appl = menunya[Math.floor(Math.random() * menunya.length)]

emote = ['😁','😆','😉','😋','😎','😍','😘','🥴','🤩','🤪','🤫','😗','😚','☺','🙂','🤗','🤥','🤔','😐','😣','😮','😝','🙃','😲','😤','☹️','😦','😬','😳','😡']
var emoji = emote[Math.floor(Math.random() * (emote.length))]	
krtd1 = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) },message: {extendedTextMessage: {text: `${botName} Telah Terverifikasi\nRuntime : ${runtime(process.uptime())}\n[ EMOTE : ${emoji} ]`,contextInfo: {participant: `0@s.whatsapp.net`}}}}

thu = await DaniBotz.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)

var Yy = 0
var bio = `*────"INFO USER"────*
    *𝗡𝗮𝗺𝗲 :* ${pushname}
    *𝗕𝗶𝗼 :* ${thu.status}
    *𝗣𝗿𝗲𝗺𝗶𝘂𝗺:* ${isPremium ? 'Premium' : 'Gratisan'}
    *𝗣𝗲𝗻𝗴𝗴𝘂𝗻𝗮:* ${autoregis.length} 𝐔𝐬𝐞𝐫
*────────────────*`
var allmenu = `${readmore}
*────[ LIST MENU ]────*
${prefix}allmenu
${prefix}ownermenu
${prefix}othermenu
${prefix}grupmenu
${prefix}islamimenu
${prefix}downloadmenu
${prefix}nulismenu
${prefix}stickermenu
${prefix}cecanmenu
${prefix}fotomenu
${prefix}convertmenu
${prefix}rpgmenu
${prefix}convertmenu
${prefix}gamemenu`
var menunyall = `${bio}

${allmenu}

⌜ OWNER MENU⌝
${Yy+=1} >
${Yy+=1} ${prefix}public
${Yy+=1} ${prefix}self
${Yy+=1} ${prefix}leave
${Yy+=1} ${prefix}term
${Yy+=1} ${prefix}bc *teks*
${Yy+=1} ${prefix}bcg *teks*
${Yy+=1} ${prefix}join *linkgc*
${Yy+=1} ${prefix}addprem *@tag*
${Yy+=1} ${prefix}delprem *@tag*
${Yy+=1} ${prefix}listpremium
${Yy+=1} ${prefix}ban *@tag*
${Yy+=1} ${prefix}unban *@tag*
${Yy+=1} ${prefix}setnamabot *nama*
${Yy+=1} ${prefix}setbioo *bio*
${Yy+=1} ${prefix}setppbot *reply foto*
${Yy+=1} ${prefix}jadipremium
🂡⸻
⌜ OTHER MENU⌝
${Yy+=1} ${prefix}tes
${Yy+=1} ${prefix}runtime
${Yy+=1} ${prefix}owner
${Yy+=1} ${prefix}donasi
${Yy+=1} ${prefix}sewabot
${Yy+=1} ${prefix}gcbot
${Yy+=1} ${prefix}anime *nama anime*
${Yy+=1} ${prefix}kusonime *nama anime*
${Yy+=1} ${prefix}cekserver *hostname*
${Yy+=1} ${prefix}jadibot
${Yy+=1} ${prefix}stopjadibot
${Yy+=1} ${prefix}listjadibot
🂡⸻
⌜ GROUP MENU ⌝
${Yy+=1} ${prefix}welcome *enable/disable*
${Yy+=1} ${prefix}antilink *enable/disable*
${Yy+=1} ${prefix}autosticker *1/0*
${Yy+=1} ${prefix}tagall *teks*
${Yy+=1} ${prefix}hidetag *teks*
${Yy+=1} ${prefix}add *628××××××××*
${Yy+=1} ${prefix}kick *@tag*
${Yy+=1} ${prefix}promote *@tag*
${Yy+=1} ${prefix}demote *@tag*
${Yy+=1} ${prefix}setnamaa *nama*
${Yy+=1} ${prefix}setppgc *reply*
${Yy+=1} ${prefix}setdesc *teks*
${Yy+=1} ${prefix}kontag *@tag|nama*
${Yy+=1} ${prefix}kontak *@tag|nama*
${Yy+=1} ${prefix}linkgc
${Yy+=1} ${prefix}infogc
${Yy+=1} ${prefix}listadmin
${Yy+=1} ${prefix}listonline
${Yy+=1} ${prefix}open
${Yy+=1} ${prefix}close
${Yy+=1} ${prefix}ganteng
${Yy+=1} ${prefix}cantik
${Yy+=1} ${prefix}jelek
${Yy+=1} ${prefix}goblok
${Yy+=1} ${prefix}bego
${Yy+=1} ${prefix}pintar
${Yy+=1} ${prefix}jago
${Yy+=1} ${prefix}nolep
${Yy+=1} ${prefix}monyet
${Yy+=1} ${prefix}babi
${Yy+=1} ${prefix}beban
${Yy+=1} ${prefix}baik
${Yy+=1} ${prefix}jahat
${Yy+=1} ${prefix}anjing
${Yy+=1} ${prefix}haram
${Yy+=1} ${prefix}kontol
${Yy+=1} ${prefix}pakboy
${Yy+=1} ${prefix}pakgirl
${Yy+=1} ${prefix}wibu
${Yy+=1} ${prefix}hebat
${Yy+=1} ${prefix}sadboy
${Yy+=1} ${prefix}sadgirl
🂡⸻
⌜ ISLAMI MENU ⌝
${Yy+=1} ${prefix}asmaulhusna
${Yy+=1} ${prefix}listsurah
${Yy+=1} ${prefix}kisahnabi *nama nabi*
${Yy+=1} ${prefix}jadwalsholat *nama kota*
🂡⸻
⌜ DOWNLOAD MENU ⌝
${Yy+=1} ${prefix}tomp3*reply video*
${Yy+=1} ${prefix}play *quory*
${Yy+=1} ${prefix}ytmp3 *link*
${Yy+=1} ${prefix}ytmp4 *link*
${Yy+=1} ${prefix}tiktok *link*
${Yy+=1} ${prefix}tiktoknowm *link*
${Yy+=1} ${prefix}tiktokwm *link*
${Yy+=1} ${prefix}xnxxsearch *quory*
${Yy+=1} ${prefix}xnxxdl *link*
${Yy+=1} ${prefix}igvideo *link*
${Yy+=1} ${prefix}igfoto *link*
${Yy+=1} ${prefix}mediafire *link*
${Yy+=1} ${prefix}tiktokstalk *username*
${Yy+=1} ${prefix}githubstalk *username*
${Yy+=1} ${prefix}instagramstalk *username*
${Yy+=1} ${prefix}youtubestalk *username*
🂡⸻
⌜ NULIS MENU⌝
${Yy+=1} ${prefix}nulis *teks*
${Yy+=1} ${prefix}nuliskanan *teks*
${Yy+=1} ${prefix}nuliskiri *teks*
${Yy+=1} ${prefix}foliokanan *teks*
${Yy+=1} ${prefix}foliokiri *teks*
🂡⸻
⌜ STICKER MENU ⌝
${Yy+=1} ${prefix}sticker *reply foto*
${Yy+=1} ${prefix}smeme *reply foto*
${Yy+=1} ${prefix}toimg *reply sticker*
${Yy+=1} ${prefix}tourl *reply foto*
${Yy+=1} ${prefix}tts *teks*
${Yy+=1} ${prefix}attp *teks*
${Yy+=1} ${prefix}ttp *teks*
${Yy+=1} ${prefix}ssweb *link*
${Yy+=1} ${prefix}sswebfull *link*
${Yy+=1} ${prefix}stickeranime
${Yy+=1} ${prefix}gura
${Yy+=1} ${prefix}patrick
${Yy+=1} ${prefix}truth
${Yy+=1} ${prefix}dare
🂡⸻
⌜ CECAN MENU ⌝
${Yy+=1} ${prefix}cecan
${Yy+=1} ${prefix}cogan
${Yy+=1} ${prefix}cecan2
${Yy+=1} ${prefix}cogan2
🂡⸻
⌜ FOTO MENU ⌝
${Yy+=1} ${prefix}darkjokes
${Yy+=1} ${prefix}fox
${Yy+=1} ${prefix}dog
${Yy+=1} ${prefix}cat
${Yy+=1} ${prefix}panda
${Yy+=1} ${prefix}panda1
${Yy+=1} ${prefix}bird
${Yy+=1} ${prefix}koala
🂡⸻
⌜ ANIME MENU ⌝
${Yy+=1} ${prefix}waifu
${Yy+=1} ${prefix}loli
${Yy+=1} ${prefix}husbu
${Yy+=1} ${prefix}milf
${Yy+=1} ${prefix}cosplay
${Yy+=1} ${prefix}dazai
${Yy+=1} ${prefix}eren
${Yy+=1} ${prefix}titan
${Yy+=1} ${prefix}lebi
${Yy+=1} ${prefix}sakura
${Yy+=1} ${prefix}neji
${Yy+=1} ${prefix}inosuke
${Yy+=1} ${prefix}jiraya
${Yy+=1} ${prefix}kiba
${Yy+=1} ${prefix}sarada
${Yy+=1} ${prefix}sasuka
${Yy+=1} ${prefix}obito
${Yy+=1} ${prefix}tanjiro
${Yy+=1} ${prefix}luffy
${Yy+=1} ${prefix}zoro
${Yy+=1} ${prefix}sanji
${Yy+=1} ${prefix}gon
${Yy+=1} ${prefix}killua
${Yy+=1} ${prefix}sagiri
${Yy+=1} ${prefix}zenitsu
${Yy+=1} ${prefix}natsu
${Yy+=1} ${prefix}genos
${Yy+=1} ${prefix}saitama
${Yy+=1} ${prefix}rem
🂡⸻
⌜ CONVERT MENU ⌝
${Yy+=1} ${prefix}fast
${Yy+=1} ${prefix}slow
${Yy+=1} ${prefix}slow2
${Yy+=1} ${prefix}bass
${Yy+=1} ${prefix}gemuk
${Yy+=1} ${prefix}reverse
🂡⸻
⌜ RPG MENU ⌝
${Yy+=1} ${prefix}joinrpg
${Yy+=1} ${prefix}quest
${Yy+=1} ${prefix}mining
${Yy+=1} ${prefix}mancing
${Yy+=1} ${prefix}luckyday
${Yy+=1} ${prefix}luckytime
${Yy+=1} ${prefix}adventure
${Yy+=1} ${prefix}inventori
${Yy+=1} ${prefix}killsilme
${Yy+=1} ${prefix}killgoblin
${Yy+=1} ${prefix}killdevil
${Yy+=1} ${prefix}killbehemoth
${Yy+=1} ${prefix}killdemond
${Yy+=1} ${prefix}killdemondking
${Yy+=1} ${prefix}sellikan
${Yy+=1} ${prefix}sellbesi
${Yy+=1} ${prefix}sellemas
${Yy+=1} ${prefix}selldiamond
🂡⸻
⌜ GAME MENU ⌝
${Yy+=1} ${prefix}susunkata
${Yy+=1} ${prefix}tebakkata
${Yy+=1} ${prefix}siapakahaku
${Yy+=1} ${prefix}caklontong
${Yy+=1} ${prefix}suit
🂡⸻
⌜ FUN MENU ⌝
${Yy+=1} ${prefix}bisakah
${Yy+=1} ${prefix}kapankah
${Yy+=1} ${prefix}jadian
${Yy+=1} ${prefix}cantikcek
${Yy+=1} ${prefix}gantengcek
${Yy+=1} ${prefix}jelekcek
${Yy+=1} ${prefix}goblokcek  
${Yy+=1} ${prefix}begocek 
${Yy+=1} ${prefix}pintarcek 
${Yy+=1} ${prefix}jagocek 
${Yy+=1} ${prefix}nolepcek 
${Yy+=1} ${prefix}monyetcek     	 
${Yy+=1} ${prefix}babicek 
${Yy+=1} ${prefix}bebancek 
${Yy+=1} ${prefix}baikcek 
${Yy+=1} ${prefix}jahatcek 
${Yy+=1} ${prefix}anjingcek 
${Yy+=1} ${prefix}haramcek 
${Yy+=1} ${prefix}kontolcek 
${Yy+=1} ${prefix}pakboycek 
${Yy+=1} ${prefix}pakgirlcek 
${Yy+=1} ${prefix}wibucek 
${Yy+=1} ${prefix}hebatcek 
${Yy+=1} ${prefix}sadboycek 
${Yy+=1} ${prefix}sadgirlcek`

colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
var isMedia = (type === 'imageMessage' || type === 'videoMessage')
var isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
var isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
var isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
var isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
if (isCmd && !isGroup) {console.log(color('| PRIVATE |', 'greenyellow'), color(moment(todd.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'blue'), color(`${command} [${args.length}]`, 'cyan'), color(`${pushname}`, 'orange'), color(`${sender}`, 'deeppink'))}
if (isCmd && isGroup) {console.log(color('| GROUP |', 'greenyellow'), color(moment(todd.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'blue'), color(cmd, 'cyan'), color(`${pushname}`, 'orange'), color(`${sender}`, 'deeppink'))}

var lagu = ['sound','sound1','sound2','sound3','sound4','sound5']
var lagunya = lagu[Math.floor(Math.random() * lagu.length)]

if (!todd.key.fromMe && KirSelfPublic === true) return

DaniBotz.updatePresence(from, Presence.composing)
DaniBotz.chatRead(from, "read")
//━━━━━━━━━━━━━━━[ WELCOME TO FITUR ]━━━━━━━━━━━━━━━\\
switch(nopref) {

case 'tes': case 'test': case 'bot':
if (isBanned) return reply(mess.ban)
pp = `*BOT ONLINE✓*
RUNTIME: ${runtime(process.uptime())}`
buttons = [
{ buttonId: `${prefix}menu`, buttonText: { displayText: 'MENU' }, type: 1 },
{ buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER' }, type: 1 }]
sendButton(from, pp, `*NGETES BOT*`, buttons,)
break          
case 'assalamualaikum':
    replytext('waalaikumsalam')
    break 
    
}
switch (command) {

case 'allmenu':
if (isBanned) return reply(botz.banned)
var mena = ['1','2','3']
var menhe = mena[Math.floor(Math.random() * mena.length)]
thu = await DaniBotz.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
groups = DaniBotz.chats.array.filter(v => v.jid.endsWith('g.us'))
privat = DaniBotz.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
uptime = process.uptime();
timestampe = speed();
totalChat = await DaniBotz.chats.all()
latensie = speed() - timestampe
menu =
`${menunyall}`
DaniBotz.sendMessage(from, { contentText: `${menu}`, 
footerText: `_DanzzBotz_`, 
buttons: [
{ buttonId: `${prefix}menunya`, buttonText: { displayText: 'BACK TO MENU' }, type: 1 }
], 
headerType: 'LOCATION',
locationMessage: { degreesLatitude: '',
degreesLongitude: '',
jpegThumbnail: fs.readFileSync(`./media/allmenu.jpg`),
contextInfo: {mentionedJid: [sender]}}}, 
'buttonsMessage')
break
case 'jadibot':
if (!isPremium) return sendButMessage(from, kirprem1, kirprem2, kirprem3, { quoted: krtd1 })
if (isBanned) return reply(mess.banned)
if (todd.key.fromMe) return reply("Tidak Bisa Jadibot Di Dalam Bot")
jadibot(reply, DaniBotz, from)
break
case 'stopjadibot':
if (!isPremium) return sendButMessage(from, kirprem1, kirprem2, kirprem3, { quoted: krtd1 })
if (isBanned) return reply(mess.banned)
if (todd.key.fromMe) return reply('Tidak Bisa Di Dalam Bot')
stopjadibot(reply)
break
case 'listjadibot':
if (isBanned) return reply(botz.banned)
let tekss = '「 *LIST JADIBOT* 」\n'
for (let i of listjadibot) {
tekss += `*Nomor* : ${i.jid.split("@")[0]}\n*Nama* : ${i.name}\n*Device* : ${i.phone.device_manufacturer}\n*Model* : ${i.phone.device_model}\n\n`
}
reply(tekss)
break
//////////////////////
case 'waifu':
case 'loli':
case 'husbu':
case 'milf':
case 'cosplay':
case 'wallml':
if (isBanned) return reply(mess.banned)
var wipu = (await axios.get(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/${command}.json`)).data
var wipi = wipu[Math.floor(Math.random() * (wipu.length))]
fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(wipi))
var bb = await DaniBotz.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), MessageType.image)
var buttonnsss = [{buttonId:`${prefix + command}`,buttonText: {displayText: 'Next️'}, type: 1}]
var ButtonssMessages = {
contentText: `*${botName}*`,
buttons: buttonnsss,
footerText: `Klik Next Untuk Melanjutkan`,
headerType: 4,
imageMessage: bb.message.imageMessage
}
await DaniBotz.sendMessage(from, ButtonssMessages, MessageType.buttonsMessage, {quoted : krtd1})
fs.unlinkSync(`./${sender}.jpeg`)
break
case 'anime':
if (isBanned) return reply(mess.banned)
if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
reply(mess.wait)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/anime?apikey=${lolkey}&query=${query}`)
get_result = get_result.result
ini_txt = `Id : ${get_result.id}\n`
ini_txt += `Id MAL : ${get_result.idMal}\n`
ini_txt += `Title : ${get_result.title.romaji}\n`
ini_txt += `English : ${get_result.title.english}\n`
ini_txt += `Native : ${get_result.title.native}\n`
ini_txt += `Format : ${get_result.format}\n`
ini_txt += `Episodes : ${get_result.episodes}\n`
ini_txt += `Duration : ${get_result.duration} mins.\n`
ini_txt += `Status : ${get_result.status}\n`
ini_txt += `Season : ${get_result.season}\n`
ini_txt += `Season Year : ${get_result.seasonYear}\n`
ini_txt += `Source : ${get_result.source}\n`
ini_txt += `Start Date : ${get_result.startDate.day} - ${get_result.startDate.month} - ${get_result.startDate.year}\n`
ini_txt += `End Date : ${get_result.endDate.day} - ${get_result.endDate.month} - ${get_result.endDate.year}\n`
ini_txt += `Genre : ${get_result.genres.join(", ")}\n`
ini_txt += `Synonyms : ${get_result.synonyms.join(", ")}\n`
ini_txt += `Score : ${get_result.averageScore}%\n`
ini_txt += `Characters : \n`
ini_character = get_result.characters.nodes
for (var x of ini_character) {
ini_txt += `- ${x.name.full} (${x.name.native})\n`
 }
ini_txt += `\nDescription : ${get_result.description}`
thumbnail = await getBuffer(get_result.coverImage.large)
await DaniBotz.sendMessage(from, thumbnail, image, { quoted: krtd1, caption: ini_txt })
break
case 'kusonime':
if (isBanned) return reply(mess.banned)
if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
reply(mess.wait)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/kusonimesearch?apikey=${lolkey}&query=${query}`)
get_result = get_result.result
ini_txt = `Title : ${get_result.title}\n`
ini_txt += `Japanese : ${get_result.japanese}\n`
ini_txt += `Genre : ${get_result.genre}\n`
ini_txt += `Seasons : ${get_result.seasons}\n`
ini_txt += `Producers : ${get_result.producers}\n`
ini_txt += `Type : ${get_result.type}\n`
ini_txt += `Status : ${get_result.status}\n`
ini_txt += `Total Episode : ${get_result.total_episode}\n`
ini_txt += `Score : ${get_result.score}\n`
ini_txt += `Duration : ${get_result.duration}\n`
ini_txt += `Released On : ${get_result.released_on}\n`
ini_txt += `Desc : ${get_result.desc}\n`
link_dl = get_result.link_dl
for (var x in link_dl) {
ini_txt += `\n${x}\n`
for (var y in link_dl[x]) {
ini_txt += `${y} - ${link_dl[x][y]}\n`
}
}
ini_buffer = await getBuffer(get_result.thumbnail)
await DaniBotz.sendMessage(from, ini_buffer, image, { quoted: krtd1, caption: ini_txt })
break
case 'tomp3':
               if (isQuotedVideo || isQuotedAudio){
               reply(mess.wait)
               encmedia = JSON.parse(JSON.stringify(todd).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
               media = await DaniBotz.downloadAndSaveMediaMessage(encmedia)
               ran = getRandom('.mp3')
               exec(`ffmpeg -i ${media} ${ran}`, (err) => {
               fs.unlinkSync(media)
               if (err) return reply(`Err: ${err}`)
               buffer453 = fs.readFileSync(ran)
               DaniBotz.sendMessage(from, buffer453, audio, { mimetype: 'audio/mp4', quoted: krtd1 })
               fs.unlinkSync(ran)
})
               } else {
               reply(mess.wrongFormat)
}
               break 
//O T H E R  M E N U
case 'fox':  
if (isBanned) return reply(mess.banned)
anu = await fetchJson(`https://some-random-api.ml/img/fox`)
anu1 = await getBuffer(anu.link)
DaniBotz.sendMessage(from, anu1, image, {caption: `*${botName}*`, quoted: krtd1})
break
case 'dog':  
if (isBanned) return reply(mess.banned)
anu = await fetchJson(`https://some-random-api.ml/img/dog`)
anu1 = await getBuffer(anu.link)
DaniBotz.sendMessage(from, anu1, image, {caption: `*${botName}*`, quoted: krtd1})
break
case 'cat':
if (isBanned) return reply(mess.banned)
anu = await fetchJson(`https://some-random-api.ml/img/cat`)
anu1 = await getBuffer(anu.link)
DaniBotz.sendMessage(from, anu1, image, {caption: `*${botName}*`, quoted: krtd1})
break
case 'panda':  
if (isBanned) return reply(mess.banned)
anu = await fetchJson(`https://some-random-api.ml/img/panda`)
anu1 = await getBuffer(anu.link)
DaniBotz.sendMessage(from, anu1, image, {caption: `*${botName}*`, quoted: krtd1})
break
case 'panda1':  
if (isBanned) return reply(mess.banned)
anu = await fetchJson(`https://some-random-api.ml/img/red_panda`)
anu1 = await getBuffer(anu.link)
DaniBotz.sendMessage(from, anu1, image, {caption: `*${botName}*`, quoted: krtd1})
break
case 'bird': 
if (isBanned) return reply(mess.banned)
anu = await fetchJson(`https://some-random-api.ml/img/birb`)
anu1 = await getBuffer(anu.link)
DaniBotz.sendMessage(from, anu1, image, {caption: `*${botName}*`, quoted: krtd1})
break
case 'koala':  
if (isBanned) return reply(mess.banned)
anu = await fetchJson(`https://some-random-api.ml/img/koala`)
anu1 = await getBuffer(anu.link)
DaniBotz.sendMessage(from, anu1, image, {caption: `*${botName}*`, quoted: krtd1})
break
////////////////////////////
case 'patrick':
if (isBanned) return reply(mess.banned)
fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/patrik')
.then(res => res.text())
.then(body => {
let tod = body.split("\n");
let pjr = tod[Math.floor(Math.random() * tod.length)];
sendWebp(from, pjr)
}
)
break
case 'gura':
if (isBanned) return reply(mess.banned)
fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/gura')
.then(res => res.text())
.then(body => {
let tod = body.split("\n");
let pjr = tod[Math.floor(Math.random() * tod.length)];
sendWebp(from, pjr)
}
)
break
case 'stickeranime':
if (isBanned) return reply(mess.banned)
fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/animestick')
.then(res => res.text())
.then(body => {
let todd = body.split("\n");
let pjrr = todd[Math.floor(Math.random() * todd.length)];
sendWebp(from, pjrr)
}
)
break
case 'cekserver':
if (isBanned) return reply(mess.banned)
if (args.length == 0) return reply(`Example: ${prefix + command} deku-network.my.id`)
statuss = args.join(" ")
anu = await fetchJson(`https://api.mcsrvstat.us/bedrock/2/${statuss}`)
ini_txt =`╭─ 𝐌𝐢𝐧𝐞𝐜𝐫𝐚𝐟𝐭 𝐒𝐞𝐫𝐯𝐞𝐫\n`
ini_txt +=`│➳ IP : ${anu.ip}\n`
ini_txt +=`│➳ PORT : ${anu.port}\n`
ini_txt +=`│➳ PING : ${anu.debug.ping}\n`
ini_txt +=`│➳ QUERY : ${anu.debug.query}\n`
ini_txt +=`│➳ SRV : ${anu.debug.srv}\n`
ini_txt +=`│➳ QUERYMISMATCH : ${anu.debug.querymismatch}\n`
ini_txt +=`│➳ IPINSRV : ${anu.debug.ipinsrv}\n`
ini_txt +=`│➳ CNAMESRV : ${anu.debug.cnameinsrv}\n`
ini_txt +=`│➳ ANIMATEDMOTD : ${anu.debug.animatedmotd}\n`
ini_txt +=`│➳ CACHETIME : ${anu.debug.cachetime}\n`
ini_txt +=`│➳ APIVERSION : ${anu.debug.apiversion}\n`
ini_txt +=`│➳ HOST NAME : ${anu.hostname}\n`
ini_txt +=`│➳ ONLINE : ${anu.online}\n`
ini_txt +=`└─────────────`
reply(ini_txt)
break
case 'script':
case 'sc':
fakee(`privasi`)
break
case 'info':
if (isBanned) return reply(mess.ban)
pp = `*SEDIKIT INFO DARI ${botName}*

1.Bot Ini Menggunakan MultiPrefix

2.Fitur Yang Error ytmp4, ytmp3, play, button, dll

3.Fitur Yang Di Update
Susunkata, Tebakkata, Caklontong, Siapakahaku, Add, Kick, Autores

🗣️: Bang Kok Botnya Gak Ngerespon?
🤖: Jika Bot Tidak Merespon Kemungkinan Karena Ada Fitur Yang Error Mungkin Juga Owner Sedang Buat Fitur Baru

ingin request fitur? chat wa.me/6285742566708
Bot Di Update Pada Hari Senin, 20 juni, Tahin 2022
Segitu Saja Dari Informasi ${botName} Silahkan Ketik ${prefix}menu`
buttons = [
{ buttonId: `${prefix}menu`, buttonText: { displayText: 'MENU' }, type: 1 },
{ buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER' }, type: 1 }]
sendButton(from, pp, `RUNTIME: ${runtime(process.uptime())}`, buttons,)
break          
case 'menu':
case 'help':
if (isBanned) return reply(mess.banned)
var mena = ['1','2','3']
var menhe = mena[Math.floor(Math.random() * mena.length)]
DaniBotz.sendMessage(from, 
{"contentText": `${bio}`,
footerText: `${allmenu}`,
"buttons": [
{buttonId: `${prefix}info`, buttonText: {displayText: 'INFO'}, type: 1},
{buttonId: `${prefix}owner`, buttonText: {displayText: 'OWNER'}, type: 1}
],
            "headerType": "DOCUMENT", "documentMessage": {
            "url": "https://mmg.whatsapp.net/d/f/Ano5cGYOFQnC51uJaqGBWiCrSJH1aDCi8-YPQMMb1N1y.enc",
            "mimetype": `application/${appl}`,
            "title": "DaniBotz",
            "fileSha256": "8Xfe3NQDhjwVjR54tkkShLDGrIFKR9QT5EsthPyxDCI=",
            "fileLength": "999999",
            "pageCount": 999,
            "mediaKey": "XWv4hcnpGY51qEVSO9+e+q6LYqPR3DbtT4iqS9yKhkI=",
            "fileName": `${botName}`,
            "fileEncSha256": "NI9ykWUcXKquea4BmH7GgzhMb3pAeqqwE+MTFbH/Wk8=",
            "directPath": "/v/t62.7119-24/35160407_568282564396101_3119299043264875885_n.enc?ccb=11-4&oh=d43befa9a76b69d757877c3d430a0752&oe=61915CEC",
            "mediaKeyTimestamp": "1634472176",
            "jpegThumbnail": fs.readFileSync(`./media/thumb.jpg`)
}}, 
MessageType.buttonsMessage,
{ quoted: krtd1,thumbnail: fs.readFileSync(`./media/thumb.jpg`), 
contextInfo: {mentionedJid: [sender]}})
listMsg = {
buttonText: 'LIST MENU',
footerText: `_${botName}_`,
description: `┌────「 *INFO USER* 」───⬣
│⬡ Kontak User : @${sender.split('@')[0]} 
│⬡ Bio User : ${thu.status}
│⬡ User : ${isPremium ? 'Premium' : 'Gratisan'}
╰──────⬣
┌────「 *INFO BOT*」───⬣
│⬡ Owner : wa.me/6285742566708
│⬡ Runtime : ${runtime(process.uptime())}
│⬡ Mode : ${KirSelfPublic ? 'SELF' : 'PUBLIC'}
│⬡ Tanggal : ${Tanggal}
│⬡ Waktu Wib : ${wib}
│⬡ Waktu Wit : ${wit}
│⬡ Waktu Wita : ${wita}
╰──────────────⬣`,
sections: [
{
"title": `LIST COMMAND ${botName}`,
"rows": [
{
"title": "[🧑] OWNER BOT",
"description": "Minta Save? Owner Gak Respon",
"rowId": `${prefix}owner`
},
{
"title": "[❗] INFO BOT",
"description": "Informasi Bot",
"rowId": `${prefix}info`
},
{
"title": "[💬] GC BOT",
"description": "200+ Member GiveAway 1Owner 3Premium",
"rowId": `${prefix}gcbot`
}
]
}
,
{
"title": "WELCOME TO MENU",
"rows": [
{
"title": "[🧾] ALL MENU",
"description": "Menampilkan Seluruh Menu",
"rowId": `${prefix}allmenu`

},
{
"title": "[👑] OWNER MENU",
"description": "Menampilkan Menu Owner",
"rowId": `${prefix}ownermenu`
},
{
"title": "[🏢] GROUP MENU",
"description": "Menampilkan Menu Group",
"rowId": `${prefix}groupmenu`
},
{
"title": "[🎮] GAME MENU",
"description": "Menampilkan Menu Game",
"rowId": `${prefix}gamemenu`
},
{
"title": "[⛩️] ANIME MENU",
"description": "Menampilkan Menu Anime",
"rowId": `${prefix}animemenu`
},
{
"title": "[🏔️] RPG MENU",
"description": "Menampilkan Menu Rpg",
"rowId": `${prefix}rpgmenu`
},
{
"title": "[📍] CONVERT MENU",
"description": "Menampilkan Menu Convert",
"rowId": `${prefix}convertmenu`
},
{
"title": "[🎏] STICKER MENU",
"description": "Menampilkan Menu Sticker",
"rowId": `${prefix}stickermenu`
},
{
"title": "[📷] FOTO MENU",
"description": "Menampilkan Menu Foto",
"rowId": `${prefix}fotomenu`
},
{
"title": "[🕊️] OTHER MENU",
"description": "Menampilkan Menu Other",
"rowId": `${prefix}othermenu`

},
{
"title": "[📖] ISLAMI MENU",
"description": "Menampilkan Menu Islami",
"rowId": `${prefix}islamimenu`
},
{
"title": "[⬇️] DOWNLOAD MENU",
"description": "Menampilkan Menu Download",
"rowId": `${prefix}downloadmenu`
},
{
"title": "[📝] NULIS MENU",
"description": "Menampilkan Menu Nulis",
"rowId": `${prefix}nulismenu`
},
]
}],
listType: 1
}
DaniBotz.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [sender]},quoted:krtd1})
break
///////////////////
case 'ownermenu':
if (isBanned) return reply(mess.banned)
var mena = ['1','2','3']
var menhe = mena[Math.floor(Math.random() * mena.length)]
thu = await DaniBotz.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
groups = DaniBotz.chats.array.filter(v => v.jid.endsWith('g.us'))
privat = DaniBotz.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
uptime = process.uptime();
timestampe = speed();
totalChat = await DaniBotz.chats.all()
latensie = speed() - timestampe
menu =
`「 INFO USER 」
*Kontak User* : @${sender.split('@')[0]} 
*Bio User* : ${thu.status}
*Pengguna* :* ${autoregis.length} 𝐔𝐬𝐞𝐫

${ownermenu(prefix)}`
DaniBotz.sendMessage(from, { contentText: `${menu}`, 
footerText: `_${botName}_`, 
buttons: [
{ buttonId: `${prefix}menunya`, buttonText: { displayText: 'BACK TO MENU' }, type: 1 }
], 
headerType: 'LOCATION',
locationMessage: { degreesLatitude: '',
degreesLongitude: '',
jpegThumbnail: fs.readFileSync(`./media/thumb.jpg`),
contextInfo: {mentionedJid: [sender]}}}, 
'buttonsMessage')
break
case 'othermenu':
if (isBanned) return reply(mess.banned)
var mena = ['1','2','3']
var menhe = mena[Math.floor(Math.random() * mena.length)]
thu = await DaniBotz.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
groups = DaniBotz.chats.array.filter(v => v.jid.endsWith('g.us'))
privat = DaniBotz.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
uptime = process.uptime();
timestampe = speed();
totalChat = await DaniBotz.chats.all()
latensie = speed() - timestampe
menu =
`「 INFO USER 」
*Kontak User* : @${sender.split('@')[0]} 
*Bio User* : ${thu.status}
*Pengguna* :* ${autoregis.length} User

${othermenu(prefix)}`
DaniBotz.sendMessage(from, { contentText: `${menu}`, 
footerText: `_${botName}_`, 
buttons: [
{ buttonId: `${prefix}menunya`, buttonText: { displayText: 'BACK TO MENU' }, type: 1 }
], 
headerType: 'LOCATION',
locationMessage: { degreesLatitude: '',
degreesLongitude: '',
jpegThumbnail: fs.readFileSync(`./media/thumb.jpg`),
contextInfo: {mentionedJid: [sender]}}}, 
'buttonsMessage')
break
case 'groupmenu':
if (isBanned) return reply(mess.banned)
var mena = ['1','2','3']
var menhe = mena[Math.floor(Math.random() * mena.length)]
thu = await DaniBotz.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
groups = DaniBotz.chats.array.filter(v => v.jid.endsWith('g.us'))
privat = DaniBotz.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
uptime = process.uptime();
timestampe = speed();
totalChat = await DaniBotz.chats.all()
latensie = speed() - timestampe
menu =
`「 INFO USER 」
*Kontak User* : @${sender.split('@')[0]} 
*Bio User* : ${thu.status}
*Pengguna* :* ${autoregis.length} User

${groupmenu(prefix)}`
DaniBotz.sendMessage(from, { contentText: `${menu}`, 
footerText: `_${botName}_`, 
buttons: [
{ buttonId: `${prefix}menunya`, buttonText: { displayText: 'BACK TO MENU' }, type: 1 }
], 
headerType: 'LOCATION',
locationMessage: { degreesLatitude: '',
degreesLongitude: '',
jpegThumbnail: fs.readFileSync(`./media/thumb.jpg`),
contextInfo: {mentionedJid: [sender]}}}, 
'buttonsMessage')
break
case 'islamimenu':
if (isBanned) return reply(mess.banned)
var mena = ['1','2','3']
var menhe = mena[Math.floor(Math.random() * mena.length)]
thu = await DaniBotz.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
groups = DaniBotz.chats.array.filter(v => v.jid.endsWith('g.us'))
privat = DaniBotz.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
uptime = process.uptime();
timestampe = speed();
totalChat = await DaniBotz.chats.all()
latensie = speed() - timestampe
menu =
`「 INFO USER 」
*Kontak User* : @${sender.split('@')[0]} 
*Bio User* : ${thu.status}
*Pengguna* :* ${autoregis.length} User

${islamimenu(prefix)}`
DaniBotz.sendMessage(from, { contentText: `${menu}`, 
footerText: `_${botName}_`, 
buttons: [
{ buttonId: `${prefix}menunya`, buttonText: { displayText: 'BACK TO MENU' }, type: 1 }
], 
headerType: 'LOCATION',
locationMessage: { degreesLatitude: '',
degreesLongitude: '',
jpegThumbnail: fs.readFileSync(`./media/thumb.jpg`),
contextInfo: {mentionedJid: [sender]}}}, 
'buttonsMessage')
break
case 'downloadmenu':
if (isBanned) return reply(mess.banned)
var mena = ['1','2','3']
var menhe = mena[Math.floor(Math.random() * mena.length)]
thu = await DaniBotz.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
groups = DaniBotz.chats.array.filter(v => v.jid.endsWith('g.us'))
privat = DaniBotz.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
uptime = process.uptime();
timestampe = speed();
totalChat = await DaniBotz.chats.all()
latensie = speed() - timestampe
menu =
`「 INFO USER 」
*Kontak User* : @${sender.split('@')[0]} 
*Bio User* : ${thu.status}
*Pengguna* :* ${autoregis.length} User

${downloadmenu(prefix)}`
DaniBotz.sendMessage(from, { contentText: `${menu}`, 
footerText: `_${botName}_`, 
buttons: [
{ buttonId: `${prefix}menunya`, buttonText: { displayText: 'BACK TO MENU' }, type: 1 }
], 
headerType: 'LOCATION',
locationMessage: { degreesLatitude: '',
degreesLongitude: '',
jpegThumbnail: fs.readFileSync(`./media/thumb.jpg`),
contextInfo: {mentionedJid: [sender]}}}, 
'buttonsMessage')
break
case 'nulismenu':
if (isBanned) return reply(mess.banned)
var mena = ['1','2','3']
var menhe = mena[Math.floor(Math.random() * mena.length)]
thu = await DaniBotz.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
groups = DaniBotz.chats.array.filter(v => v.jid.endsWith('g.us'))
privat = DaniBotz.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
uptime = process.uptime();
timestampe = speed();
totalChat = await DaniBotz.chats.all()
latensie = speed() - timestampe
menu =
`「 INFO USER 」
*Kontak User* : @${sender.split('@')[0]} 
*Bio User* : ${thu.status}
*Pengguna* :* ${autoregis.length} User

${nulismenu(prefix)}`
DaniBotz.sendMessage(from, { contentText: `${menu}`, 
footerText: `_${botName}_`, 
buttons: [
{ buttonId: `${prefix}menunya`, buttonText: { displayText: 'BACK TO MENU' }, type: 1 }
], 
headerType: 'LOCATION',
locationMessage: { degreesLatitude: '',
degreesLongitude: '',
jpegThumbnail: fs.readFileSync(`./media/thumb.jpg`),
contextInfo: {mentionedJid: [sender]}}}, 
'buttonsMessage')
break
case 'nulis':
if (args.length == 0) return reply(`Teks Nya Mana\nContoh : ${prefix + command} Halo`)
bo = args.join(" ")
reply(mess.wait)
res = await getBuffer(`https://api.lolhuman.xyz/api/nulis?apikey=${lolkey}&text=${bo}`)
DaniBotz.sendMessage(from, res, image, {quoted: krtd1, caption: 'Jangan Malas Pak..' })
break
case 'stickermenu':
if (isBanned) return reply(mess.banned)
var mena = ['1','2','3']
var menhe = mena[Math.floor(Math.random() * mena.length)]
thu = await DaniBotz.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
groups = DaniBotz.chats.array.filter(v => v.jid.endsWith('g.us'))
privat = DaniBotz.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
uptime = process.uptime();
timestampe = speed();
totalChat = await DaniBotz.chats.all()
latensie = speed() - timestampe
menu =
`「 INFO USER 」
*Kontak User* : @${sender.split('@')[0]} 
*Bio User* : ${thu.status}
*Pengguna* :* ${autoregis.length} User

${stickermenu(prefix)}`
DaniBotz.sendMessage(from, { contentText: `${menu}`, 
footerText: `_${botName}_`, 
buttons: [
{ buttonId: `${prefix}menunya`, buttonText: { displayText: 'BACK TO MENU' }, type: 1 }
], 
headerType: 'LOCATION',
locationMessage: { degreesLatitude: '',
degreesLongitude: '',
jpegThumbnail: fs.readFileSync(`./media/thumb.jpg`),
contextInfo: {mentionedJid: [sender]}}}, 
'buttonsMessage')
break
case 'fotomenu':
if (isBanned) return reply(mess.banned)
var mena = ['1','2','3']
var menhe = mena[Math.floor(Math.random() * mena.length)]
thu = await DaniBotz.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
groups = DaniBotz.chats.array.filter(v => v.jid.endsWith('g.us'))
privat = DaniBotz.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
uptime = process.uptime();
timestampe = speed();
totalChat = await DaniBotz.chats.all()
latensie = speed() - timestampe
menu =
`「 INFO USER 」
*Kontak User* : @${sender.split('@')[0]} 
*Bio User* : ${thu.status}
*Pengguna* :* ${autoregis.length} User

${fotomenu(prefix)}`
DaniBotz.sendMessage(from, { contentText: `${menu}`, 
footerText: `_${botName}_`, 
buttons: [
{ buttonId: `${prefix}menunya`, buttonText: { displayText: 'BACK TO MENU' }, type: 1 }
], 
headerType: 'LOCATION',
locationMessage: { degreesLatitude: '',
degreesLongitude: '',
jpegThumbnail: fs.readFileSync(`./media/thumb.jpg`),
contextInfo: {mentionedJid: [sender]}}}, 
'buttonsMessage')
break
case 'animemenu':
if (isBanned) return reply(mess.banned)
var mena = ['1','2','3']
var menhe = mena[Math.floor(Math.random() * mena.length)]
thu = await DaniBotz.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
groups = DaniBotz.chats.array.filter(v => v.jid.endsWith('g.us'))
privat = DaniBotz.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
uptime = process.uptime();
timestampe = speed();
totalChat = await DaniBotz.chats.all()
latensie = speed() - timestampe
menu =
`「 INFO USER 」
*Kontak User* : @${sender.split('@')[0]} 
*Bio User* : ${thu.status}
*Pengguna* :* ${autoregis.length} User

${animemenu(prefix)}`
DaniBotz.sendMessage(from, { contentText: `${menu}`, 
footerText: `_${botName}_`, 
buttons: [
{ buttonId: `${prefix}menunya`, buttonText: { displayText: 'BACK TO MENU' }, type: 1 }
], 
headerType: 'LOCATION',
locationMessage: { degreesLatitude: '',
degreesLongitude: '',
jpegThumbnail: fs.readFileSync(`./media/thumb.jpg`),
contextInfo: {mentionedJid: [sender]}}}, 
'buttonsMessage')
break
case 'rpgmenu':
if (isBanned) return reply(mess.banned)
var mena = ['1','2','3']
var menhe = mena[Math.floor(Math.random() * mena.length)]
thu = await DaniBotz.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
groups = DaniBotz.chats.array.filter(v => v.jid.endsWith('g.us'))
privat = DaniBotz.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
uptime = process.uptime();
timestampe = speed();
totalChat = await DaniBotz.chats.all()
latensie = speed() - timestampe
menu =
`「 INFO USER 」
*Kontak User* : @${sender.split('@')[0]} 
*Bio User* : ${thu.status}
*Pengguna* :* ${autoregis.length} User

${rpgmenu(prefix)}`
DaniBotz.sendMessage(from, { contentText: `${menu}`, 
footerText: `_${botName}_`, 
buttons: [
{ buttonId: `${prefix}menunya`, buttonText: { displayText: 'BACK TO MENU' }, type: 1 }
], 
headerType: 'LOCATION',
locationMessage: { degreesLatitude: '',
degreesLongitude: '',
jpegThumbnail: fs.readFileSync(`./media/thumb.jpg`),
contextInfo: {mentionedJid: [sender]}}}, 
'buttonsMessage')
break
case 'convertmenu':
if (isBanned) return reply(mess.banned)
var mena = ['1','2','3']
var menhe = mena[Math.floor(Math.random() * mena.length)]
thu = await DaniBotz.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
groups = DaniBotz.chats.array.filter(v => v.jid.endsWith('g.us'))
privat = DaniBotz.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
uptime = process.uptime();
timestampe = speed();
totalChat = await DaniBotz.chats.all()
latensie = speed() - timestampe
menu =
`「 INFO USER 」
*Kontak User* : @${sender.split('@')[0]} 
*Bio User* : ${thu.status}
*Pengguna* :* ${autoregis.length} User

${convertmenu(prefix)}`
DaniBotz.sendMessage(from, { contentText: `${menu}`, 
footerText: `_${botName}_`, 
buttons: [
{ buttonId: `${prefix}menunya`, buttonText: { displayText: 'BACK TO MENU' }, type: 1 }
], 
headerType: 'LOCATION',
locationMessage: { degreesLatitude: '',
degreesLongitude: '',
jpegThumbnail: fs.readFileSync(`./media/thumb.jpg`),
contextInfo: {mentionedJid: [sender]}}}, 
'buttonsMessage')
break
case 'gamemenu':
if (isBanned) return reply(mess.banned)
var mena = ['1','2','3']
var menhe = mena[Math.floor(Math.random() * mena.length)]
thu = await DaniBotz.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
groups = DaniBotz.chats.array.filter(v => v.jid.endsWith('g.us'))
privat = DaniBotz.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
uptime = process.uptime();
timestampe = speed();
totalChat = await DaniBotz.chats.all()
latensie = speed() - timestampe
menu =
`「 INFO USER 」
*Kontak User* : @${sender.split('@')[0]} 
*Bio User* : ${thu.status}
*Pengguna* :* ${autoregis.length} User

${gamemenu(prefix)}`
DaniBotz.sendMessage(from, { contentText: `${menu}`, 
footerText: `_${botName}_`, 
buttons: [
{ buttonId: `${prefix}menunya`, buttonText: { displayText: 'BACK TO MENU' }, type: 1 }
], 
headerType: 'LOCATION',
locationMessage: { degreesLatitude: '',
degreesLongitude: '',
jpegThumbnail: fs.readFileSync(`./media/thumb.jpg`),
contextInfo: {mentionedJid: [sender]}}}, 
'buttonsMessage')
break
/////////////////////////\\//\\/\\/\\/\\/\\/\\/\\/\\//\/\\//
case 'ganteng': 
case 'cantik': 
case 'jelek': 
case 'goblok':  
case 'bego': 
case 'pintar': 
case 'jago': 
case 'nolep': 
case 'monyet':     	 
case 'babi': 
case 'beban': 
case 'baik': 
case 'jahat': 
case 'anjing': 
case 'haram': 
case 'kontol': 
case 'pakboy': 
case 'pakgirl': 
case 'wibu': 
case 'hebat': 
case 'sadboy': 
case 'sadgirl':
if (isBanned) return reply(mess.banned)
if (!isGroup) return reply(`Khusus Group`)
jds = []
var AS1 = groupMembers
var CS1 = AS1[Math.floor(Math.random() * AS1.length)]      
var vcardd = 'BEGIN:VCARD\n' 
+ 'VERSION:3.0\n' 
+ `FN:${command}\n` 
+ `ORG: Anak ${command};\n`
+ `TEL;type=CELL;type=VOICE;waid=${CS1.jid.split('@')[0]}:+${CS1.jid.split('@')[0]}\n`
+ 'END:VCARD' 
DaniBotz.sendMessage(from, {displayname: "Mikey", vcard: vcardd}, MessageType.contact, { quoted: krtd1})
reply(`Hahah Dia Yang *Ter${command}* Disini`)
break 
//////////////////////////////
case 'listsurah':
if (isBanned) return reply(mess.banned)
get_result = await fetchJson(`https://api.lolhuman.xyz/api/quran?apikey=${lolkey}`)
get_result = get_result.result
ini_txt = 'List Surah:\n'
for (var x in get_result) {
ini_txt += `${x}. ${get_result[x]}\n`
}
reply(ini_txt)
break
case 'asmaulhusna':
if (isBanned) return reply(mess.banned)
get_result = await fetchJson(`https://api.lolhuman.xyz/api/asmaulhusna?apikey=${lolkey}`)
get_result = get_result.result
ini_txt = `No : ${get_result.index}\n`
ini_txt += `Latin: ${get_result.latin}\n`
ini_txt += `Arab : ${get_result.ar}\n`
ini_txt += `Indonesia : ${get_result.id}\n`
ini_txt += `English : ${get_result.en}`
reply(ini_txt)
break
case 'kisahnabi':
if (isBanned) return reply(mess.banned)
if (args.length == 0) return reply(`Example: ${prefix + command} Muhammad`)
query = args.join(" ")
get_result = await fetchJson(`http://api.lolhuman.xyz/api/kisahnabi/${query}?apikey=${lolkey}`)
get_result = get_result.result
ini_txt = `Name : ${get_result.name}\n`
ini_txt += `Lahir : ${get_result.thn_kelahiran}\n`
ini_txt += `Umur : ${get_result.age}\n`
ini_txt += `Tempat : ${get_result.place}\n`
ini_txt += `Story : \n${get_result.story}`
reply(ini_txt)
break
case 'jadwalsholat':
case 'jadwalsolat':	
if (isBanned) return reply(mess.banned)
if (args.length == 0) return reply(`Example: ${prefix + command} Yogyakarta`)
daerah = args.join(" ")
get_result = await fetchJson(`http://api.lolhuman.xyz/api/sholat/${daerah}?apikey=${lolkey}`)
get_result = get_result.result
ini_txt = `Wilayah : ${get_result.wilayah}\n`
ini_txt += `Tanggal : ${get_result.tanggal}\n`
ini_txt += `Sahur : ${get_result.sahur}\n`
ini_txt += `Imsak : ${get_result.imsak}\n`
ini_txt += `Subuh : ${get_result.subuh}\n`
ini_txt += `Terbit : ${get_result.terbit}\n`
ini_txt += `Dhuha : ${get_result.dhuha}\n`
ini_txt += `Dzuhur : ${get_result.dzuhur}\n`
ini_txt += `Ashar : ${get_result.ashar}\n`
ini_txt += `Maghrib : ${get_result.imsak}\n`
ini_txt += `Isya : ${get_result.isya}`
reply(ini_txt)
break
case 'tiktokmaker':
if (isBanned) return reply(mess.banned)
if (args.length == 0) return reply(`Contoh: ${prefix + command} teks1 teks2`)
reply(mess.wait)
txt1 = args[0]
txt2 = args[1]
getBuffer(`${api4}/api/photooxy2/tiktok?apikey=${lolkey}&text1=${txt1}&text2=${txt2}`).then((gambar) => {
DaniBotz.sendMessage(from, gambar, image, {thumbnail: Buffer.alloc(0), caption: `Subrek : DaniBotz×`, quoted : krtd1})
})
break
case 'asupan2':
if (!isPremium) return sendButMessage(from, kirprem1, kirprem2, kirprem3, { quoted: krtd1 })
if (isBanned) return reply(mess.banned)
reply(mess.wait)
get_result = await getBuffer(`https://api.zacros.my.id/asupan/random`)
pll = `Nih Kak シ︎`
sendButVideo(from, pll, `Klik Di Bawah Untuk Melanjutkan`, get_result, [      
{
buttonId: `${prefix+command}`,
buttonText: {
displayText: `NEXT KAK︎`,
},
type: 1,
},
])            
break
case 'asupan':
case 'asupanloli':
case 'bocil':
case 'rikagusriani':
case 'santuy':
case 'ukhty':
case 'gheayubi':
case 'nantalia':
if (!isPremium) return sendButMessage(from, kirprem1, kirprem2, kirprem3, { quoted: krtd1 })
if (isBanned) return reply(mess.banned)
reply(mess.wait)
get_result = await getBuffer(`https://apidhani.herokuapp.com/api/asupan/${command}?apikey=${dhakey}`)
pll = `Nih Kak シ︎`
sendButVideo(from, pll, `Klik Di Bawah Untuk Melanjutkan`, get_result, [      
{
buttonId: `${prefix+command}`,
buttonText: {
displayText: `NEXT KAK︎`,
},
type: 1,
},
])            
break
case 'storyanime2':
if (isBanned) return reply(mess.banned)
reply(mess.wait)
anu = await fetchJson(`https://api.lolhuman.xyz/api/storynime?apikey=${lolkey}`)
buffer = await getBuffer(anu.result)
DaniBotz.sendMessage(from, buffer, video, { quoted: krtd1 })
break
case 'bokep':
if (!isPremium, !isOwner) return reply(mess.mess.only.prem)
reply(mess.wait)
get_result = await getBuffer(`https://raku-web.herokuapp.com/api/bokep?apikey=RakuKeyTod`)
pll = `Here u go my friend! dont forget to masterbate, okay?`
sendButVideo(from, pll, `*Sangean lu*`, get_result, [      
{
buttonId: `${prefix+command}`,
buttonText: {
displayText: `NEXT`,
},
type: 1,
},
])            
break
case 'chara':
if (!isPremium) return sendButMessage(from, kirprem1, kirprem2, kirprem3, { quoted: krtd1 })
if (isBanned) return reply(mess.banned)
if (!q) return reply(`gambar apa?\n${prefix}chara nino`)
var im = await hx.chara(q)
var acak = im[Math.floor(Math.random() * im.length)]
var li = await getBuffer(acak)
await DaniBotz.sendMessage(from,li,image,{quoted: krtd1})
break
//ANIME MENU
case 'kurama': 
case 'dazai': 
case 'eren': 
case 'titan': 
case 'levi': 
case 'sakura': 
case 'neji': 
case 'inosuke': 
case 'jiraya': 
case 'kiba': 
case 'sarada': 
case 'sasuke': 
case 'obito': 
case 'tanjiro': 
case 'luffy': 
case 'zoro': 
case 'sanji':       
case 'gon': 
case 'killua': 
case 'zenitsu': 
case 'natsu': 
case 'genos': 
case 'saitama':
case 'sagiri':
case 'rem':  
if (isBanned) return reply(mess.banned)
var au = await hx.chara(`${command}`)
var aca = au[Math.floor(Math.random() * au.length)]
var ao = await getBuffer(aca)
await DaniBotz.sendMessage(from,ao,image,{quoted: krtd1, caption: `Tuh Foto ${command}`})
break
case 'ppcp':
reply(mess.wait)
anu = await fetchJson(`https://api.lolhuman.xyz/api/random/ppcouple?apikey=${lolkey}`)
cewe = await getBuffer(anu.result.female)
cowo = await getBuffer(anu.result.male)
DaniBotz.sendMessage(from, cowo, image, {quoted: krtd1, caption: 'Nih Versi Cowo Nya ^_^' })
DaniBotz.sendMessage(from, cewe, image, {quoted: krtd1, caption: 'Nih Versi Cewe Nya ^_^' })
break
case 'faktaunik':
case 'katabijak':
case 'pantun':
case 'bucin':
get_result = await fetchJson(`https://api.lolhuman.xyz/api/random/${command}?apikey=${lolkey}`)
titid = get_result.result
sendButMessage(from, titid, `Klik Untuk Ke Quotes Selanjutnya`, [
{
buttonId: `${prefix + command}`,
buttonText: {
displayText: `⬡ NEXT `,
},
type: 1,
}
]
)
break
//\\\//\\//\//\\/\\//\/\\//\//\\/\\/\\/\/\\/\\/\\/\//\/\\/\
case 'nulis':
if (isBanned) return reply(mess.banned)
if(!q) return reply('Teks Yang Mau Di Tulis??')
listMsg = {
buttonText: '𝗟𝗜𝗦𝗧',
footerText: `${ucapanWaktu} Kak @${sender.split('@')[0]}
Silahkan Pilih Di Bawah`,
description: `LIST NULIS`,
sections: [
{
"title": `NULIS BUKU`,
 rows: [
{
"title": `BUKU KANAN`,
"rowId": `${prefix}nuliskanan ${q}`
}
,
{
"title": `BUKU KIRI`,
"rowId": `${prefix}nuliskiri ${q}`
}
]
}
,
{
"title": `NULIS FOLIO`,
 rows: [
{
"title": `FOLIO KANAN`,
"rowId": `${prefix}foliokanan ${q}`
}
,
{
"title": `FOLIO KIRI`,
"rowId": `${prefix}foliokiri ${q}`
}
]
}],
listType: 1
}
DaniBotz.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [sender]},quoted:krtd1})
break
case 'nuliskiri':
if (isBanned) return reply(mess.banned)
{
if (args.length < 1) return reply(`Kirim perintah *${prefix}nuliskiri* teks`)
reply(mess.wait)
var tulisan = body.slice(11)
var splitText = tulisan.replace(/(\S+\s*){1,9}/g, '$&\n')
var fixHeight = splitText.split('\n').slice(0, 31).join('\n')
spawn('convert', ['./media/NULIS/FOTO/BUKU/sebelumkiri.jpg','-font','./media/NULIS/FONT/Indie-Flower.ttf','-size','960x1280','-pointsize','22','-interline-spacing','2','-annotate','+140+153',fixHeight,'./media/NULIS/FOTO/BUKU/setelahkiri.jpg'])
.on('error', () => reply('error'))
.on('exit', () => {
DaniBotz.sendMessage(from, fs.readFileSync('./media/NULIS/FOTO/BUKU/setelahkiri.jpg'), image, {quoted: krtd1, caption: `Jangan malas kak...`})
})
}
break
case 'nuliskanan':
if (isBanned) return reply(mess.banned)
{
if (args.length < 1) return reply(`Kirim perintah *${prefix}nuliskanan* teks`)
reply(mess.wait)
var tulisan = body.slice(12)
var splitText = tulisan.replace(/(\S+\s*){1,9}/g, '$&\n')
var fixHeight = splitText.split('\n').slice(0, 31).join('\n')
spawn('convert', ['./media/NULIS/FOTO/BUKU/sebelumkanan.jpg','-font','./media/NULIS/FONT/Indie-Flower.ttf','-size','960x1280','-pointsize','23','-interline-spacing','2','-annotate','+128+129',fixHeight,'./media/NULIS/FOTO/BUKU/setelahkanan.jpg'])
.on('error', () => reply('error'))
.on('exit', () => {
DaniBotz.sendMessage(from, fs.readFileSync('./media/NULIS/FOTO/BUKU/setelahkanan.jpg'), image, {quoted: krtd1, caption: `Jangan malas kak...`})
})
}
break
case 'foliokiri':
if (isBanned) return reply(mess.banned)
{
if (args.length < 1) return reply(`Kirim perintah *${prefix}foliokiri* teks`)
reply(mess.wait)
var tulisan = body.slice(11)
var splitText = tulisan.replace(/(\S+\s*){1,13}/g, '$&\n')
var fixHeight = splitText.split('\n').slice(0, 38).join('\n')
spawn('convert', ['./media/NULIS/FOTO/FOLIO/sebelumkiri.jpg','-font','./media/NULIS/FONT/Indie-Flower.ttf','-size','1720x1280','-pointsize','23','-interline-spacing','4','-annotate','+48+185',fixHeight,'./media/NULIS/FOTO/FOLIO/setelahkiri.jpg'])
.on('error', () => reply('error'))
.on('exit', () => {
DaniBotz.sendMessage(from, fs.readFileSync('./media/NULIS/FOTO/FOLIO/setelahkiri.jpg'), image, {quoted: krtd1, caption: `Jangan malas kak...`})
})
}
break
case 'foliokanan':
if (isBanned) return reply(mess.banned)
{
if (args.length < 1) return reply(`Kirim perintah *${prefix}foliokanan* teks`)
reply(mess.wait)
var tulisan = body.slice(12)
var splitText = tulisan.replace(/(\S+\s*){1,13}/g, '$&\n')
var fixHeight = splitText.split('\n').slice(0, 38).join('\n')
spawn('convert', ['./media/NULIS/FOTO/FOLIO/sebelumkanan.jpg','-font','./media/NULIS/FONT/Indie-Flower.ttf','-size','960x1280','-pointsize','23','-interline-spacing','3','-annotate','+89+190',fixHeight,'./media/NULIS/FOTO/FOLIO/setelahkanan.jpg'])
.on('error', () => reply(mess.error.api))
.on('exit', () => {
DaniBotz.sendMessage(from, fs.readFileSync('./media/NULIS/FOTO/FOLIO/setelahkanan.jpg'), image, {quoted: krtd1, caption: `Jangan malas kak...`})
})
}
break
///\\//\//\\//\\/\\///\\//\//\//\//\//\/\/\\/\/\/\/\\/\//\\\//\/\\/\////\\//\//\\//\
case 'tiktokstalk':
if (isBanned) return reply(mess.banned)
if (args.length == 0) return reply(`Example: ${prefix + command} namatt`)
reply('[❗] Wait Kak Mohon Di Tunggu Yah')
ttk = args.join(" ")
get_result = await fetchJson(`http://api.lolhuman.xyz/api/stalktiktok/${ttk}?apikey=${lolkey}`)
get_result = get_result.result
txt = `Username : ${get_result.username}\n`
txt += `Nickname : ${get_result.nickname}\n`
txt += `Bio : ${get_result.bio}\n`
txt += `Followers : ${get_result.followers}\n`
txt += `Following : ${get_result.followings}\n`
txt += `Likes : ${get_result.likes}\n`
txt += `Vidio : ${get_result.video}\n`
buffer = await getBuffer(get_result.user_picture)
DaniBotz.sendMessage(from, buffer, image, {quoted: krtd1, caption: txt})
break
case 'githubstalk':
if (isBanned) return reply(mess.banned)
if (args.length == 0) return reply(`Example: ${prefix + command} namagh`)
reply('[❗] Wait Kak Mohon Di Tunggu Yah')
ghk = args.join(" ")
get_result = await fetchJson(`http://api.lolhuman.xyz/api/github/${ghk}?apikey=${lolkey}`)
get_result = get_result.result
txt = `Full : ${get_result.name}\n`
txt += `Followers : ${get_result.followers}\n`
txt += `Following : ${get_result.following}\n`
txt += `Publick : ${get_result.public_repos}\n`
txt += `Public Gits : ${get_result.public_gists}\n`
txt += `User : ${get_result.user}\n`
txt += `Compi : ${get_result.company}\n`
txt += `Lokasi : ${get_result.location}\n`
txt += `Email : ${get_result.email}\n`
txt += `Bio : ${get_result.bio}\n`
buffer = await getBuffer(get_result.avatar)
DaniBotz.sendMessage(from, buffer, image, {quoted: krtd1, caption: txt})
break
case 'mediafire':
               if (!isPremium) return reply(mess.mess.only.premium)
               if (args.length < 1) return reply('Link Nya Mana? ')
               if(!isUrl(args[0]) && !args[0].includes('mediafire')) return reply(mess.error.Iv)
               reply(mess.wait)
               teks = args.join(' ')
               res = await mediafireDl(teks)
               result = `[ *MEDIAFIRE DOWNLOAD* ]

*Data Berhasil Didapatkan!*
\`\`\`� Nama : ${res[0].nama}\`\`\`
\`\`\`� Ukuran : ${res[0].size}\`\`\`
\`\`\`� Link : ${res[0].link}\`\`\`

_*Tunggu Proses Upload Media......*_`
             reply(result)
             sendFileFromUrl(res[0].link, document, {mimetype: res[0].mime, filename: res[0].nama, quoted: krtd1})
             break
case 'instagramstalk':
case 'igstalk':
if (isBanned) return reply(mess.banned)
if (args.length == 0) return reply(`Example: ${prefix + command} namaig`)
reply('[❗] Wait Kak Mohon Di Tunggu Yah')
igk = args.join(" ")
get_result = await fetchJson(`http://api.lolhuman.xyz/api/stalkig/${igk}?apikey=${lolkey}`)
get_result = get_result.result
txt = `[ *INSTAGRAM STALK* ]\n\n*Link* : https://www.instagram.com/${get_result.username}\n`
txt += `*Full* : ${get_result.fullname}\n`
txt += `*Post* : ${get_result.posts}\n`
txt += `*Followers* : ${get_result.followers}\n`
txt += `*Following* : ${get_result.following}\n`
txt += `*Bio* : ${get_result.bio}\n`
buffer = await getBuffer(get_result.photo_profile)
DaniBotz.sendMessage(from, buffer, image, {quoted: krtd1, caption: txt})
break
case 'youtubestalk':
case 'ytstalk':
if (isBanned) return reply(mess.banned)
if (args.length == 0) return reply(`Example: ${prefix + command} namachannel`)
reply('[❗] Wait Kak Mohon Di Tunggu Yah')
ytk = args.join(" ")
anu = await fetchJson(`http://api.lolhuman.xyz/api/ytchannel?apikey=${lolkey}&query=${ytk}`)
cari = '↻↻↻\n'
for (let search of anu.result) {
cari += `Chanel : ${search.channel_name}\nTentang : ${search.channel_about}\nCreated : ${search.channel_created}\nLink : https://youtu.com/channel/${search.channel_id}\n•••••••••••••••••\n`
}
reply(cari.trim())
break
case 'igfoto':
          if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
          if (args.length < 1) return reply(`Url Nya Mana ?\nContoh : ${prefix + command} https://www.instagram.com/p/CXi1V1Hhiau`)
          ig = await fetchJson(`https://zeroyt7-api.xyz/igfoto?link=${q}&apikey=${apikey5}`)
          result = ig.result
          gambar = await getBuffer(result.link)
          zero.sendMessage(from, gambar, image, {caption: '${botName}', quoted: ftrol})
          limitAdd(sender, limit)
          break
          case 'igvideo':
          if (isLimit(sender, isPremium, isOwner, limit)) return reply(mess.mess.only.prem)
          if (args.length < 1) return reply(`Url Nya Mana ?\nContoh : ${prefix + command} https://www.instagram.com/reel/CXlChjJA2sv`)
          ig = await fetchJson(`https://api.lolhuman.xyz/api/instagram?apikey=${lolkey}&url=${q}`)
          result = ig.result
          videonya = await getBuffer(result.link)
          DaniBotz.sendMessage(from, videonya, video, {mimetype: 'video/mp4', caption: '${botName}', quoted: krtd1})
          limitAdd(sender, limit)
          break
case 'xnxxsearch':
if (!isPremium) return sendButMessage(from, kirprem1, kirprem2, kirprem3, { quoted: krtd1 })
if (isBanned) return reply(mess.banned)
if (args.length == 0) return reply(`Example: ${prefix + command} Japanese`)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/xnxxsearch?apikey=${lolkey}&query=${query}`)
get_result = get_result.result
ini_txt = ""
for (var x of get_result) {
ini_txt += `Title : ${x.title}\n`
ini_txt += `Views : ${x.views}\n`
ini_txt += `Duration : ${x.duration}\n`
ini_txt += `Uploader : ${x.uploader}\n`
ini_txt += `Link : ${x.link}\n`
ini_txt += `Thumbnail : ${x.thumbnail}\n\n`
}
reply(ini_txt)
break
case 'xnxxdl':
if (!isPremium) return sendButMessage(from, kirprem1, kirprem2, kirprem3, { quoted: krtd1 })
if (isBanned) return reply(mess.banned)
if (!q) return reply('Linknya?')
x = await fetchJson(`https://bx-hunter.herokuapp.com/api/xvideodetail?url=${q}&apikey=FuckBitch`)
reply(mess.wait)
vid = await getBuffer(x.result.files.high)
DaniBotz.sendMessage(from, vid, video, {quoted: krtd1})
break
case 'play':
if (isLimit(sender, isPremium, isOwner, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply(`Kirim perintah *${prefix}play query*`)
reply(mess.wait)
var yut = await yts(q)
yta(yut.videos[0].url)         
.then(async(res) => {
var { thumb, title, filesizeF, filesize } = res
var capti = `🜲 𝗬𝗢𝗨𝗧𝗨𝗕𝗘 𝗣𝗟𝗔𝗬 🜲

𖥸 Judul : ${yut.all[0].title}
𖥸 ID Video : ${yut.all[0].videoId}
𖥸️ Diupload Pada : ${yut.all[0].ago}
𖥸️️ Views : ${yut.all[0].views}
𖥸️ Durasi : ${yut.all[0].timestamp}
𖥸 Channel : ${yut.all[0].author.name}
𖥸 Link Channel : ${yut.all[0].author.url}
𖥸 Link Video : ${yut.videos[0].url}`
ya = await getBuffer(thumb)
py =await DaniBotz.prepareMessage(from, ya, image)
sendButloc(from,monospace(capti),'',`_DanzzBotz_`,
[
{buttonId: `${prefix}ytmp3 ${yut.all[0].url}`, buttonText: {displayText: 'AUDIO'}, type: 1}
,
{buttonId: `${prefix}ytmp4 ${yut.all[0].url}`, buttonText: {displayText: 'VIDEO'}, type: 1}
],null,null,ya)
})
break
case 'ytmp4':
if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply('Link?')     
reply(mess.wait)
KirTid = await fetchJson(`https://apidhani.herokuapp.com/api/download/ytmp4?url=${q}&apikey=${dhakey}`)
kirmp4 = await getBuffer(KirTid.result.url)
await DaniBotz.sendMessage(from, kirmp4, video, { mimetype: 'video/mp4', quoted: krtd1 })
break
case 'ytmp3':
if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply('Link?')         
reply(mess.wait)      
KirTid = await fetchJson(`https://api.lolhuman.xyz/api/ytaudio2?apikey=${lolkey}&url=${q}`)
kirmp3 = await getBuffer(KirTid.result.link)
await DaniBotz.sendMessage(from, kirmp3, audio, { mimetype: 'audio/mp4', quoted: krtd1})
break
case 'tiktok':
if (isBanned) return reply(mess.banned)
if (!q) return reply('Linknya?')
if (!q.includes('tiktok')) return reply(`Link Error Bang`)
data = await fetchJson(`${api4}/api/tiktok?apikey=${lolkey}&url=${q}`)
result = `⌦ *Nickname*: ${data.result.author.nickname}
⌦ *Like*: ${data.result.statistic.diggCount}
⌦ *Komentar*: ${data.result.statistic.commentCount}
⌦ *Share*: ${data.result.statistic.shareCount}
️⌦ *Views*: ${data.result.statistic.playCount}
⌦ *Desc*: ${data.result.title}`
buttons = 
[
{buttonId:`${prefix}tiktoknowm ${q}`,buttonText:{displayText: `NO WM` },type:1}
,
{buttonId:`${prefix}tiktokwm ${q}`,buttonText:{displayText: `WM` },type:1}
]
fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(data.result.thumbnail))
imageMsg = ( await DaniBotz.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
buttonsMessage = {footerText:'Pilih satu format di bawah ini', imageMessage: imageMsg,
contentText:`${result}`,buttons,headerType:4}
prep = await DaniBotz.prepareMessageFromContent(from,{buttonsMessage},{quoted: krtd1})
DaniBotz.relayWAMessage(prep)
fs.unlinkSync(`./${sender}.jpeg`)
break
case 'tiktoknowm':
if (isBanned) return reply(mess.banned)
if (!q) return reply('Linknya?')
reply(mess.wait)
if (!q.includes('tiktok')) return reply(`Link Error Bang`)
data = await fetchJson(`${api4}/api/tiktok?apikey=${lolkey}&url=${q}`)
ini_video = await getBuffer(data.result.link)
DaniBotz.sendMessage(from, ini_video, video, { quoted: krtd1 })
break
case 'tiktokwm':
if (isBanned) return reply(mess.banned)
if (!isUrl(args[0]) && !args[0].includes('tiktok')) return reply(`Error Bang`)
if (!q) return reply('Link?')
reply(mess.wait)
hx.ttdownloader(`${args[0]}`)
.then(result => {
var { wm, nowm, audio } = result
axios.get(`https://tinyurl.com/api-create.php?url=${wm}`)
.then(async (a) => {
me = `Nih Bree✔︎`
DaniBotz.sendMessage(from,{url:`${wm}`},video,{mimetype:'video/mp4',quoted:krtd1,caption:me})
})
})
break
//S E W A  B O T
case 'sewabot':
if (isBanned) return reply(mess.ban)
pp = `*SEWA BOT*
*RULES SEWA BOT*_
*!SEWA BOT INI GRATIS PATUHI RULESNYA YA KAK*
*Dilarang buat stiker 18+*
*Dilarang convert video 18+*
*Dilarang menggunakan menu 18+*
*Dilarang ytsearch 18+*
*Dilarang Gimage 18+*
*INTINYA DILARANG PAKAI KONTEN YANG BERBAU 18+*
*Dilarang spam bot*
*Dilarang telp bot = ban+block*
*Dilarang chat gk penting = block*
*Dilarang plagiat*`
buttons = [
{ buttonId: `${prefix}menunya`, buttonText: { displayText: 'MENU' }, type: 1 },
{ buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER' }, type: 1 }]
sendButton(from, pp, `*SEWA BOT*`, buttons,)
break   
case 'jadipremium':
reply(`Syarat Jadi Premium 
Subscribe: https://youtube.com/channel/UCXjNhkMF_Mt5utxW_Fit6rw\nLike: https://youtu.be/AfqivwnMhmo
Like: https://youtu.be/y8MMRyVLeUM
Like: https://youtu.be/LENesB17pME
Jika sudah like & subscribe kirim ss chat pribadi

*FITUR PREMIUM*
hentai
milf
joingc
gm in game
masih sedikit request fitur chat wa.me/6285742566708`)
break
//LIMIT
case 'claim':   
case 'klaim':
if (isClaimOn) return reply('Kamu sudah ngeclaim hari ini')
addLevelingXp(sender, 100, _level)
var htgm6 = randomNomor(1000)
addBalance(sender, htgm6, balance)
_claim.push(sender)
fs.writeFileSync('./database/claim.json', JSON.stringify(_claim))
await reply(`*──「 CLAIM  」──*

Selamat kamu mendapatkan *100Xp* dan *$${htgm6}* balance Dari claim harian`)
break
case 'limit': 
case 'ceklimit': 
thu = await DaniBotz.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
me = DaniBotz.user
teks = `Limit : ${isPremium ? 'Unlimited' : `${getLimit(sender, limitCount, limit)}/${limitCount}\nLimit Game : ${cekGLimit(sender, gcount, glimit)}/${gcount}\nBalance : ${getBalance(sender, balance)}`}`
DaniBotz.sendMessage(from, teks, text, {quoted: krtd1})  
break;
case 'buylimit':
if (!q)return reply(`Example : ${prefix + command} 10 1 limit = 100 balance`)
if (isNaN(q)) return reply(`Harus berupa angka`)
payout = body.slice[10]
yumm = 100 * payout
if (getBalance(sender, balance) < yumm) return reply(`Balance kamu tidak mencukupi untuk pembelian ini`)
kurangBalance(sender, yumm, balance)
giveLimit(sender, parseInt(args[0]), limit)
teks = `Pembelian sebanyak ${q}, Sukses`
DaniBotz.sendMessage(from, teks, text, {quoted: todd})
break;

case 'kontak':
if (isBanned) return reply(mess.banned)
if (!isGroup) return reply(`Khusus Group Kak`)
argzu = arg.split('|')
if (!argzu) return reply(`Penggunaan ${prefix}kontak @tag|nama`)
if (todd.message.extendedTextMessage != undefined){
mentioned = todd.message.extendedTextMessage.contextInfo.mentionedJid
sendKontak(from, mentioned[0].split('@')[0], argzu[1])
} else {
sendKontak(from, argzu[0], argzu[1])
}
break
case 'kontag':
if (isBanned) return reply(mess.banned)
if (!isGroup) return reply(`Khusus Group Kak`)
argzi = arg.split('|')
if (!argzi) return reply(`Penggunaan ${prefix}kontag @tag|nama`)
if (todd.message.extendedTextMessage != undefined){
mentioned = todd.message.extendedTextMessage.contextInfo.mentionedJid
hideTagKontak(from, mentioned[0].split('@')[0], argzi[1])
} else {
reply(`Command Kayak Gini\n${prefix+command} @tag|nama`)
}
break
case 'listonline':
if (isBanned) return reply(mess.banned)
if (!isGroup) return reply(`Khusus Group Kak`)
try {
let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
let online = [...Object.keys(DaniBotz.chats.get(ido).presences), DaniBotz.user.jid]
DaniBotz.sendMessage(from, 'List Online:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join `\n`, text, { quoted: krtd1, contextInfo: { mentionedJid: online }})
} catch (e) {
reply(`${e}`)
}
break
case 'listadmin':
if (isBanned) return reply(mess.banned)
if (!isGroup) return reply(`Khusus Group Kak`)
teks = `List admin of group *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
no = 0
for (let admon of groupAdmins) {
no += 1
teks += `${no.toString()}. @${admon.split('@')[0]}\n`
}
mentions(teks, groupAdmins, true)
break
case 'setnamaa':
if (isBanned) return reply(mess.banned)
if (!q) return reply(`Nama?`)
if (!isGroup) return reply(`Khusus Group Kak`)
if (!todd.key.fromMe && !isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(`Bot Bukan Admin`)
DaniBotz.groupUpdateSubject(from, `${body.slice(9)}`)
DaniBotz.sendMessage(from, `\`\`\`✓Sukses Mengganti Nama Group Menjadi\`\`\` *${body.slice(9)}*`, text, { quoted: todd })
break
case 'setdesc':
if (isBanned) return reply(mess.banned)
if (!q) return reply(`Teks Deskripsi?`)
if (!isGroup) return reply(`Khusus Group Kak`)
if (!todd.key.fromMe && !isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(`Bot Bukan Admin`)
DaniBotz.groupUpdateDescription(from, `${body.slice(9)}`)
DaniBotz.sendMessage(from, `\`\`\`Sukses ✅, Mengganti Deskripsi Grup\`\`\` *${groupMetadata.subject}* Menjadi: *${body.slice(9)}*`, text, { quoted: krtd1 })
break
case 'setppgc':
if (isBanned) return reply(mess.banned)
if (!isGroup) return reply(`Khusus Group Kak`)
if (!todd.key.fromMe && !isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(`Bot Bukan Admin`)
if (isQuotedImage) {
let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(todd).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : todd
let media = await DaniBotz.downloadMediaMessage(encmedia)
DaniBotz.updateProfilePicture(from, media)
} else {
reply(`Kirim atau tag gambar dengan caption ${prefix}setppgc`)
}
break
case 'linkgc':
if (isBanned) return reply(mess.banned)
if (!isGroup) return reply(`Khusus Group Kak`)
if (!isBotGroupAdmins) return reply(`Bot Bukan Admin`)
linkgc = await DaniBotz.groupInviteCode(from)
yah = `https://chat.whatsapp.com/${linkgc}\n\nLink Group *${groupName}*`
DaniBotz.sendMessage(from, yah, text, { quoted: krtd1 })
break
case 'tagall':
if (isBanned) return reply(mess.banned)
if (!todd.key.fromMe && !isGroupAdmins) return reply(mess.only.admin)
if (!q) return reply('Tekss?')
if (!isGroup) return reply(`Khusus Group Kak`)
var arr = [];
var txti = `[ TAG ALL ]\n\n*Teks :* ${q ? q : ''}\n\n`
for (var i of groupMembers)
{
txti += `=> @${i.jid.split("@")[0]}\n`
arr.push(i.jid)
}
mentions(txti, arr, true)
break
case 'hidetag':
if (isBanned) return reply(mess.banned)
if (!q) return reply('Tekss?')
if (!isGroup) return reply(`Khusus Group Kak`)
if (!todd.key.fromMe && !isGroupAdmins) return reply(mess.only.admin)
try {
quotedText = todd.message.extendedTextMessage.contextInfo.quotedMessage.conversation
hideTag(from, `${quotedText}`)
} catch {
hideTag(from, `${q}`)
}
break
case 'infogc':
if (isBanned) return reply(mess.banned)
if (!todd.key.fromMe && !isGroupAdmins) return reply(mess.only.admin)
if (!isGroup) return reply(`Khusus Group Kak`)
try {
var pic = await DaniBotz.getProfilePicture(from)
} catch {
var pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
}
let ingfo = `*G R O U P I N F O*\n\n*Name :* ${groupName}\n*ID Grup :* ${from}\n*Dibuat :* ${moment(`${groupMetadata.creation}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n*Owner Grup :* @${groupMetadata.owner.split('@')[0]}\n*Jumlah Admin :* ${groupAdmins.length}\n*Jumlah Peserta :* ${groupMembers.length}\n*Welcome :* ${isWelkom ? 'Aktif' : 'Mati'}\n*AntiLink :* ${isAntiLink ? 'Aktif' : 'Mati'}\n*Desc :* \n\n${groupMetadata.desc}`
DaniBotz.sendMessage(from, await getBuffer(pic), image, {quoted: krtd1, caption: ingfo, contextInfo: {"mentionedJid": [groupMetadata.owner.replace('@c.us', '@s.whatsapp.net')]}})
break
case 'promote' :
if (!isGroup) return reply(`Khusus Group`)
if (!todd.key.fromMe && !isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(`Bot Bukan Admin`)
if (todd.message.extendedTextMessage === undefined || todd.message.extendedTextMessage === null) return reply(`Gunakan Seperti Ini ${prefix+command} @tag`)
mentioned = todd.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Perintah di terima, anda menjdi admin :\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
DaniBotz.groupMakeAdmin(from, mentioned)
} else {
mentions(`Perintah di terima, @${mentioned[0].split('@')[0]} Kamu Menjadi Admin Di Group *${groupMetadata.subject}*`, mentioned, true)
DaniBotz.groupMakeAdmin(from, mentioned)
}
break
case 'demote' :
if (!isGroup) return reply(`Khusus Group`)
if (!todd.key.fromMe && !isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(`Bot Bukan Admin`)
if (todd.message.extendedTextMessage === undefined || todd.message.extendedTextMessage === null) return reply(`Gunakan Seperti Ini ${prefix+command} @tag`)
mentioned = todd.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Perintah di terima, anda tidak menjadi admin :\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
DaniBotz.groupDemoteAdmin(from, mentioned)
} else {
mentions(`Perintah di terima, Menurunkan @${mentioned[0].split('@')[0]} Menjadi Member`, mentioned, true)
DaniBotz.groupDemoteAdmin(from, mentioned)
}
break
case 'add':
if (isBanned) return reply(mess.banned)
if (!isGroup) return reply(`Khusus Group Kak`)
if (!isBotGroupAdmins) return reply(`Bot Bukan Admin`)
if (!todd.key.fromMe && !isGroupAdmins) return reply(mess.only.admin)
if (!q) return reply(`Format Error!\n\nContoh : ${prefix + command} 6285742566708`)
if (todd.message.extendedTextMessage === null || todd.message.extendedTextMessage === undefined) {
entah = q.split("|")[0]
entah = entah.replace(new RegExp("[()+-/ +/]", "gi"), "")
entah = `${entah}@s.whatsapp.net`
DaniBotz.groupAdd(from, [entah])
} else {
entah = todd.message.extendedTextMessage.contextInfo.participant
DaniBotz.groupAdd(from, [entah])
}
break
case 'kick':
if (isBanned) return reply(mess.banned)
if (!isGroup) return reply(`Khusus Group Kak`)
if (!isBotGroupAdmins) return reply(`Bot Bukan Admin`)
if (!todd.key.fromMe && !isGroupAdmins) return reply(mess.only.admin)
if (!q) return reply(`Format Error!\n\nContoh : ${prefix + command} @tag`)
if (!isBotGroupAdmins) return reply(`Bot Bukan Admin`)
y = q.split('@')[1] + '@s.whatsapp.net'
DaniBotz.groupRemove(from, [y])
reply(`Succses kick target!`)
break
case 'welcome':
if (!isGroup) return reply(mess.only.group)
if (!todd.key.fromMe && !isGroupAdmins) return reply(mess.only.admin)    
pp = `on or off?
${prefix}welkom on
${prefix}welkom off`
buttons = [
{ buttonId: `${prefix}welkom on`, buttonText: { displayText: 'ON️' }, type: 1 },
{ buttonId: `${prefix}welkom off`, buttonText: { displayText: 'OFF' }, type: 1 }]
sendButton(from, pp, 'Welcome', but, troli)
break          
case 'open':
if (isBanned) return reply(mess.banned)
if (!isGroup) return reply(`Khusus Group Bang`)
if (!isBotGroupAdmins) return reply(`Bot Bukan Admin`)
if (!todd.key.fromMe && !isGroupAdmins) return reply(mess.only.admin)
reply(`Sukses Membuka Grup ${groupName}`)
DaniBotz.groupSettingChange(from, GroupSettingChange.messageSend, false)
break
case 'close':
if (isBanned) return reply(mess.banned)
if (!isGroup) return reply(`Khusus Group Bang`)
if (!isBotGroupAdmins) return reply(`Bot Bukan Admin`)
if (!todd.key.fromMe && !isGroupAdmins) return reply(mess.only.admin)
reply(`Sukses Menutup Grup ${groupName}`)
DaniBotz.groupSettingChange(from, GroupSettingChange.messageSend, true)
break
/////////////////\\\\/\\//\\//\\/\\//\\//\///
case 'joinrpg':
if (isBanned) return reply(mess.banned)  
if (isPetualang) return reply('Kamu Sudah Menjadi Petualang')
if (args.length < 1) return reply(`Kirim perintah ${prefix + command} nama`) 
reqXp  = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
_petualang.push(sender)
fs.writeFileSync('./database/inventori.json', JSON.stringify(_petualang))        
addInventori(sender)
addLevelingId(sender) 
var name = args[0]
try {
ppimg = await DaniBotz.getProfilePicture(`${sender.split('@')[0]}@c.us`)
} catch {
ppimg = 'https://telegra.ph/file/bc83fab9ed0fe327fe5ad.jpg'	
}
var serialUser = createSerial(14)
var anuu = monospace(`〘 SUKSES JOIN RPG 〙\n\n「 PROFILE 」\n • Nama : ${name}\n • Level : ${getLevelingLevel(sender)}\n • Status : ${elit}\n • Xp :  ${getLevelingXp(sender)}/${reqXp}\n\n「 RPG GAME 」`)
haitod = await getBuffer(ppimg)
DaniBotz.sendMessage(from, { contentText: `${anuu}`, 
footerText: `Rpg Game`, 
buttons: [
{ buttonId: `${prefix}profile`, buttonText: { displayText: 'RPG MENU' }, type: 1 }
], 
headerType: 'LOCATION',
locationMessage: { degreesLatitude: '',
degreesLongitude: '',
jpegThumbnail: haitod,
contextInfo: {mentionedJid: [sender]}}}, 
'buttonsMessage')
break
case 'profile':
if (isBanned) return reply(mess.banned)
if (!isGroup) return reply(`Khusus Group Kak`)
if (!isPetualang) return reply(`Maaff Kak *${pushname}* Sepertinya Kakak Bukan Petualang!!!\nUntuk Menjadi Petualang Silahkan Ketik :\n${prefix}joinrpg`)
reqXp  = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
pp = monospace(`📍 𝗣𝗿𝗼𝗳𝗶𝗹𝗲 𝗣𝗹𝗮𝘆𝗲𝗿
 • Nama : ${pushname}
 • Rank : ${role}
 • Status : ${elit}
 • Uang : $${(getBalance(sender, balance))}
 • Xp : ${getLevelingXp(sender)}/${reqXp}
 • Level : ${getLevelingLevel(sender)}
 
🎒 𝗜𝗻𝘃𝗲𝗻𝘁𝗼𝗿𝗶 :
 • Uang : $${(getBalance(sender, balance))}
 • Emas : ${getEmas(sender)}
 • Besi : ${getBesi(sender)}
 • Ikan : ${getFish(sender)}
 • Berlian : ${getDm(sender)}

🏔️ 𝗠𝗲𝗻𝘂 𝗥𝗣𝗚
 × ${prefix}joinrpg
 × ${prefix}quest 
 × ${prefix}mining
 × ${prefix}mancing
 × ${prefix}luckyday
 × ${prefix}luckytime
 × ${prefix}adventure
 × ${prefix}inventori
 
⚔️ 𝗙𝗮𝗿𝗺𝗶𝗻𝗴 𝗥𝗣𝗚
 × ${prefix}killslime
 × ${prefix}killgoblin
 × ${prefix}killdevil
 × ${prefix}killbehemoth
 × ${prefix}killdemond
 × ${prefix}killdemondking 
 
🛒 𝗦𝗲𝗹𝗹 𝗜𝗻𝘃𝗲𝗻𝘁𝗼𝗿𝘆
 × ${prefix}sellikan
 × ${prefix}sellbesi
 × ${prefix}sellemas
 × ${prefix}selldiamond`)
DaniBotz.sendMessage(from, { contentText: `${pp}`, 
footerText: `Rpg Game`, 
buttons: [
{ buttonId: `${prefix}inventori`, buttonText: { displayText: 'INVENTORI' }, type: 1 }
], 
headerType: 'LOCATION',
locationMessage: { degreesLatitude: '',
degreesLongitude: '',
jpegThumbnail: kirtodrpg,
contextInfo: {mentionedJid: [sender]}}}, 
'buttonsMessage')
break
case 'sellikan':
if (isBanned) return reply(mess.banned)
if (!isPetualang) return reply(`Maaff Kak *${pushname}* Sepertinya Kakak Bukan Petualang!!!\nUntuk Menjadi Petualang Silahkan Ketik :\n${prefix}joinrpg`)
if (args.length < 1) return reply(`Kirim perintah *${prefix + command}* jumlah yang ingin dijual`)
jmlh = body.slice(10)
rp = 5 * jmlh
if (getFish(sender) < jmlh) return reply(`Ikan Kamu Tidak Cukup`)
sellFish(sender, jmlh, balance)
addBalance(sender, rp, balance) 
capti = monospace(`🛒 𝗣𝗔𝗦𝗔𝗥\n • Penjual : ${pushname}\n • Pembeli : Admin\n • Harga/Ikan : 5\n • Status : Sukses\n • Sisa Ikan : ${getFish(sender)}\n • Hasil Penjualan : $${rp}`)
but = [{ buttonId: `${prefix}inventori`, buttonText: { displayText: 'Cek Inventori' }, type: 1 }]
sendButton(from, capti, 'Sellikan', but)
break
case 'sellbesi':
if (isBanned) return reply(mess.banned)
if (!isPetualang) return reply(`Maaff Kak *${pushname}* Sepertinya Kakak Bukan Petualang!!!\nUntuk Menjadi Petualang Silahkan Ketik :\n${prefix}joinrpg`)
if (args.length < 1) return reply(`Kirim perintah *${prefix + command}* jumlah yang ingin dijual`)
jmlh = body.slice(10)
rp = 10 * jmlh
if (getBesi(sender) < jmlh) return reply(`Besi Kamu Tidak Cukup`)
sellBesi(sender, jmlh, balance)
addBalance(sender, rp, balance) 
capti = monospace(`🛒 𝗣𝗔𝗦𝗔𝗥\n • Penjual : ${pushname}\n • Pembeli : Admin\n • Harga/Besi : 10\n • Status : Sukses\n • Sisa Besi : ${getBesi(sender)}\n • Hasil Penjualan : $${rp}`)
but = [{ buttonId: `${prefix}inventori`, buttonText: { displayText: 'Cek Inventori' }, type: 1 }]
sendButton(from, capti, 'Sellbesi', but)
break
case 'sellemas':
if (isBanned) return reply(mess.banned)
if (!isPetualang) return reply(`Maaff Kak *${pushname}* Sepertinya Kakak Bukan Petualang!!!\nUntuk Menjadi Petualang Silahkan Ketik :\n${prefix}joinrpg`)
if (args.length < 1) return reply(`Kirim perintah *${prefix + command}* jumlah yang ingin dijual`)
jmlh = body.slice(10)
rp = 25 * jmlh
if (getEmas(sender) < jmlh) return reply(`Emas Kamu Tidak Cukup`)
sellEmas(sender, jmlh, balance)
addBalance(sender, rp, balance) 
capti = monospace(`🛒 𝗣𝗔𝗦𝗔𝗥\n • Penjual : ${pushname}\n • Pembeli : Admin\n • Harga/Emas : 25\n • Status : Sukses\n • Sisa Emas : ${getEmas(sender)}\n • Hasil Penjualan : $${rp}`)
but = [{ buttonId: `${prefix}inventori`, buttonText: { displayText: 'Cek Inventori' }, type: 1 }]
sendButton(from, capti, 'Sellemas', but)
break 
case 'selldiamond':
if (isBanned) return reply(mess.banned)
if (!isPetualang) return reply(`Maaff Kak *${pushname}* Sepertinya Kakak Bukan Petualang!!!\nUntuk Menjadi Petualang Silahkan Ketik :\n${prefix}joinrpg`)
if (args.length < 1) return reply(`Kirim perintah *${prefix + command}* jumlah yang ingin dijual`)
ttl = body.slice(13)
var etoo = 75 * ttl
if (getDm(sender) < ttl) return reply(`Besi Kamu Tidak Cukup`)
sellDm(sender, ttl)
addBalance(sender, etoo, balance) 
capti = monospace(`🛒 𝗣𝗔𝗦𝗔𝗥\n • Penjual : ${pushname}\n • Pembeli : Admin\n • Harga/Dm : 75\n • Status : Sukses\n • Sisa Diamond : ${getDm(sender)}\n • Hasil Penjualan : $${etoo}`)
but = [{ buttonId: `${prefix}inventori`, buttonText: { displayText: 'Cek Inventori' }, type: 1 }]
sendButton(from, capti, 'Selldiamond', but)
break 
case 'quest':
if (isBanned) return reply(mess.banned)
if (!isPetualang) return reply(`Maaff Kak *${pushname}* Sepertinya Kakak Bukan Petualang!!!\nUntuk Menjadi Petualang Silahkan Ketik :\n${prefix}joinrpg`)
groups = DaniBotz.chats.array.filter(v => v.jid.endsWith('g.us'))
privat = DaniBotz.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
uptime = process.uptime();
timestampe = speed();
totalChat = await DaniBotz.chats.all()
latensie = speed() - timestampe
listMsg = {
buttonText: 'S E L E C T',
footerText: `@Quest Game`,
description: `Hallo Kak @${sender.split('@')[0]}, Aku DaniBotz
Aku Adalah Admin Quest Di Group Ini!!!
Silahkan Pilih Quest Yang Cocok Dengan Kakak!!!
Gabung Ke Petualang Pro Untuk Membuka Quest Mode Demon
*Jadi Petualangan Pro Untuk Mendapatkan Hadiah Special>_<*`,
sections: [
{
"title": `MISI KE 1`,
 rows: [
{
"title": `Membunuh Slime`,
"description": `Berburu Slime Untuk Mendapatkan Hadiah`,
"rowId": `${prefix}slime`
}
]
}
,
{
"title": `MISI KE 2`,
 rows: [
{
"title": `Membunuh Goblin`,
"description": `Berburu Globin Untuk Mendapatkan Hadiah`,
"rowId": `${prefix}goblin`
}
]
}
,
{
"title": `MISI KE 3`,
 rows: [
{
"title": `Membunuh Devil`,
"description": `Berburu Devil Untuk Mendapatkan Hadiah`,
"rowId": `${prefix}devil`
}
]
}
,
{
"title": `MISI KE 4`,
 rows: [
{
"title": `Membunuh Behemoth`,
"description": `Berburu Behemoth Untuk Mendapatkan Hadiah`,
"rowId": `${prefix}behemoth`
}
]
}
,
{
"title": `MISI KE 5`,
 rows: [
{
"title": `Membunuh Demon`,
"description": `Berburu Demon Untuk Mendapatkan Hadiah`,
"rowId": `${prefix}demon`
}
]
}
,
{
"title": `MISI KE 6`,
 rows: [
{
"title": `Membunuh DemonKing`,
"description": `Berburu DemonKing Untuk Mendapatkan Hadiah`,
"rowId": `${prefix}demonking`
}
]
}
],
listType: 1
}
DaniBotz.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [sender]},quoted:krtd1})
break
case 'slime':
case 'killslime':
if (isBanned) return reply(mess.banned)
if (!isPetualang) return reply(`Maaff Kak *${pushname}* Sepertinya Kakak Bukan Petualang!!!\nUntuk Menjadi Petualang Silahkan Ketik :\n${prefix}joinrpg`)
ez = Math.ceil(Math.random() * 400)
addLevelingXp(sender, ez)
a = randomNomor(55)
b = randomNomor(400)
c = randomNomor(80)
d = randomNomor(3)
addLevelingXp(sender, ez)
addBalance(sender, b, balance)
addEmas(sender, a)
addBesi(sender, c)
addDm(sender, d)
pp = monospace(`☠️ 𝗠𝗶𝘀𝗶 𝗠𝗲𝗺𝗯𝘂𝗻𝘂𝗵 𝗦𝗹𝗶𝗺𝗲️\n\n🎁 Hadiah Membunuh Slime\n • Uang : $${b}\n • Besi : ${c}\n • Emas : ${a}\n • Diamond : ${d}\n\nTerimakasih Telah Menjalankan Misi Ini>_<`)
DaniBotz.sendMessage(from, { contentText: `${pp}`, 
footerText: `Rpg Game`, 
buttons: [
{ buttonId: `${prefix}inventori`, buttonText: { displayText: 'CEK INVENTORI' }, type: 1 }
], 
headerType: 'LOCATION',
locationMessage: { degreesLatitude: '',
degreesLongitude: '',
jpegThumbnail: slime,
contextInfo: {mentionedJid: [sender]}}}, 
'buttonsMessage')
break
case 'goblin':
case 'killgoblin':
if (isBanned) return reply(mess.banned)
if (!isPetualang) return reply(`Maaff Kak *${pushname}* Sepertinya Kakak Bukan Petualang!!!\nUntuk Menjadi Petualang Silahkan Ketik :\n${prefix}joinrpg`)
ez = Math.ceil(Math.random() * 500)
addLevelingXp(sender, ez)
a = randomNomor(65)
b = randomNomor(500)
c = randomNomor(90)
d = randomNomor(5)
addLevelingXp(sender, ez)
addBalance(sender, b, balance)
addEmas(sender, a)
addBesi(sender, c)
addDm(sender, d)
pp = monospace(`☠️ 𝗠𝗶𝘀𝗶 𝗠𝗲𝗺𝗯𝘂𝗻𝘂𝗵 𝗚𝗼𝗯𝗹𝗶𝗻\n\n🎁 Hadiah Membunuh Goblin\n • Uang : $${b}\n • Besi : ${c}\n • Emas : ${a}\n • Diamond : ${d}\n\nTerimakasih Telah Menjalankan Misi Ini>_<`)
DaniBotz.sendMessage(from, { contentText: `${pp}`, 
footerText: `Rpg Game`, 
buttons: [
{ buttonId: `${prefix}inventori`, buttonText: { displayText: 'CEK INVENTORI' }, type: 1 }
], 
headerType: 'LOCATION',
locationMessage: { degreesLatitude: '',
degreesLongitude: '',
jpegThumbnail: goblin,
contextInfo: {mentionedJid: [sender]}}}, 
'buttonsMessage')
break
case 'devil': 
case 'killdevil':
if (isBanned) return reply(mess.banned)
if (!isPetualang) return reply(`Maaff Kak *${pushname}* Sepertinya Kakak Bukan Petualang!!!\nUntuk Menjadi Petualang Silahkan Ketik :\n${prefix}joinrpg`)
ez = Math.ceil(Math.random() * 600)
addLevelingXp(sender, ez)
a = randomNomor(70)
b = randomNomor(600)
c = randomNomor(95)
d = randomNomor(6)
addLevelingXp(sender, ez)
addBalance(sender, b, balance)
addEmas(sender, a)
addBesi(sender, c)
addDm(sender, d)
pp = monospace(`☠️ 𝗠𝗶𝘀𝗶 𝗠𝗲𝗺𝗯𝘂𝗻𝘂𝗵 𝗗𝗲𝘃𝗶𝗹️\n\n🎁 Hadiah Membunuh Devil\n • Uang : $${b}\n • Besi : ${c}\n • Emas : ${a}\n • Diamond : ${d}\n\nTerimakasih Telah Menjalankan Misi Ini>_<`)
DaniBotz.sendMessage(from, { contentText: `${pp}`, 
footerText: `Rpg Game`, 
buttons: [
{ buttonId: `${prefix}inventori`, buttonText: { displayText: 'CEK INVENTORI' }, type: 1 }
], 
headerType: 'LOCATION',
locationMessage: { degreesLatitude: '',
degreesLongitude: '',
jpegThumbnail: devil,
contextInfo: {mentionedJid: [sender]}}}, 
'buttonsMessage')
break
case 'behemoth':
case 'killbehemoth':
if (isBanned) return reply(mess.banned)
if (!isPetualang) return reply(`Maaff Kak *${pushname}* Sepertinya Kakak Bukan Petualang!!!\nUntuk Menjadi Petualang Silahkan Ketik :\n${prefix}joinrpg`)
ez = Math.ceil(Math.random() * 700)
addLevelingXp(sender, ez)
a = randomNomor(75)
b = randomNomor(600)
c = randomNomor(100)
d = randomNomor(7)
addLevelingXp(sender, ez)
addBalance(sender, b, balance)
addEmas(sender, a)
addBesi(sender, c)
addDm(sender, d)
pp = monospace(`☠️ 𝗠𝗶𝘀𝗶 𝗠𝗲𝗺𝗯𝘂𝗻𝘂𝗵 𝗕𝗲𝗵𝗲𝗺𝗼𝘁𝗵️\n\n🎁 Hadiah Membunuh Behemoth\n • Uang : $${b}\n • Besi : ${c}\n • Emas : ${a}\n • Diamond : ${d}\n\nTerimakasih Telah Menjalankan Misi Ini>_<`)
DaniBotz.sendMessage(from, { contentText: `${pp}`, 
footerText: `Rpg Game`, 
buttons: [
{ buttonId: `${prefix}inventori`, buttonText: { displayText: 'CEK INVENTORI' }, type: 1 }
], 
headerType: 'LOCATION',
locationMessage: { degreesLatitude: '',
degreesLongitude: '',
jpegThumbnail: behemoth,
contextInfo: {mentionedJid: [sender]}}}, 
'buttonsMessage')
break
case 'demon':
case 'killdemond':
if (isBanned) return reply(mess.banned)
if (!isPetualang) return reply(`Maaff Kak *${pushname}* Sepertinya Kakak Bukan Petualang!!!\nUntuk Menjadi Petualang Silahkan Ketik :\n${prefix}joinrpg`)
ez = Math.ceil(Math.random() * 850)
addLevelingXp(sender, ez)
a = randomNomor(90)
b = randomNomor(900)
c = randomNomor(120)
d = randomNomor(10)
addLevelingXp(sender, ez)
addBalance(sender, b, balance)
addEmas(sender, a)
addBesi(sender, c)
addDm(sender, d)
pp = monospace(`☠️ 𝗠𝗶𝘀𝗶 𝗠𝗲𝗺𝗯𝘂𝗻𝘂𝗵 𝗗𝗲𝗺𝗼𝗻️\n\n🎁 Hadiah Membunuh Demond\n • Uang : $${b}\n • Besi : ${c}\n • Emas : ${a}\n • Diamond : ${d}\n\nTerimakasih Telah Menjalankan Misi Ini>_<`)
DaniBotz.sendMessage(from, { contentText: `${pp}`, 
footerText: `Rpg Game`, 
buttons: [
{ buttonId: `${prefix}inventori`, buttonText: { displayText: 'CEK INVENTORI' }, type: 1 }
], 
headerType: 'LOCATION',
locationMessage: { degreesLatitude: '',
degreesLongitude: '',
jpegThumbnail: demon,
contextInfo: {mentionedJid: [sender]}}}, 
'buttonsMessage')
break  
case 'demonking':
case 'killdemondking':
if (isBanned) return reply(mess.banned)
if (!isPetualang) return reply(`Maaff Kak *${pushname}* Sepertinya Kakak Bukan Petualang!!!\nUntuk Menjadi Petualang Silahkan Ketik :\n${prefix}joinrpg`)
ez = Math.ceil(Math.random() * 1000)
addLevelingXp(sender, ez)
addLevelingXp(sender, ez)
addBalance(sender, 1999, balance)
addEmas(sender, 99)
addBesi(sender, 99)
addDm(sender, 99)
pp = monospace(`☠️ 𝗠𝗶𝘀𝗶 𝗠𝗲𝗺𝗯𝘂𝗻𝘂𝗵 𝗗𝗲𝗺𝗼𝗻𝗞𝗶𝗻𝗴\n\n🎁 Hadiah Membunuh DemonKing\n • Uang : $${b}\n • Besi : ${c}\n • Emas : ${a}\n • Diamond : ${d}\n\nTerimakasih Telah Menjalankan Misi Ini>_<`)
DaniBotz.sendMessage(from, { contentText: `${pp}`, 
footerText: `Rpg Game`, 
buttons: [
{ buttonId: `${prefix}inventori`, buttonText: { displayText: 'CEK INVENTORI' }, type: 1 }
], 
headerType: 'LOCATION',
locationMessage: { degreesLatitude: '',
degreesLongitude: '',
jpegThumbnail: demonking,
contextInfo: {mentionedJid: [sender]}}}, 
'buttonsMessage')
break
case 'mancing':
if (isBanned) return reply(mess.banned)
if (!isPetualang) return reply(`Maaff Kak *${pushname}* Sepertinya Kakak Bukan Petualang!!!\nUntuk Menjadi Petualang Silahkan Ketik :\n${prefix}joinrpg`)
ikannya = ikan[Math.floor(Math.random() * ikan.length)]
xp = Math.ceil(Math.random() * 350)
coin = randomNomor(50)	    
ditangkap = Math.ceil(Math.random() * 50)
cing = await getBuffer(`https://telegra.ph/file/d9b15de4f661808dfd0b9.jpg`)
setTimeout( () => {
caption = monospace(`「 Memancing 」\n\n • Tangkapan : ${ikannya}\n • Total Dapat : ${ditangkap} Ikan\n • MONEY : $${coin}\n • EXP : ${xp}Xp`)
DaniBotz.sendMessage(from, { contentText: `${caption}`, 
footerText: `Memancing`, 
buttons: [
{ buttonId: `${prefix}mancing`, buttonText: { displayText: `Lanjut Mancing` }, type: 1 },
{ buttonId: `${prefix}inventori`, buttonText: { displayText: `Cek Inventori` }, type: 1 }
], 
headerType: 'LOCATION',
locationMessage: { degreesLatitude: '',
degreesLongitude: '',
jpegThumbnail: cing,
contextInfo: {mentionedJid: [sender]}}}, 
'buttonsMessage')
}, 6000)
setTimeout( () => {
DaniBotz.sendMessage(from, 'Berhasil Mendapatkan Ikan. . .', text) 
}, 5000) // 1000 = 1s,
setTimeout( () => {
DaniBotz.sendMessage(from, '🎣Meanarik kail. . .', text) 
}, 3000) // 1000 = 1s,
setTimeout( () => {
DaniBotz.sendMessage(from, '🎣Mulai memancing. . .', text) 
}, 1500) // 1000 = 1s,
addFish(sender, ditangkap)
addLevelingXp(sender, xp)
addBalance(sender, coin, balance) 
break
case 'inventori':
if (isBanned) return reply(mess.banned)
if (!isPetualang) return reply(`Maaff Kak *${pushname}* Sepertinya Kakak Bukan Petualang!!!\nUntuk Menjadi Petualang Silahkan Ketik :\n${prefix}joinrpg`)
var reqXp  = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
done = monospace(`📍 𝗣𝗿𝗼𝗳𝗶𝗹𝗲 𝗣𝗹𝗮𝘆𝗲𝗿\n • Nama : ${pushname}\n • Rank : ${role}\n • Status : ${elit}\n • Xp : ${getLevelingXp(sender)}/${reqXp}\n • Level : ${getLevelingLevel(sender)}\n🎒 𝗜𝗻𝘃𝗲𝗻𝘁𝗼𝗿𝗶 :\n • Emas : ${getEmas(sender)}🪙\n • Uang : $${(getBalance(sender, balance))}💰\n • Besi : ${getBesi(sender)}⛓️\n • Berlian : ${getDm(sender)}💎\n • Ikan : ${getFish(sender)}🎣`)
but = [{ buttonId: `${prefix}adventure`, buttonText: { displayText: 'ADVENTURE' }, type: 1 }]
sendButton(from, done, 'Inventori User', but)
break
case 'speed':
case 'ping':
timestampe = speed();
latensie = speed() - timestampe
reply(`[ *SPEED TEST* ]\nRespond in ${latensie.toFixed(4)} Sec`)
break
case 'adventure':
if (isBanned) return reply(mess.banned)
if (!isPetualang) return reply(`Maaff Kak *${pushname}* Sepertinya Kakak Bukan Petualang!!!\nUntuk Menjadi Petualang Silahkan Ketik :\n${prefix}joinrpg`)
ngab = ['Longsor','Letusan Gunung','Tsunami','Gempa Bumi','Meteor','Demon']
var sesuatu = ngab[Math.floor(Math.random() * ngab.length)]
var dungeon =['Whetstone','Willow Field','Rodeo','Verdant Blufs','Bull Holland','Fallen Tree','Dellnort','Verona Lush','Leafy Hollow','Chilliad Dome','Garcia','Pine Valley','Santa Florals','Guvero East','Cranbarry','Junever','Aldea Malvada','Green Palms','Green Oasis','Fort Carson','Prickel Pine','Pilson Meadow','Boca Roca','Rocksore East','Camel Toe','Hanky Panky','Fern Ridge','Montgomerry','Flint Yankton','Vespucci','fortress city', 'ravines valley', 'horizon valley', 'cyber city', 'end city', 'templar city', 'pochinki', 'peak','Vertical Zone','Sentainel Country','Night City','Flush City','Royals Canyon','Blackburn','Peterborough','Tarnstead','Jarren’s','Outpost','Landow','Nearon','Kincardine','Aysgarth','Veritas','Openshaw','Bredwardine','Berkton','Wolford','Norwich','Kald','Solaris','Kilead','Pitmerden','Acomb','Eldham','Warcester','Lingmell','Kilead','Cromerth','Wingston','Garmsby','Kingcardine','Perthlochry','Frostford','Hillford','Hardersfield','Tarrin','Holmfirth','Caerleon','Elisyum','Ballaeter','Penshaw','Bradford','Wigston','Accreton','Kameeraska','Ferncombe','Kilerth','Erostey','Carran','Jongvale','Larnwick','Queenstown','Whaelrdrake','Baerney','Wingston','Arkney','Strongfair','Lowestoft','Beggar’s Hole','Shepshed','Perthlochry','Ironforge','Tywardreath','Pontheugh','Foolshope','Hull','Dalmerlington','Aucteraden','Woodpine','Millstone','Windermere','Lancaster','Kirkwall','Rotherhithe','Astrakhan','Watford','Ritherhithe','Krosstoen','Pella’s','Wish','Grimsby','Ayrith','Ampleforth','Skystead','Eanverness','Penshaw','Peatsland','Astrakane','Pontybridge','Caershire','Snowbush','Sutton','Northwich','Hogsfeet','Claethorpes','Sudbury','Cherrytown','Blue Field','Orrinshire','Aempleforth','Garrigill','Jedburgh','Eastbourne','Taedmorden','Venzor','Grasmere','Ubbin','Falls','Violl’s Garden','Glanchester','Bailymena','Arkkukari','Skargness','Cardend','Llanybydder','Faversham','Yellowseed','Carlisle','Cirencester','Aramoor','Furness','Kincardine','Rotherham','Emelle','Boroughton','Carran','Ffestiniog','Mansfield','Huthwaite','Marclesfield','Pavv','Squall’s End','Glenarm','Dragontail','Moressley','Hardersfield','Gilramore','Aria','Ecrin','Clare View Point','Blackburn','Oakheart','Doonatel','Broughton','Carlisle','Murlayfield','Nuxvar']
anu = fs.readFileSync('./lib/dungeon.js');
var ad = dungeon[Math.floor(Math.random() * dungeon.length)]
jsonData = JSON.parse(anu);
randIndex = Math.floor(Math.random() * jsonData.length);
randKey = jsonData[randIndex];
hasm = await getBuffer(randKey.result)  
var adven = Math.ceil(Math.random() * 1000)
var money = Math.ceil(Math.random() * 300)
setTimeout( () => {		
caption = monospace(`「 DEATH 」\n\n • Tempat  ${ad}\n • MONEY : $${money}\n • EXP : ${adven}Xp`)
DaniBotz.sendMessage(from, { contentText: `${caption}`, 
footerText: `Memancing`, 
buttons: [
{ buttonId: `${prefix}inventori`, buttonText: { displayText: 'INVENTORI' }, type: 1 }
], 
headerType: 'LOCATION',
locationMessage: { degreesLatitude: '',
degreesLongitude: '',
jpegThumbnail: hasm,
contextInfo: {mentionedJid: [sender]}}}, 
'buttonsMessage')
}, 7000)
setTimeout( () => {
DaniBotz.sendMessage(from, `Awass`, text) 
}, 5000) // 1000 = 1s,
setTimeout( () => {
DaniBotz.sendMessage(from, `Tiba tiba ada ${sesuatu}`, text) 
}, 3000) // 1000 = 1s,
setTimeout( () => {
DaniBotz.sendMessage(from, `${pushname} sedang bertualang`, text) 
}, 1500) // 1000 = 1s,
addLevelingXp(sender, adven)
addBalance(sender, money, balance)
break
case 'mining':   
if (isBanned) return reply(mess.banned)
if (!isPetualang) return reply(`Maaff Kak *${pushname}* Sepertinya Kakak Bukan Petualang!!!\nUntuk Menjadi Petualang Silahkan Ketik :\n${prefix}joinrpg`)
pp = randomNomor(75)
emas = randomNomor(15)
dm = randomNomor(3)
besi = randomNomor(50)
done = monospace(`Selesai Mining🚧\nlist hasil :\nEmas : ${emas}🪙\nUang : $${pp}💰\nBesi : ${besi}⛓️\nBerlian : ${dm}💎`)
addBalance(sender, pp, balance)
addBesi(sender, besi)
addEmas(sender, emas)
addDm(sender, dm)
mining = ('Waitt sedang menguli . . .')
setTimeout( () => {
but = [{ buttonId: `${prefix}mining`, buttonText: { displayText: 'LANJUT MINING' }, type: 1 }]
sendButton(from, done, 'Mining', but)
}, 9000) // 1000 = 1s,
setTimeout( () => {
DaniBotz.sendMessage(from, '🚧 selesai menguli. . .🪙👷', text) 
}, 7000) // 1000 = 1s,
setTimeout( () => {
DaniBotz.sendMessage(from, '🚧 menemukan emas. . .⚒️🏔️️️', text) 
}, 4000) // 1000 = 1s,
setTimeout( () => {
DaniBotz.sendMessage(from, '🚧 mulai menambang. . .⚒️🏔️️', text) 
}, 1500) // 1000 = 1s,
setTimeout( () => {
DaniBotz.sendMessage(from, mining, text, {quoted: krtd1}) 
}, 0) // 1000 = 1s,
break
case 'luckyday':
if (isBanned) return reply(mess.banned)
if (!isPetualang) return reply(`Maaff Kak *${pushname}* Sepertinya Kakak Bukan Petualang!!!\nUntuk Menjadi Petualang Silahkan Ketik :\n${prefix}joinrpg`)
{
ez = Math.ceil(Math.random() * 450)
a = randomNomor(99)
b = randomNomor(500)
c = randomNomor(150)
addBalance(sender, b, balance)
addLevelingXp(sender, ez)
addEmas(sender, a)
addBesi(sender, c)
za = monospace(`🎰 LuckyTime\n• Uang : $${b}\n• Emas : ${a}\n• Besi : ${c}\n• Xp : ${ez}`)
but = [{ buttonId: `${prefix}luckyday`, buttonText: { displayText: 'LuckyDay' }, type: 1 }]
sendButton(from, za, '@LuckyDay', but, krtd1)   
}
break
case 'luckytime':
if (isBanned) return reply(mess.banned)
if (!isPetualang) return reply(`Maaff Kak *${pushname}* Sepertinya Kakak Bukan Petualang!!!\nUntuk Menjadi Petualang Silahkan Ketik :\n${prefix}joinrpg`)
{
ez = Math.ceil(Math.random() * 300)
addLevelingXp(sender, ez)
a = randomNomor(49)
b = randomNomor(300)
c = randomNomor(70)
addLevelingXp(sender, ez)
addBalance(sender, b, balance)
addEmas(sender, a)
addBesi(sender, c)
za = monospace(`🎰 LuckyTime\n• Uang : $${b}\n• Emas : ${a}\n• Besi : ${c}\n• Xp : ${ez}`)
but = [{ buttonId: `${prefix}luckytime`, buttonText: { displayText: 'LuckyTime' }, type: 1 }]
sendButton(from, za, '@LuckyTime', but, krtd1)
}
break
//F U N C T I O N  G A M E
// SUSUN KATA
if (susunkata.hasOwnProperty(sender.split('@')[0]) && !isCmd && !todd.key.fromMe) {
    jawaban = susunkata[sender.split('@')[0]]
    if (budy.toLowerCase() == jawaban) {
    delete susunkata[sender.split('@')[0]]
    sendButMessage(from, "Selamat🥳 Jawaban kamu benar!\n\n🎁 + Exp 500\n💰 + Balance ", `©  | `, [{"buttonId": `!susunkata`,"buttonText": {"displayText": "Main Lagi"},"type": "RESPONSE"}], {quoted : todd})
     addBalance(sender, 100, balance)
    addLevelingXp(sender, 500)
    fs.writeFileSync("./database/susunkata.json", JSON.stringify(susunkata))
    } else {
    replytext("Jawaban Salah!")
    }
    }
        
    // SIAPAKAH AKU
    if (siapakahaku.hasOwnProperty(sender.split('@')[0]) && !isCmd && !todd.key.fromMe) {
    jawaban = siapakahaku[sender.split('@')[0]]
    if (budy.toLowerCase() == jawaban) {
    delete siapakahaku[sender.split('@')[0]]
    sendButMessage(from, "Selamat🥳 Jawaban kamu benar!\n\n🎁 + Exp 500\n💰 + Balance ", `©  | `, [{"buttonId": `${prefix}siapakahaku`,"buttonText": {"displayText": "Main Lagi"},"type": "RESPONSE"}], {quoted : todd})
    addBalance(sender, 100, balance)
    addLevelingXp(sender, 500)
    fs.writeFileSync("./database/siapakahaku.json", JSON.stringify(siapakahaku))
    } else {
    replytexttext("Jawaban Salah!")
    }
    }
    
    // TEBAKKATA
    if (tebakkata.hasOwnProperty(sender.split('@')[0]) && !isCmd && !todd.key.fromMe) {
    jawaban = tebakkata[sender.split('@')[0]]
    if (budy.toLowerCase() == jawaban) {
    delete tebakkata[sender.split('@')[0]]
    sendButMessage(from, "Selamat🥳 Jawaban kamu benar!\n\n🎁 + Exp 500\n💰 + Balance ", `©  | `, [{"buttonId": `${prefix}tebakkata`,"buttonText": {"displayText": "Main Lagi"},"type": "RESPONSE"}], {quoted : todd})
    addBalance(sender, 100, balance)
    addLevelingXp(sender, 500)
     fs.writeFileSync("./database/tebakkata.json", JSON.stringify(tebakkata))
    } else {
    replytext("Jawaban Salah!")
    }
    }
    
    // CAKLONTONG
    if (caklontong.hasOwnProperty(sender.split('@')[0]) && !isCmd && !todd.key.fromMe) {
    jawaban = caklontong[sender.split('@')[0]]
    if (budy.toLowerCase() == jawaban) {
    delete caklontong[sender.split('@')[0]]
    sendButMessage(from, "Selamat🥳 Jawaban kamu benar!\n\n🎁 + Exp 500\n💰 + Balance ", `©  | `, [{"buttonId": `${prefix}caklontong`,"buttonText": {"displayText": "Main Lagi"},"type": "RESPONSE"}], {quoted : todd})
    addBalance(sender, 100, balance)
    addLevelingXp(sender, 500)
    fs.writeFileSync("./database/caklontong.json", JSON.stringify(caklontong))
    } else {
     replytext("Jawaban Salah!")
    }
    }
    
//G A M E        
    case 'tebakkata':
          if (isBanned) return reply(mess.ban)
          if (isGame(sender, isOwner, glimit)) return reply(mess.glimit)
          if (tebakkata.hasOwnProperty(sender.split('@')[0])) return reply("Selesein yg sebelumnya dulu atuh")
          datz = fs.readFileSync('./lib/gameasset/tebakkata.json');
          jsonData = JSON.parse(datz);
          randIndex = Math.floor(Math.random() * jsonData.length);
          randKey = jsonData[randIndex];
          somal = (randKey.soal)
          jawaban = randKey.jawaban
          kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
          console.log(color('➳','lime'), color('Jawaban : ','red'), color(jawaban,'yellow'))
          DaniBotz.sendMessage(from, '*+* ```Tebak Kata```\n\n• *Soal* :'+somal+'\n• *Waktu :* 60s', text, { quoted: todd}).then(() => {tebakkata[sender.split('@')[0]] = jawaban.toLowerCase()
          fs.writeFileSync("./lib/game/tebakata.json", JSON.stringify(tebakkata))
          })
          await sleep(60000)
          if (tebakkata.hasOwnProperty(sender.split('@')[0])) {
          console.log(color("Jawaban: " + jawaban))
          titid = "*Jawaban*: " + jawaban
          sendButMessage(from, titid, `Klik Untuk Ke Game Selanjutnya`, [
          {
          buttonId: `${prefix}tebakkata`, buttonText: { displayText: `⬡ NEXT `, }, type: 1, },]);
          delete tebakkata[sender.split('@')[0]]
          fs.writeFileSync("./lib/game/tebakata.json", JSON.stringify(tebakkata))
          }
          await gameAdd(sender, glimit)
          break    

case 'susunkata':{
    if (isGame(sender, isPremium, isOwner, glimit)) return sendButMessage(from, lang.limitg(prefix), `© `, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
                if (susunkata.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada permainan yang sedang berlangsung")
                let anu = await fetchJson(`https://raw.githubusercontent.com/BochilTeam/database/master/games/susunkata.json`)
                let result = anu[Math.floor(Math.random() * anu.length)]
                let jawaban = `${result.jawaban}`
                let tipenya = `${result.tipe}`
                susunkata[sender.split('@')[0]] = jawaban.toLowerCase()
                fs.writeFileSync("./lib/game/susunkata.json", JSON.stringify(susunkata))
                console.log(jawaban)
                tebakya = result.soal
                DaniBotz.sendMessage(from, "Soal : " + tebakya + '\n' +"Tipe : " + tipenya + '\n\n⏰ Timeout : 60.00 seconds\n🎁 + Exp 500\n💰 + Balance ' , text, {quoted: todd})
                await sleep(60000)
                if (susunkata.hasOwnProperty(sender.split('@')[0])) {
                            DaniBotz.sendMessage(from, "⏰ Waktu permainan habis ⏰" + '\n\n' +"*🔥 Jawaban :*"  + '' + '  '+ jawaban +'', text, {quoted: todd}) // ur cods
                            delete susunkata[sender.split('@')[0]]
                    fs.writeFileSync("./lib/game/susunkata.json", JSON.stringify(susunkata))
                }
                await gameAdd(sender, glimit)}
                break  
                
            case 'siapakahaku': case 'siapaaku':{
    if (isGame(sender, isPremium, isOwner, glimit)) return sendButMessage(from, lang.limitg(prefix), `© `, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
                if (siapakahaku.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada permainan yang sedang berlangsung")
                let anu = await fetchJson(`https://raw.githubusercontent.com/BochilTeam/database/master/games/siapakahaku.json`)
                let result = anu[Math.floor(Math.random() * anu.length)]
                let jawaban = `${result.jawaban}`
                siapakahaku[sender.split('@')[0]] = jawaban.toLowerCase()
                fs.writeFileSync("./lib/game/siapakahaku.json", JSON.stringify(siapakahaku))
                console.log(jawaban)
                let tebakya = result.soal
                DaniBotz.sendMessage(from, tebakya + '\n\n⏰ Timeout : 60.00 seconds\n🎁 + Exp 500\n💰 + Balance ' , text, {quoted: todd})
                await sleep(60000)
                if (siapakahaku.hasOwnProperty(sender.split('@')[0])) {
                            DaniBotz.sendMessage(from, "⏰ Waktu permainan habis ⏰" + '\n\n' +"*🔥 Jawaban :*"  + '' + '_'+ jawaban +'_', text, {quoted: todd}) // ur cods
                            delete siapakahaku[sender.split('@')[0]]
                    fs.writeFileSync("./lib/game/siapakahaku.json", JSON.stringify(siapakahaku))
                }
                await gameAdd(sender, glimit)}
                break   
    
case 'caklontong':
      if (isBanned) return reply(mess.ban)
      if (isGame(sender, isOwner, glimit)) return reply(mess.glimit)
      if (caklontong.hasOwnProperty(sender.split('@')[0])) return reply("Selesein yg sebelumnya dulu atuh")
      datz = fs.readFileSync('./lib/game/caklontong.json');
      jsonData = JSON.parse(datz);
      randIndex = Math.floor(Math.random() * jsonData.length);
      randKey = jsonData[randIndex];
      somal = (randKey.soal)
      jawaban = randKey.jawaban
      desnya = randKey.deskripsi
      kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
      console.log(color('➳','lime'), color('Jawaban : ','red'), color(jawaban,'yellow'))
      DaniBotz.sendMessage(from, '*+* ```Cak lontong```\n\n• *Soal* :'+somal+'\n• *Waktu :* 30s', text, { quoted: todd}).then(() => {caklontong[sender.split('@')[0]] = jawaban.toLowerCase()
      fs.writeFileSync("./lib/game/caklontong.json", JSON.stringify(caklontong))
      })
      await sleep(60000)
      if (caklontong.hasOwnProperty(sender.split('@')[0])) {
      console.log(color("Jawaban: " + jawaban))
      titid = `*Jawaban*: \n*Deskripsi* : `
      sendButMessage(from, titid, `Klik Untuk Ke Game Selanjutnya`, [
      {
      buttonId: `${prefix}caklontong`, buttonText: { displayText: `⬡ NEXT `, }, type: 1, },]);
      delete caklontong[sender.split('@')[0]]
      fs.writeFileSync("./lib/game/caklontong.json", JSON.stringify(caklontong))
      }
      await gameAdd(sender, glimit)
      break 
case 'slot':
case 'slots':
    if (isBanned) return reply(mess.ban)
    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
    var somtoy = sotoy[Math.floor(Math.random() * sotoy.length)]
    slom = `[  🎰 | SLOTS GAME ]\n━━━━━━━━━━━━━\n🍋 : 🍌 : 🍍\n${somtoy} <== ||\n🍋 : 🍌 : 🍍\n━━━━━━━━━━━━━\n[  🎰 | SLOTS GAME ]\n\nInfo : Dapatkan 3 buah untuk win\n\nContoh : 🍌 : 🍌 : 🍌<== 👑`
    but = [{ buttonId: `${prefix}slot`, buttonText: { displayText: 'Play Again' }, type: 1 },
    { buttonId: `${prefix}menu`, buttonText: { displayText: 'Back To Menu' }, type: 1 }]
    sendButton(from, slom, 'Slot Game', but)                 
    limitAdd(sender, limit)
    break
//O W N E R M E N U
case 'tts':
if (isBanned) return reply(mess.banned)
if (!q) return reply(`Contoh ${prefix + command} KirTod`)
titidakira = await getBuffer(`${api7}/api/maker/tts?text=${q}&lang=id&apikey=TtiLOZsxnW`)
DaniBotz.sendMessage(from, titidakira, MessageType.audio, {quoted: todd, mimetype: 'audip/mp4', ptt:true})
break
case 'public':
if (isOwner) return reply(mess.only.owner)
if (KirSelfPublic === false) return
uptime = process.uptime()
KirSelfPublic = false
reply(`「 *PUBLIC-MODE* 」`)
break
case 'self':
if (isOwner) return reply(mess.only.owner)
if (KirSelfPublic === true) return
uptime = process.uptime()
KirSelfPublic = true
reply(`「 *SELF-MODE* 」`)
break
case 'tes':
reply(` Bot On Kak Silahkan Ketik ${prefix}menu `)
break
case 'runtime':
fakee(`Aktip Selama ${runtime(process.uptime())}\n\n${wib} *WIB*\n${wit} *WIT*\n${wita} *WITA*`)
break
case 'owner':
if (isBanned) return reply(mess.banned)
members_ids = []
for (let mem of groupMembers) {
members_ids.push(mem.jid)
}
vcard2 = 
'BEGIN:VCARD\n' +
'VERSION:3.0\n' +
'N:Sy;Bot;;;\n' +
`FN:@Dantod\n` +
`item1.TEL;waid=6285742566708:6285742566708\n` +
`item1.X-ABLabel:👑 Creator\n` +
`item2.EMAIL;type=INTERNET: daniyooeees@gmail.com\n` +
`item2.X-ABLabel:📧 Email\n` +
`item3.URL:https://youtube.com/channel/UCXjNhkMF_Mt5utxW_Fit6rw\n` +
`item3.X-ABLabel:⚙️ Youtube Owner\n` +
`item4.ADR:;;🇮🇩 Indonesia;;;;\n` +
`item4.X-ABADR:ac\n` +
`item4.X-ABLabel:🌍 Region\n` +
`item5.X-ABLabel:DanzTeam - Botz Developer\n` +
'END:VCARD'.trim()
DaniBotz.sendMessage(from, {displayName: `Creator Bot`, vcard: vcard2}, contact, 
{ quoted: krtd1, 
})
members_ids = []
for (let mem of groupMembers) {
members_ids.push(mem.jid)
}
vcard2 = 
'BEGIN:VCARD\n' +
'VERSION:3.0\n' +
'N:Sy;Bot;;;\n' +
`FN:Danzz Botz\n` +
`item1.TEL;waid=6285848300025:6285848300025\n` +
`item1.X-ABLabel:👑 Creator\n` +
`item2.EMAIL;type=INTERNET: danzzbotzz@gmail.com\n` +
`item2.X-ABLabel:📧 Email\n` +
`item3.URL:https://youtube.com/channel/UCXjNhkMF_Mt5utxW_Fit6rw\n` +
`item3.X-ABLabel:⚙️ Youtube Bot\n` +
`item4.ADR:;;🇮🇩 Indonesia;;;;\n` +
`item4.X-ABADR:ac\n` +
`item4.X-ABLabel:🌍 Region\n` +
`item5.X-ABLabel:DanzzTeam - Botz Developer\n` +
'END:VCARD'.trim()
DaniBotz.sendMessage(from, {displayName: `DanzzBotz`, vcard: vcard2}, contact, 
{ quoted: krtd1, 
})
button = [
  {buttonId: `${prefix}menu`, buttonText: {displayText: 'MENU'}, type: 1}
]
 buttons = {
    contentText: 'Nih Kak Owner ku ><',
    footerText: `*© ${botName}*`,
    buttons: button,
    headerType: 1
}
await DaniBotz.sendMessage(from, buttons, MessageType.buttonsMessage, {quoted: krtd1})
break
case 'ytowner':
if (isBanned) return reply(mess.banned)
reply(`https://youtube.com/channel/UCXjNhkMF_Mt5utxW_Fit6rw`)
break
case 'gcbot':
if (isBanned) return reply(mess.banned)
reply(`*Masuk Cuy😅☝️*`)
break
case 'ssweb':
case 'sswebfull':
if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply(`url mana broh?\ncontoh : ${prefix + command} https://qa.islam.com`)
reply(mess.wait)
kirlink = args.join(' ')
DaniBotz = await getBuffer(`https://api.lolhuman.xyz/api/${command}?apikey=${lolkey}&url=${kirlink}`)
DaniBotz.sendMessage(from, DaniBotz, image, {quoted: krtd1})
break
case 'sticker': 
case 'stikerer':
case 's':
            if ((isMedia && !todd.message.videoMessage || isQuotedImage) && args.length == 0) {
            var encmedia = isQuotedImage ? JSON.parse(JSON.stringify(todd).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : todd
            var media = await DaniBotz.downloadAndSaveMediaMessage(encmedia)
                ran = '666.webp'
                await ffmpeg(`./${media}`)
                .input(media)
                .on('start', function (cmd) {
                     console.log(`Started : ${cmd}`)
                })
                .on('error', function (err) {
                 console.log(`Error : ${err}`)
                fs.unlinkSync(media)
                reply('error')
                })
                .on('end', function () {
                console.log('Finish')
                DaniBotz.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: todd})
                 fs.unlinkSync(media)
                fs.unlinkSync(ran)
                })
                .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                .toFormat('webp')
                .save(ran)
                } else if ((isMedia && todd.message.videoMessage.seconds < 11 || isQuotedVideo && todd.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
                var encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(todd).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : todd
                var media = await DaniBotz.downloadAndSaveMediaMessage(encmedia)
            ran = '999.webp'
            reply(mess.wait)
            await ffmpeg(`./${media}`)
            .inputFormat(media.split('.')[1])
            .on('start', function (cmd) {
            console.log(`Started : ${cmd}`)
            })
            .on('error', function (err) {
            console.log(`Error : ${err}`)
            fs.unlinkSync(media)
            tipe = media.endsWith('.mp4') ? 'video' : 'gif'
            reply(`Gagal, pada saat mengkonversi ${tipe} ke stikerer`)
            })
            .on('end', function () {
            console.log('Finish')
            DaniBotz.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: todd})
            fs.unlinkSync(media)
            fs.unlinkSync(ran)
                })
                .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                .toFormat('webp')
                .save(ran)
            } else {
                reply(`Kirim gambar dengan caption ${prefix}sticker\nDurasi Sticker Video 1-9 Detik`)
            }
            break
case 'stickermeme': case 'memesticker': case 'memestick': case 'stickmeme': case 'stcmeme': case 'smeme':
if (isBanned) return reply(mess.ban)
if (args.length < 1) return reply(`Kirim perintah *${prefix + command}* lord`)
try {
if (!isQuotedImage) return reply(`Reply Gambar!`)
reply(mess.wait)
var teks2 = args.join(' ')
var enmedia = isQuotedImage ? JSON.parse(JSON.stringify(todd).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : todd
var media = await DaniBotz.downloadMediaMessage(enmedia)
var njay = await uploadImages(media)
var resu = await getBuffer(`https://api.memegen.link/images/custom/-/${teks2}.png?background=${njay}`)
DaniBotz.sendMessage(from, resu, image, {caption:'Nih Kak Tinggal Jadikan Sticker', quoted: todd})
fs.unlinkSync(media)
} catch (e) {
console.log(e)
}
break
case 'toimg':
if (isBanned) return reply(mess.banned)
if (!isQuotedSticker) return reply(' reply stickernya gan')
encmedia = JSON.parse(JSON.stringify(todd).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
media = await DaniBotz.downloadAndSaveMediaMessage(encmedia, './data/media_user')
ran = getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply(' Gagal, pada saat mengkonversi sticker ke gambar ')
buffer = fs.readFileSync(ran)
costum(buffer, image, Verived, `${botName}`)
fs.unlinkSync(ran)
})
break
case 'tourl':
if (isBanned) return reply(mess.banned)
if ((isMedia && !todd.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
reply(mess.wait)
boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(todd).replace('quotedM','m')).message.extendedTextMessage.contextInfo : todd
owgi = await DaniBotz.downloadMediaMessage(boij)
res = await uploadImages(owgi)
reply(res)
} else {
reply('kirim/reply gambar/video')
}
break
case "fast":    
if (isBanned) return reply(mess.ban)        
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if (!isQuotedVideo) return reply("Reply videonya!");
reply(mess.wait);
encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
.message.extendedTextMessage.contextInfo;
media = await danz.downloadAndSaveMediaMessage(encmedia);
ran = getRandom(".mp4");
exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=0.5*PTS[v];[0:a]atempo=2[a]" -map "[v]" -map "[a]" ${ran}`,
(err) => {
fs.unlinkSync(media);
if (err) return fakegroup(`Err: ${err}`);
buffer453 = fs.readFileSync(ran);
danz.sendMessage(from, buffer453, video, {
mimetype: "video/mp4",
quoted: mek,
});
fs.unlinkSync(ran);
limitAdd(sender, limit)
}
);
break;
case "slow":            
if (isBanned) return reply(mess.ban)
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if (!isQuotedVideo) return reply("Reply videonya!");
reply(mess.wait);
encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
.message.extendedTextMessage.contextInfo;
media = await danz.downloadAndSaveMediaMessage(encmedia);
ran = getRandom(".mp4");
exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=2*PTS[v];[0:a]atempo=0.5[a]" -map "[v]" -map "[a]" ${ran}`,
(err) => {
fs.unlinkSync(media);
if (err) return fakegroup(`Err: ${err}`);
buffer453 = fs.readFileSync(ran);
danz.sendMessage(from, buffer453, video, {
mimetype: "video/mp4",
quoted: mek,
});
fs.unlinkSync(ran);
limitAdd(sender, limit)
}
);
break;
case "reverse":            
if (isBanned) return reply(mess.ban)
if (!isQuotedVideo) return reply("Reply videonya!");
encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
.message.extendedTextMessage.contextInfo;
media = await danz.downloadAndSaveMediaMessage(encmedia);
ran = getRandom(".mp4");
exec(`ffmpeg -i ${media} -vf reverse -af areverse ${ran}`, (err) => {
fs.unlinkSync(media);
if (err) return fakegroup(`Err: ${err}`);
buffer453 = fs.readFileSync(ran);
danz.sendMessage(from, buffer453, video, {
mimetype: "video/mp4",
quoted: mek,
});
fs.unlinkSync(ran);
limitAdd(sender, limit)
});
break;      
case 'bass':             
if (isBanned) return reply(mess.ban)
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if (!isQuotedAudio) return reply('Reply Audionya')
   encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await danz.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
danz.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
limitAdd(sender, limit)
})
break
case 'nightcore':            
if (isBanned) return reply(mess.ban)
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
  if (!isQuotedAudio) return reply('Reply Audionya')
night = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
core = await danz.downloadAndSaveMediaMessage(night)
ran = getRandom('.mp3')
reply(mess.wait)
exec(`ffmpeg -i ${core} -filter:a atempo=1.06,asetrate=44100*1.25 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(core)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
danz.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:false, quoted: mek, ptt: true})
fs.unlinkSync(ran)
limitAdd(sender, limit)
})
break
case 'gemuk':            
if (isBanned) return reply(mess.ban)
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if (!isQuotedAudio) return reply('Reply Audionya')
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await danz.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
danz.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
limitAdd(sender, limit)
 })
break
case 'darkjokes':
case 'darkjoke':
if (isBanned) return reply(mess.banned)
reply(mess.wait)
data = fs.readFileSync('./lib/darkjokes.js')
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length)
randKey = jsonData[randIndex];
hasil = await getBuffer(randKey.result)
DaniBotz.sendMessage(from, hasil, image, {quoted: todd, caption: '*GELAP BOS :V*'})
break
case 'ttp':
case 'ttp2':
case 'ttp3':
case 'ttp4':
case 'attp':
if (args.length == 0) return reply(`Example: ${prefix + command} LoL Human`)
 ini_txt = args.join(" ")
ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/${command}?apikey=${lolkey}&text=${ini_txt}`)
await DaniBotz.sendMessage(from, ini_buffer, sticker, { quoted: krtd1 })
break
case 'antilink':
if (isBanned) return reply(mess.banned)
if (!isGroup) return reply(`Khusus Group Kak`)
if (!todd.key.fromMe && !isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(`Bot Harus jadi Admin`)
if (!q) return reply(`Buat Nyalain : ${prefix + command} enable\nBuat Matiin : ${prefix + command} disable`)
if (args[0].toLowerCase() === 'enable'){
if (isAntiLink) return reply(`Udah aktif`)
antilink.push(from)
fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
reply('*「 ANTILINK DI AKTIFKAN 」*\n\nYang Ngirim Link Bakal Ke Kick!')
} else if (args[0].toLowerCase() === 'disable'){
var anu = antilink.indexOf(from)
antilink.splice(anu, 1)
fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
reply('*「 ANTILINK DI NONAKTIFKAN 」*')
} else {
reply(`Pilih enable atau disable`)
}
break
case 'welkom':
if (isBanned) return reply(mess.banned)
if (!isGroup) return reply(`Khusus Group Kak`)
if (!isBotGroupAdmins) return reply(`Bot Harus jadi Admin`)
if (!isOwner && !isGroupAdmins) return reply(mess.only.admin)
if (args.length < 1) return reply(`Buat Nyalain : ${prefix + command} enable\nBuat Matiin : ${prefix + command} disable`)
if ((args[0]) === 'on') {
if (isWelkom) return reply('Udah aktif')
welkom.push(from)
fs.writeFileSync('./database/welcome.json', JSON.stringify(welkom))
reply('Sukses mengaktifkan fitur welcome di group ini ✔️')
} else if ((args[0]) === 'off') {
welkom.splice(from, 1)
fs.writeFileSync('./database/welcome.json', JSON.stringify(welkom))
reply('Sukses menonaktifkan fitur welcome di group ini ✔️')
} else {
reply('Enable untuk mengaktifkan, disable untuk menonaktifkan')
}
break
case 'join':
case 'joingc':
if (isOwner) return reply(mess.only.owner)
if (args.length < 1) return reply(`Link Nya Mana???`)
if (!isUrl(args[0]) && !args[0].includes('https://chat.whatsapp.com/')) return reply('Link Invalid Silahkan Cek Kembali')
reply('Tunggu Sebentar..')
link = args[0].replace('https://chat.whatsapp.com/','')
fak = DaniBotz.query({ json: ['action', 'invite', link],
expect200: true })
reply('Berhasil Masuk Grup')
break		
case 'term':
if (isPremium) return reply(`Khusus Owner Kak\nBtw Lu Siapa Owner Bukan???`)
if (!q) return reply(`Penggunaan ${prefix+command} ls`)
exec(q, (err, stdout) => {
if (err) return reply(`${err}`)
if (stdout) {
reply(stdout)
}
})
break 
case 'bc':
if (isOwner) return reply(mess.only.owner)
if (args.length < 1) return reply('teks?')
anu = await DaniBotz.chats.all()
if (isMedia && !todd.message.videoMessage || isQuotedImage) {
var encmedia = isQuotedImage ? JSON.parse(JSON.stringify(todd).replace('quotedM','m')).message.extendedTextMessage.contextInfo : todd
bc = await DaniBotz.downloadMediaMessage(encmedia)
for (let _ of anu) {
tes = `${body.slice(4)}`
DaniBotz.sendMessage(_.jid, bc, { contentText: `⌜ ⚝ BROADCAST ⚝ ⌟\n\n⌦ : ${tes}`, 
footerText: `_REGARDS : Rintis ID_`, 
buttons: 
[
{buttonId: `${prefix}menu`,buttonText:{displayText: 'MENU'},type:1}
],
headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: danzfoto, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
}
reply('Suksess broadcast')
} else {
for (let _ of anu) {
textt = `${body.slice(4)}`
DaniBotz.sendMessage(_.jid, { contentText: `⌜ ⚝ BROADCAST ⚝ ⌟\n\n⌦ : ${textt}`, 
footerText: `_REGARDS : Rintis ID_`, 
buttons: 
[
{buttonId: `${prefix}menu`,buttonText:{displayText: 'MENU'},type:1}
],
headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: danzfoto, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
}
reply('Suksess broadcast')
}
break
case 'bcg':
if (isOwner) return reply(mess.only.owner)
if (args.length < 1) return reply('teks?')
var anu = await DaniBotz.chats.all().filter(v => v.jid.endsWith('g.us'))
if (isMedia && !todd.message.videoMessage || isQuotedImage) {
var encmedia = isQuotedImage ? JSON.parse(JSON.stringify(todd).replace('quotedM','m')).message.extendedTextMessage.contextInfo : todd
bc = await DaniBotz.downloadMediaMessage(encmedia)
for (let _ of anu) {
tes = `${body.slice(4)}`
DaniBotz.sendMessage(_.jid, bc, { contentText: `⌜ ⚝ BROADCAST GROUP ⚝ ⌟\n\n⌦ : ${tes}`, 
footerText: `_REGARDS : Rintis ID_`, 
buttons: 
[
{buttonId: `${prefix}menu`,buttonText:{displayText: 'MENU'},type:1}
],
headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: danzfoto, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
}
reply('Suksess broadcast')
} else {
for (let _ of anu) {
textt = `${body.slice(4)}`
DaniBotz.sendMessage(_.jid, { contentText: `⌜ ⚝ BROADCAST GROUP ⚝ ⌟\n\n⌦ : ${textt}`, 
footerText: `_REGARDS : Rintis ID_`, 
buttons: 
[
{buttonId: `${prefix}menu`,buttonText:{displayText: 'MENU'},type:1}
],
headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: danzfoto, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
}
reply('Suksess broadcast')
}
break
case 'setnamabot':
if (isOwner) return reply(mess.only.owner)
if (args.length < 1) return reply('Teksnya?')
anu = body.slice(11)
DaniBotz.updateProfileName(anu)
reply(`Sukses Mengganti Nama Bot Menjadi ${body.slice(11)}`)
break
case 'setppbot':
if (isOwner) return reply(mess.only.owner)
if (!isQuotedImage) return reply(`Kirim gambar dengan caption ${prefix}setppbot atau tag gambar yang sudah dikirim`)
var encmedia = isQuotedImage ? JSON.parse(JSON.stringify(todd).replace('quotedM','m')).message.extendedTextMessage.contextInfo : todd
media = await DaniBotz.downloadAndSaveMediaMessage(encmedia, './media')
await DaniBotz.updateProfilePicture(botNumber, media)
reply('Makasih Foto BaruNya')
break
case 'setbioo':
if (isOwner) return reply(mess.only.owner)
if (args.length < 1) return reply('Teksnya?')
iyek = body.slice(8)
DaniBotz.setStatus(`${iyek}`)
reply(`Sukses Mengganti Bio Menjadi ${body.slice(8)}`)
break
case 'leave':
if (!isGroup) return reply(`Khusus Group Kak`)
if (isPremium) return reply(mess.only.owner)
{
DaniBotz.groupLeave(from)
}
break
case 'ban':
if (isOwner) return reply(mess.only.owner)
bnnd = `${args[0].replace('@', '')}@s.whatsapp.net`
ban.push(bnnd)
fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
reply(`Nomor ${bnnd} Telah Di Ban!`)
break
case 'unban':
if (isOwner) return reply(mess.only.owner)
ya = `${args[0].replace('@', '')}@s.whatsapp.net`
unb = ban.indexOf(ya)
ban.splice(unb, 1)
fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
reply(`Nomor ${ya} Telah Di UnBan!`)
break
case 'addprem':
if (isOwner) return reply(mess.only.owner)
bnnd = `${args[0].replace('@', '')}@s.whatsapp.net`
prem.push(bnnd)
fs.writeFileSync('./database/premium.json', JSON.stringify(prem))
reply(`Nomor ${bnnd} Telah Menjadi Premium!`)
break
case 'delprem':
if (isOwner) return reply(mess.only.owner)
ya = `${args[0].replace('@', '')}@s.whatsapp.net`
unp = prem.indexOf(ya)
prem.splice(unp, 1)
fs.writeFileSync('./database/premium.json', JSON.stringify(prem))
reply(`Nomor ${ya} Telah Di Hapus Premium!`)
break
case 'listpremium':
if (isBanned) return reply(mess.banned)
teks = '*List Premium*\n\n'
for (let DaniBotz of prem) {
teks += `- ${DaniBotz}\n`
}
teks += `\n*Total : ${prem.length}*`
DaniBotz.sendMessage(from, teks.trim(), extendedText, { quoted: krtd1, contextInfo: { "mentionedJid": prem } })
break
case 'ergvergvergver':
case 'rgveg4ver6hb6':
DaniBotz.sendMessage(from, 
{"contentText": `${bio}`,
footerText: `PAYMENT

*GOPAY* : *085380779466*
*DANA* : *085380779466*`,
"buttons": [
{buttonId: `${prefix}owner`, buttonText: {displayText: 'KIRIM SS BUKTI'}, type: 1}
],
            "headerType": "DOCUMENT", "documentMessage": {
            "url": "https://mmg.whatsapp.net/d/f/Ano5cGYOFQnC51uJaqGBWiCrSJH1aDCi8-YPQMMb1N1y.enc",
            "mimetype": `application/${appl}`,
            "title": `${botName}`,
            "fileSha256": "8Xfe3NQDhjwVjR54tkkShLDGrIFKR9QT5EsthPyxDCI=",
            "fileLength": "999999999999",
            "pageCount": 999,
            "mediaKey": "XWv4hcnpGY51qEVSO9+e+q6LYqPR3DbtT4iqS9yKhkI=",
            "fileName": "𝕶𝖎𝖗𝕭𝖔𝖙𝖟ꪶ𖣂ꫂ",
            "fileEncSha256": "NI9ykWUcXKquea4BmH7GgzhMb3pAeqqwE+MTFbH/Wk8=",
            "directPath": "/v/t62.7119-24/35160407_568282564396101_3119299043264875885_n.enc?ccb=11-4&oh=d43befa9a76b69d757877c3d430a0752&oe=61915CEC",
            "mediaKeyTimestamp": "1634472176",
            "jpegThumbnail": fs.readFileSync(`./media/payment.jpg`)
}}, 
MessageType.buttonsMessage,
{ quoted: krtd1,thumbnail: fs.readFileSync(`./media/payment.jpg`), 
contextInfo: {mentionedJid: [sender]}})
break
///F U N  M E N U U
case 'autosticker':
case 'autostikerer':
case 'autos':
if (!isGroup) return reply(`Khusus Group Kak`)
if (!todd.key.fromMe && !isGroupAdmins) return reply(mess.only.admin)
if (args.length < 1) return reply('Mengaktifkan tekan 1, Menonaktif tekan 0')
if (args[0] === '1') {
if (isAuto) return reply('*Fitur AutoSticker sudah aktif sebelum nya*')
autosticker.push(from)
fs.writeFileSync('./database/autosticker.json', JSON.stringify(autosticker))
reply(`Berhasil Di Aktipkan`)
} else if (args[0] === '0') {
autosticker.splice(from, 1)
fs.writeFileSync('./database/autosticker.json', JSON.stringify(autosticker))
reply(`Berhasil Di Nonaktifkan`)
} else {
reply(`Mengaktifkan tekan 1, Menonaktif tekan 0`)
}
break
//////////////
case 'suit': 
if (!isGroup) return reply('Khusus Group')
but = [
{ buttonId: `${prefix}suitbot batu`, buttonText: { displayText: '✊BATU✊' }, type: 1 },
{ buttonId: `${prefix}suitbot gunting`, buttonText: { displayText: '✌️GUNTING✌️' }, type: 1 },
{ buttonId: `${prefix}suitbot kertas`, buttonText: { displayText: '✋KERTAS✋' }, type: 1 }
]
sendButton(from, `Silahkan Pilih Kak ${pushname}`, fake, but)
break
case 'suitbot':
if (!isGroup) return reply('Khusus Group')
if (args[0] === 'gunting' ) {
gunting = [
'Kamu *Gunting*\nBot *Kertas*\nKamu Menang 😔',
'Kamu *Gunting*\nBot *Batu*\nKamu Kalah 😆',
'Kamu *Gunting*\nBot *Gunting*\nKita Seri 😏'
]
gun = gunting[Math.floor(Math.random() * gunting.length)]
reply(gun)
} else if (args[0] === 'kertas') {
ker = [
'Kamu *Kertas*\nBot *Batu*\nKamu Menang 😔',
'Kamu *Kertas*\nBot *Gunting*\nKamu Kalah 🙂',
'Kamu *Kertas*\nBot *Kertas*\nKita Seri 😏'
]
kertas = ker[Math.floor(Math.random() * ker.length)]
reply(kertas)
} else if (args[0] === 'batu') {
bat = [
'Kamu *Batu*\nBot *Gunting*\nKamu Menang 😔',
'Kamu *Batu*\nBot *Kertas*\nKamu Kalah 🙂',
'Kamu *Batu*\nBot *Batu*\nKita Seri 😏'
]
batu = bat[Math.floor(Math.random() * bat.length)]
reply(batu)
} else {
reply('Pilih Gunting/Batu/Kertas')
}
break
case 'bisakah':
if (!isGroup) return reply('Khusus Group')
if (args.length < 1) return replytext(`Contoh : ${prefix}bisakah aku terbang`)
naon = ['Iya','Tidak','Mungkin']
random = naon[Math.floor(Math.random() * (naon.length))]
tt = `Jawaban : ${random}`
replytext(tt)
break
case 'kapankah':
if (!isGroup) return reply('Khusus Group')
if (args.length < 1) return replytext(`Contoh : ${prefix}kapankah aku menikah`)
no = `${Math.floor(Math.random() * 100)}`
naon = ['Jam lagi','Hari lagi','Minggu lagi','Bulan lagi','Tahun lagi']
random = naon[Math.floor(Math.random() * (naon.length))]
kapan = `Jawaban : ${no} ${random}`
replytext(kapan)
break      	   
case 'rate':
if (!isGroup) return reply('Khusus Group')
if (args.length < 1) return replytext(`Contoh : ${prefix}rate aku ganteng`)
random = `${Math.floor(Math.random() * 100)}`
rating = `Persentase : ${random}%`
replytext(rating)
break
case 'apakah':
if (!isGroup) return reply('Khusus Group')
if (args.length < 1) return replytext(`Contoh : ${prefix}apakah aku jelek`)
naon = ['Iya','Tidak','Mungkin']
random = naon[Math.floor(Math.random() * (naon.length))]
tz = `Jawaban = ${random}`
replytext(tz)
break
case 'jadian':
if (!isGroup) return reply('Khusus Group')
jds = []
jdii = groupMembers
koss = groupMembers
akuu = jdii[Math.floor(Math.random() * jdii.length)]
diaa = koss[Math.floor(Math.random() * koss.length)]
teks = `Ciee.. Yang Lagi Jadian @${akuu.jid.split('@')[0]}  >♥<️ @${diaa.jid.split('@')[0]} `
jds.push(akuu.jid)
jds.push(diaa.jid)
mentions(teks, jds, true)
break
case 'cantikcek':
case 'gantengcek':
case 'jelekcek':
case 'goblokcek':  
case 'begocek': 
case 'pintarcek': 
case 'jagocek': 
case 'nolepcek': 
case 'monyetcek':     	 
case 'babicek': 
case 'bebancek': 
case 'baikcek': 
case 'jahatcek': 
case 'anjingcek': 
case 'haramcek': 
case 'kontolcek': 
case 'pakboycek': 
case 'pakgirlcek': 
case 'wibucek': 
case 'hebatcek': 
case 'sadboycek': 
case 'sadgirlcek':
if (!isGroup) return reply('Khusus Group')
if (args.length < 1) return replytext(`Contoh : ${prefix+command} Namamu`) 
random = `${Math.floor(Math.random() * 100)}`
cek = `Persentase : ${random}%`
DaniBotz.sendMessage(from, cek, text, {quoted: krtd1})
break

default:
if (isMedia && isAuto && !todd.message.videoMessage || isQuotedImage) {
var encmedia = isQuotedImage ? JSON.parse(JSON.stringify(todd).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : todd
var media = await DaniBotz.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.webp')
await ffmpeg(`${media}`)
.input(media)
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
reply(dla.stikerga())
})
.on('end', function () {
console.log('Finish')
buffer = fs.readFileSync(ran)
DaniBotz.sendMessage(from, buffer, sticker, { quoted: todd})
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
}

if (budy.startsWith('>')){
console.log('Eval Owner>_<', 'green')
if (isPremium) return reply(`Khusus Owner`)
try {
return DaniBotz.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted:krtd1})
} catch(err) {
e = String(err)
reply(e)
}
}	
				
}
}
catch 
(e)
{
e = String(e)
if (!e.includes("this.isZero") && !e.includes("jid")) {
console.log('ERROR : %s', color(e, 'magenta'))
}
}
}
