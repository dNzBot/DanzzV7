var {
	MessageType
} = require('@adiwajshing/baileys');
var fs = require('fs-extra')
var { color, bgcolor } = require('../lib/color')
var { getGroupAdmins, getBuffer } = require('../lib/functions')

module.exports = welcome = async (dhani, anu) => {
	    var welkom = JSON.parse(fs.readFileSync('./database/welcome.json'))
	    var isWelcome = welkom.includes(anu.jid)
	    if (!isWelcome) return
		try {
			    groupMet = await dhani.groupMetadata(anu.jid)
                groupMembers = groupMet.participants
                groupAdmins = getGroupAdmins(groupMembers)
			    mem = anu.participants[0]
			    console.log(anu)
                try {
               pic = await dhani.getProfilePicture(mem)
                } catch (e) {
                pic = 'https://telegra.ph/file/3311a0df260165a4eb953.jpg'
            }
            try {
                pp_grup = await dhani.getProfilePicture(anu.jid)
                } catch (e) {
                pp_grup = 'https://telegra.ph/file/3311a0df260165a4eb953.jpg'
             }
            if (anu.action == 'add' && mem.includes(dhani.user.jid)) {
            dhani.sendMessage(anu.jid, 'Halo! Terima Kasih sudah Mengundangku, Jika ingin Menggunakan Bot, Tolong Jadikan Admin Ya, Ketik .menu', 'conversation')
            }
             if (anu.action == 'add' && !mem.includes(dhani.user.jid)) {
             if (!welkom.includes(anu.jid)) return
                mdata = await dhani.groupMetadata(anu.jid)
                memeg = mdata.participants.length
            	num = anu.participants[0]
               groupName = mdata.subject
                let v = dhani.contacts[num] || { notify: num.replace(/@.+/, '') }
                anu_user = v.vname || v.notify || num.split('@')[0]
              teks = `WELCOME KAK *@${mem.split('@')[0]}*
◧ INTRO DULU
*□* ɴᴀᴍᴀ :
*□* ᴜᴍᴜʀ :
*□* ʜᴏʙʙʏ :
*□* ɢᴇɴᴅᴇʀ :
*□* ᴀꜱᴀʟ ᴋᴏᴛᴀ :
*jangan lupa buat baca rulesnya ya kak*
⌬━━━━━━━━━━━⌬`
              buff = await getBuffer(pic)
               dhani.sendMessage(mdata.id, { contentText: `${teks}`, footerText: `ᴡᴇʟᴄᴏᴍᴇ ᴛᴏ *${groupName}*`, buttons: [{buttonId: `.selamatdatang`,buttonText:{displayText: 'WELCOME KAK👋'},type:1}],headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: buff, contextInfo: {"mentionedJid": [num]}}}, 'buttonsMessage')
		}
            if (anu.action == 'remove' && !mem.includes(dhani.user.jid)) {
            if (!welkom.includes(anu.jid)) return
                mdata = await dhani.groupMetadata(anu.jid)
            	num = anu.participants[0]
                let w = dhani.contacts[num] || { notify: num.replace(/@.+/, '') }
                anu_user = w.vname || w.notify || num.split('@')[0]
                memeg = mdata.participants.length
                groupName = mdata.subject
                out = `ꜱᴇʟᴀᴍᴀᴛ ᴛɪɴɢɢᴀʟ ᴋᴀᴡᴀɴ @${num.split('@')[0]}`
               buff = await getBuffer(pic)
               dhani.sendMessage(mdata.id, { contentText: `${out}`, footerText: `ᴛᴇʟᴀʜ ᴍᴇɴɪɴɢɢᴀʟᴋᴀɴ ɢʀᴏᴜᴘ *${groupName}*`, buttons: [{buttonId: `.bay`,buttonText:{displayText: 'BYE KAK👋'},type:1}],headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: buff, contextInfo: {"mentionedJid": [num]}}}, 'buttonsMessage')
            }
		} catch (e) {
			console.log('Error : %s', color(e, 'pink'))
		}
	}
