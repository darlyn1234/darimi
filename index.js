 /*
* Aja pues
* © 2021 Darlyn, INC.
*/

const {
    WAConnection,
    MessageType,
    Presence,
    Mimetype,
    rugaapi,
    GroupSettingChange
} = require('@adiwajshing/baileys')

/******COMIENZO DE LA ENTRADA DEL ARCHIVO******/
const { color, bgcolor } = require('./lib/color')
const { bahasa } = require('./src/bahasa')
const { negara } = require('./src/kodenegara')
const { virtex } = require('./src/virtex')
const { wait, pegatinas, musica, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { fetchJson } = require('./lib/fetcher')
const { recognize } = require('./lib/ocr')
/******FIN DE ENTRADA DE ARCHIVO******/

/******COMIENZO DE LA ENTRADA DEL PAQUETE NPM******/
const fs = require('fs')
const moment = require('moment-timezone')
const { exec } = require('child_process')
const kagApi = require('@kagchi/kag-api')
const axios = require("axios")
const fetch = require('node-fetch')
/*const tiktod = require('tiktok-scraper')*/
const ffmpeg = require('fluent-ffmpeg')
const { removeBackgroundFromImageFile } = require('remove.bg')
/*const imgbb = require('imgbb-uploader')*/
const lolis = require('lolis.life')
const loli = new lolis()
const speed = require('performance-now')
/******FIN DE ENTRADA DEL PAQUETE NPM******/

/******COMIENZO DE LA ENTRADA JSON******/
const welkom = JSON.parse(fs.readFileSync('./database/json/welkom.json'))
const nsfw = JSON.parse(fs.readFileSync('./database/json/nsfw.json'))
const ban = JSON.parse(fs.readFileSync('./database/banned.json'))
const setting = JSON.parse(fs.readFileSync('./src/settings.json'))
const samih = JSON.parse(fs.readFileSync('./database/json/simi.json'))
const user = JSON.parse(fs.readFileSync('./database/json/user.json'))
const _leveling = JSON.parse(fs.readFileSync('./database/json/leveling.json'))
const _level = JSON.parse(fs.readFileSync('./database/json/level.json'))
/******FIN DE//////////////// BY DARLYN PRO????? 
confukey = 'ConfuMods'
alphakey = 'offline' 
///////////////////////////

/******INICIO DE LA ENTRADA DEL MENÚ******/
const { help } = require('./src/help')
const { logomaker } = require('./database/menu/logomaker')
const { toinmenu } = require('./src/toinmenu')
const { menuadmin } = require('./src/menuadmin')
const { nsfwmenu } = require('./src/nsfwmenu')
const { desmenu } = require('./src/desmenu')
const { version } = require('./src/version')
const { juegos } = require('./src/juegos')
const { shantera } = require('./src/shantera')
const { antimenu } = require('./src/antimenu')
const { welmenu } = require('./src/welmenu')
const { banmenu } = require('./src/banmenu')
const { otak } = require('./src/otak')
const { levelmenu } = require('./src/levelmenu')
const { reto } = require('./src/reto')
const { verdad } = require('./src/verdad')
/******FIN DE ENTRADA DEL MENÚ******/

/******CARGA DE ENTRADA VCARD******/
const vcard = 'BEGIN:VCARD\n' // Tarjeta de contacto
            + 'VERSION:3.0\n' 
            + 'FN:८ 📺 🍂≛ 𝖽𐐼𝗋𝗹yᥒ 𔐬 ☆\n' // Nombre
            + 'ORG:Darlyn;\n' // Propietario
            + 'TEL;type=CELL;type=VOICE;waid=51918303426:+51 918 303 426\n' // ID de WhatsApp + número de teléfono
            + 'END:VCARD'
/******FIN DE ENTRADA VCARD******/

prefix = '/'
blocked = []
banChats = false

/******CONFIGURACION DE CARGA******/
const settingan = JSON.parse(fs.readFileSync('./admin/set.json'))
const {
	author,
	pack
} = settingan

/******INICIO DE FUNCIONES ENTRADA******/

/******ARCHIVOS ANTILINK POR SHANDUY******/

const antilink = JSON.parse(fs.readFileSync('./src/antilink.json'))
const antiface = JSON.parse(fs.readFileSync('./src/antiface.json'))
const antitik = JSON.parse(fs.readFileSync('./src/antitik.json'))
const antinsta = JSON.parse(fs.readFileSync('./src/antinsta.json'))
const antikwai = JSON.parse(fs.readFileSync('./src/antikwai.json'))
const antiwa = JSON.parse(fs.readFileSync('./src/antiwa.json'))
const antidiscord = JSON.parse(fs.readFileSync('./src/antidiscord.json'))

/******FIN DE ARCHIVOS ANTILINK POR SHANDUY******/


//LEVEL INICIO
const getLevelingXp = (userId) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].xp
            }
        }

        const getLevelingLevel = (userId) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].level
            }
        }

        const getLevelingId = (userId) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].jid
            }
        }

        const addLevelingXp = (userId, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].xp += amount
                fs.writeFileSync('./database/json/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingLevel = (userId, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].level += amount
                fs.writeFileSync('./database/json/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingId = (userId) => {
            const obj = {jid: userId, xp: 1, level: 1}
            _level.push(obj)
            fs.writeFileSync('./database/json/level.json', JSON.stringify(_level))
        }
//LEVEL FIN
	
function addMetadata(packname, author) {	
	if (!packname) packname = 'ShanBot'; if (!author) author = 'shanduy';	
	author = author.replace(/[^a-zA-Z0-9]/g, '');	
	let name = `${author}_${packname}`
	if (fs.existsSync(`./${name}.exif`)) return `./${name}.exif`
	const json = {	
		"sticker-pack-name": packname,
		"sticker-pack-publisher": author,
	}
	const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	
	const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]	

	let len = JSON.stringify(json).length	
	let last	

	if (len > 256) {	
		len = len - 256	
		bytes.unshift(0x01)	
	} else {	
		bytes.unshift(0x00)	
	}	

	if (len < 16) {	
		last = len.toString(16)	
		last = "0" + len	
	} else {	
		last = len.toString(16)	
	}	

	const buf2 = Buffer.from(last, "hex")	
	const buf3 = Buffer.from(bytes)	
	const buf4 = Buffer.from(JSON.stringify(json))	


	const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])	

	fs.writeFile(`./${name}.exif`, buffer, (err) => {	
		return `./${name}.exif`	
	})	

}
function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
  return `${pad(hours)} Horas ${pad(minutes)} Minutos ${pad(seconds)} Segundos`
}

async function starts() {
	const client = new WAConnection()
	client.version = [3, 3234, 9]
        client.logger.level = 'warn'
	console.log(banner.string)
	client.on('qr', () => {
		console.log(color('[','white'), color('!','red'), color(']','white'), color('Escanea el codigo QR rapido!!!'))
	})

	fs.existsSync('./Nazwa.json') && client.loadAuthInfo('./Nazwa.json')
	client.on('connecting', () => {
		start('2', 'Estas desconectado gil')
	})
	client.on('open', () => {
		success('2', 'Conectado by Darlyn')
	})
	await client.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./Nazwa.json', JSON.stringify(client.base64EncodedAuthInfo(), null, '\t'))

	client.on('group-participants-update', async (anu) => {
		if (!welkom.includes(anu.jid)) return
		try {
			const mdata = await client.groupMetadata(anu.jid)
			console.log(anu)
			if (anu.action == 'add') {
				num = anu.participants[0]
				try {
					ppimg = await client.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://telegra.ph/file/06c7ccabfa5c5cd350612.jpg'
				}
				
				teks = ` ┌──┨ ☠ Dar-Bot☠┠──\n`
				teks += `▢ ${mdata.subject}\n`
				teks += `▢ BIENVENIDO(A)\n`
				teks += `▢ @${num.split('@')[0]}\n`
				teks += `▢ Presentate Con:\n`
				teks += `▢Foto ▢Nombre ▢Edad ▢País\n`
				teks += `▢ Respeta las reglas\n`
				teks += `└──┨ ☠️Darlyn☠️ ┠──\n`
				  let buff = await getBuffer(ppimg)
			client.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			} else if (anu.action == 'remove') {
				num = anu.participants[0]
				try {
					ppimg = await client.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://telegra.ph/file/06c7ccabfa5c5cd350612.jpg'
				}
				teks = `Se fue...en que estabamos? @${num.split('@')[0]}`
				 let buff = await getBuffer(ppimg)
			client.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			} else if (anu.action == 'promote') {
				num = anu.participants[0]
				try {
					ppimg = await client.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://telegra.ph/file/06c7ccabfa5c5cd350612.jpg'
				}
				teks = `≡ *NUEVO ADMIN*
                                ┌───┨ ☠Dar-Bot☠ ┠────
                                ▢ *Nombre* : @${num.split('@')[0]}
                                ▢ *Número* : ${num.replace('@s.whatsapp.net', '')}
                                ▢ *Mensaje* : Felicidades  Admin.
                                └────┨ ☠️Dar☠️ ┠────`
				let buff = await getBuffer(ppimg)
				client.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
				} else if (anu.action == 'demote') {
				num = anu.participants[0]
				try {
					ppimg = await client.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://telegra.ph/file/06c7ccabfa5c5cd350612.jpg'
				}
				teks = `≡ *ADMIN DEGRADADO*
                                ┌───┨ ☠𝖙Dar-Bot☠ ┠────
                                ▢ *Nombre* : @${num.split('@')[0]}
                                ▢ *Número* : ${num.replace('@s.whatsapp.net', '')}
                                ▢ *Mensaje* : Lo siento
                                └────┨ ☠️Dar☠️ ┠────`
				let buff = await getBuffer(ppimg)
				client.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})	
			}
		} catch (e) {
			console.log('Error: %s', color(e, 'red'))
		}
	})

		client.on('CB:Blocklist', json => {
            if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	})

		client.on('CB:Blocklist', json => {
            if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	})

	client.on('chat-update', async (mek) => {
		try {
                        if (!mek.hasNewMessage) return
                        mek = JSON.parse(JSON.stringify(mek)).messages[0]
			if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
			if (mek.key.fromMe) return
			global.prefix
			global.blocked
			const content = JSON.stringify(mek.message)
			const apikey = setting.apikey
			const from = mek.key.remoteJid
			const type = Object.keys(mek.message)[0]
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const time = moment.tz('America/Guayaquil').format('HH:mm:ss')
			const date = moment.tz('America/Guayaquil').format('DD/MM/YY')
			body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
			const args = body.trim().split(/ +/).slice(1)
			let authorname = client.contacts[from] != undefined ? client.contacts[from].vname || client.contacts[from].notify : undefined
			const isCmd = body.startsWith(prefix)

			mess = {
				wait: 'Por favor no hacer spam',
				success: 'Listo',
                                levelon: '*Level activado*',
				leveloff: '*Level desactivado*',
				foto: 'Estoy cambiando la foto del grupo',
				unir: 'Estoy tratando de unirlo\n\n*Recuerda, si no lo uno es por que el usuario tiene bloqueado la funcion para unirlo a grupos*',
                                levelnoton: '*Level no esta activado*',
				levelnol: '*Nivel* 0 ',
				error: {
					stick: 'Falló, se produjo un error al convertir la imagen en una pegatina',
					yt: 'Falló en el link o se produjo un error al momento de descargar el video',
					unire: 'Por favor, no coloques (+) solo pon el numero con el codigo de area de su pais\n\nEjemplo: *unir 52xxxxxxxxx',
					Iv: 'Este no es un link de youtube'
					},
				only: {
					group: 'Este comando es solo para grupos',
					ownerG: 'Este comando solo puede ser utilizado por un admins del grupo',
					ownerB: 'Este comando solo lo usa ८ 📺 🍂≛ 𝖽𐐼𝗋𝗹yᥒ 𔐬 ☆',
					admin: 'Este comando solo puede ser utilizado por administradores del grupo',
					Badmin: 'Este comando solo se puede usar cuando el bot se convierte en administrador',
                                        pegatina: 'Estoy haciendo tu sticker, los stickersgif son de 6 segundos',
					attp: 'Estoy haciendo tu texto a sticker',
					imgs: 'Convirtiendo tu Sticker a Imagen',
					mpcancion: 'Convirtiendo de MP4 a MP3',
					mpa: 'Estoy descargando tu cancion',
                                        mpv: 'Estoy descargando tu video',
					insta: 'Estoy descargando tu post',
					musica: 'Estoy bucando tu canción\n\n*Recuerda colocar bien el nombre de la cancion',
					musica2: 'Estoy bucando tu canción\n\n*Recuerda colocar bien el nombre de la cancion',
					daftarB: '「NO ESTAS REGISTRADO」\n\nPara usar los comandos primero Registrate \n\n┌─⊷ *REGISTRO* ⊶\n▢ Escribe  /daftar y tu nombre \n▢ Ejemplo: /daftar Darlyn\n└─────────────',
				}
			}
    			const apakah = ['Si','No']
                        const kapankah = ['Otro día','Otra semana','Otro mes','Otro año']
			const botNumber = client.user.jid
			const ownerNumber = ["51918303426@s.whatsapp.net"] // replace this with your number
			const nomorOwner = [ownerNumber]
	        const isGroup = from.endsWith('@g.us')
			const totalchat = await client.chats.all()
			const sender = isGroup ? mek.participant : mek.key.remoteJid
			const groupMetadata = isGroup ? await client.groupMetadata(from) : ''
			const isBanned = ban.includes(sender)
			const groupName = isGroup ? groupMetadata.subject : ''
			const isAntiLink = isGroup ? antilink.includes(from) : false
			const isAntiDiscord = isGroup ? antidiscord.includes(from) : false
			const isAntInsta = isGroup ? antinsta.includes(from) : false
			const isAntiTik = isGroup ? antitik.includes(from) : false
			const isAntiFace = isGroup ? antiface.includes(from) : false
			const isAntiKwai = isGroup ? antikwai.includes(from) : false
			const isAntiWa = isGroup ? antiwa.includes(from) : false
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
            const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
			const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const isWelkom = isGroup ? welkom.includes(from) : false
			const isNsfw = isGroup ? nsfw.includes(from) : false
			const isSimi = isGroup ? samih.includes(from) : false
			const isOwner = ownerNumber.includes(sender)
            const isUser = user.includes(sender)
            const isLevelingOn = isGroup ? _leveling.includes(groupId) : false
            const NomerOwner = '51918303426@s.whatsapp.net'
           const conts = mek.key.fromMe ? client.user.jid : client.contacts[sender] || { notify: jid.replace(/@.+/, '') }
           const pushname = mek.key.fromMe ? client.user.name : conts.notify || conts.vname || conts.name || '-'
			
			//......................
			
			const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			const reply = (teks) => {
				client.sendMessage(from, teks, text, {quoted:mek})
			}
			const sendMess = (hehe, teks) => {
				client.sendMessage(hehe, teks, text)
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? client.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
			}
           
//LINKS DE WHATSAPP	

if (budy.includes("https://wa.me/")){
		if (!isGroup) return
		if (!isAntiWa) return
                if (isGroupAdmins) return reply('Eres un administrador del grupo, así que no te prohibiré el uso de enlaces :)')
		client.updatePresence(from, Presence.composing)
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`*LINK DE WHATSAPP DETECTADO* ${sender.split("@")[0]} Usted sera eliminado de este grupo`)
		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 0)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("Adios mi loco")
		}, 0)
	}
			
	if (budy.includes("wa.me")){
		if (!isGroup) return
		if (!isAntiWa) return
                if (isGroupAdmins) return reply('Eres un administrador del grupo, así que no te prohibiré el uso de enlaces :)')
		client.updatePresence(from, Presence.composing)
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`*LINK DE WHATSAPP DETECTADO* ${sender.split("@")[0]} Usted sera eliminado de este grupo`)
		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 0)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("Adios mi loco")
		}, 0)
	}
			
			
//FIN DE LINKS DE WHATSAPP	
			
			
//ANTILINKS FACEBOOK GRUPOS PERFILES PUBLICACIONES
			
if (budy.includes("https://www.facebook.com/")){
		if (!isGroup) return
		if (!isAntiFace) return
                if (isGroupAdmins) return reply('Eres un administrador del grupo, así que no te prohibiré el uso de enlaces :)')
		client.updatePresence(from, Presence.composing)
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`*LINK DE FACEBOOK DETECTADO* ${sender.split("@")[0]} Usted sera eliminado de este grupo`)
		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 0)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("Adios mi loco")
		}, 0)
	}			
			
if (budy.includes("https://m.facebook.com/")){
		if (!isGroup) return
		if (!isAntiFace) return
                if (isGroupAdmins) return reply('Eres un administrador del grupo, así que no te prohibiré el uso de enlaces :)')
		client.updatePresence(from, Presence.composing)
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`*LINK DE FACEBOOK DETECTADO* ${sender.split("@")[0]} Usted sera eliminado de este grupo`)
		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 0)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("Adios mi loco")
		}, 0)
	}
			
			
//FIN ANTILINKS FACEBOOK GRUPOS PERFILES PUBLICACIONES			
			
//FUNCION ANTILINK
	     	
	if (budy.includes("https://discord.com/")){
		if (!isGroup) return
		if (!isAntiDiscord) return
                if (isGroupAdmins) return reply('Eres un administrador del grupo, así que no te prohibiré el uso de enlaces :)')
		client.updatePresence(from, Presence.composing)
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`*LINK DE DISCORD DETECTADO* ${sender.split("@")[0]} Usted sera eliminado de este grupo`)
		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 0)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("Adios mi loco")
		}, 0)
	}
			
	if (budy.includes("https://s.kwai.app/")){
		if (!isGroup) return
		if (!isAntiKwai) return
                if (isGroupAdmins) return reply('Eres un administrador del grupo, así que no te prohibiré el uso de enlaces :)')
		client.updatePresence(from, Presence.composing)
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`*LINK DE KWAI DETECTADO* ${sender.split("@")[0]} Usted sera eliminado de este grupo`)
		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 0)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("Adios mi loco")
		}, 0)
	}

	if (budy.includes("https://www.instagram.com/")){
		if (!isGroup) return
		if (!isAntInsta) return
	        if (isGroupAdmins) return reply('Eres un administrador del grupo, así que no te prohibiré el uso de enlaces :)')
		client.updatePresence(from, Presence.composing)
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`*LINK DE INSTAGRAM DETECTADO* ${sender.split("@")[0]} Usted sera eliminado de este grupo`)
		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 0)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("Adios mi loco")
		}, 0)
	}		
	
	if (budy.includes("https://vm.tiktok.com/")){
		if (!isGroup) return
		if (!isAntiTik) return
                if (isGroupAdmins) return reply('Eres un administrador del grupo, así que no te prohibiré el uso de enlaces :)')
		client.updatePresence(from, Presence.composing)
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`*LINK DE TIK TOK DETECTADO* ${sender.split("@")[0]} Usted sera eliminado de este grupo`)
		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 0)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("Adios mi loco")
		}, 0)
	}
	
       if (budy.includes("://chat.whatsapp.com/")){
		if (!isGroup) return
		if (!isAntiLink) return
		if (isGroupAdmins) return reply('Eres un administrador del grupo, así que no te prohibiré el uso de enlaces :)')
		client.updatePresence(from, Presence.composing)
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`*LINK DE WHATSAPP DETECTADO* ${sender.split("@")[0]} Usted será expulsado del grupo`)
		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 0)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("Adios mi loco")
		}, 0)
	}

//FIN DE ANTI LINKS 
		

//FUNCION DE LEVEL
            
     if (isGroup && isLevelingOn) {
            const currentLevel = getLevelingLevel(sender)
            const checkId = getLevelingId(sender)
            try {
                if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
                const amountXp = Math.floor(Math.random() * 10) + 500
                const requiredXp = 5000 * (Math.pow(2, currentLevel) - 1)
                const getLevel = getLevelingLevel(sender)
                addLevelingXp(sender, amountXp)
                if (requiredXp <= getLevelingXp(sender)) {
                    addLevelingLevel(sender, 1)
                    await reply(`*「FELICIDADES LEVEL UP」*\n\nFelicidades subiste de nivel sigue asi\n\n*NOMBRE*\n${pushname}\n*XP*: ${getLevelingXp(sender)}\n*NIVEL*: ${getLevel} ⟿ ${getLevelingLevel(sender)}\n\n_*Para ver tu XP en tiempo real coloca el comando ${prefix}level*_`)
                }
            } catch (err) {
                console.error(err)
            }
        }

//FIN DE FUNCION DE LEVEL
			
         		
                        colors = ['red','white','black','blue','yellow','green']
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
         if (isCmd && isBanned) {
        return console.log(color('[ USUÁRIO BANEADO ] Ignorando Comando', 'blue'), color(moment.tz('America/Guayaquil').format('HH:mm:ss'), 'yellow'), color(`${command}`),'DE:', color(pushname))}
    	if (!isGroup && isCmd) console.log('\x1b[1;37m>', '[ \x1b[1;36mMensaje\x1b[1;37m ]', time, color(command), 'De', color(sender.split('@')[0]))
        if (isCmd && isGroup) console.log('\x1b[1;37m>', '[ \x1b[1;36mMensaje\x1b[1;37m ]', time, color(command), 'De', color(sender.split('@')[0]), 'En', color(groupName))

/******ENTRADA FIN DE FUNCIONES******/
			function addMetadata(packname, author) {	
				if (!packname) packname = 'ShanBot'; if (!author) author = 'Shanduy';	
				author = author.replace(/[^a-zA-Z0-9]/g, '');	
				let name = `${author}_${packname}`
				if (fs.existsSync(`./src/stickers/${name}.exif`)) return `./src/stickers/${name}.exif`
				const json = {	
					"sticker-pack-name": packname,
					"sticker-pack-publisher": author,
				}
				const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	
				const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]	

				let len = JSON.stringify(json).length	
				let last	

				if (len > 256) {	
					len = len - 256	
					bytes.unshift(0x01)	
				} else {	
					bytes.unshift(0x00)	
				}	

				if (len < 16) {	
					last = len.toString(16)	
					last = "0" + len	
				} else {	
					last = len.toString(16)	
				}	

				const buf2 = Buffer.from(last, "hex")	
				const buf3 = Buffer.from(bytes)	
				const buf4 = Buffer.from(JSON.stringify(json))	

				const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])	

				fs.writeFile(`./src/stickers/${name}.exif`, buffer, (err) => {	
					return `./src/stickers/${name}.exif`	
				})	

			}
			switch(command) {
		case 'help':
		case 'menu':
	        client.sendMessage(from, help(prefix, sender), text, {quoted: mek})
		break
                case 'otak':
		client.sendMessage(from, otak(prefix, sender), text, {quoted: mek})
		break
		case 'juegos':
		client.sendMessage(from, juegos(prefix, sender), text, {quoted: mek})
		break
		case 'idioma':
		client.sendMessage(from, bahasa(prefix, sender), text, {quoted: mek})
		break
		case 'levelmenu':
		client.sendMessage(from, levelmenu(prefix, sender), text, {quoted: mek})
		break
		case 'shanmenu':
		client.sendMessage(from, toinmenu(prefix, sender), text, {quoted: mek})
		break
		case 'menuadmin':
		client.sendMessage(from, menuadmin(prefix, sender), text, {quoted: mek})
		break
		case 'nsfwmenu':
		client.sendMessage(from, nsfwmenu(prefix, sender), text, {quoted: mek})
		break
		case 'banmenu':
		client.sendMessage(from, banmenu(prefix, sender), text, {quoted: mek})
		break
		case 'desmenu':
		client.sendMessage(from, desmenu(prefix, sender), text, {quoted: mek})
		break
		case 'versión':
		case 'version':
		client.sendMessage(from, version(prefix, sender), text, {quoted: mek})
		break
		case 'antimenu':
		client.sendMessage(from, antimenu(prefix, sender), text, {quoted: mek})
		break
                case 'welmenu':
		client.sendMessage(from, welmenu(prefix, sender), text, {quoted: mek})
		break
		case 'shantera':
		client.sendMessage(from, shantera(prefix, sender), text, {quoted: mek})
		break
					
		/*case 'virtex':
	       case 'troleo':
               client.sendMessage(from, virtex(prefix, sender), text, {quoted: mek})
               break*/
                            

////////////////////////// INFO DEL BOT //////

/*case 'status':
	case 'info':
			if (!isUser) return reply(mess.only.daftarB)
								  groups = cnf.chats.array.filter(v => v.jid.endsWith('g.us'))
								  privat = cnf.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
								  ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
								  uptime = process.uptime();
								  timestampe = speed();
								  totalChat = await cnf.chats.all()
								  latensie = speed() - timestampe
								  total = math(`${groups.length}*${privat.length}`)
	reply(`_*Solicitado:*_ ${pushname}\n_*Grupo:*_: ${groupName}\n_*Prefijo usado:*_ *${prefix}*\n_*Grupoos:*_ ${groups.length}\n_*Chats privados:*_ ${privat.length}\n_*Total chats:*_ ${totalChat.length}\n_*Velocidad:*_ ${latensie.toFixed(4)} _Second_\n_*Activo:*_ ${runtime(process.uptime())}\n_*Plataforma:*_ ${os.platform()}\n_*Owner:*_ wa.me/51918303426`)
	break*/



///////////////////////////////////////////////////////
//FUNCIONES DE BAN Y DESBAN			
			
case 'ban':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return 
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pru = '*\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
ban.push(`${mentioned}`)
fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
susp = `『 BANEADO 🚫 』\n\n◉Nombre: @${mentioned[0].split('@')[0]}\n◉Razon: Por mamaguevazo\n\n*Usted a sido baneado del uso del bot, no podra usar el bot hasta nuevo aviso*`
mentions(`${susp}`, mentioned, true)   
break

case 'desban':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return 
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pru = '*\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
ban.splice(`${mentioned}`)
fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
susp = `『 DESBANEADO ✅ 』\n\n◉Nombre: @${mentioned[0].split('@')[0]}\n\n*Se te a retirado el BAN ya puedes usar el bot*`
mentions(`${susp}`, mentioned, true)   
break		
			
//FIN DE FUNCIONES BAN Y DESBAN					
					
					
/******JUEGOS DAR LA PUTA MADRE NO TE OLVIDES******/
					
case 'gay':
if (!isUser) return reply(mess.only.daftarB)
rate = body.slice(5)
client.updatePresence(from, Presence.composing) 
random = `${Math.floor(Math.random() * 100)}`
gay = random
if (gay < 20 ) {ga = 'Usted es hetero 🤪🤙'} else if (gay == 21 ) {ga = 'Mas o menos 🤔'} else if (gay == 23 ) {ga = 'Mas o menos 🤔'} else if (gay == 24 ) {ga = 'Mas o menos 🤔'} else if (gay == 25 ) {ga = 'Mas o menos 🤔'} else if (gay == 26 ) {ga = 'Mas o menos 🤔'} else if (gay == 27 ) {ga = 'Mas o menos 🤔'} else if (gay == 28 ) {ga = 'Mas o menos 🤔'} else if (gay == 29 ) {ga = 'Mas o menos 🤔'} else if (gay == 30 ) {ga = 'Mas o menos 🤔'} else if (gay == 31 ) {ga = 'Tengo mi dudas 😑'} else if (gay == 32 ) {ga = 'Tengo mi dudas 😑'} else if (gay == 33 ) {ga = 'Tengo mi dudas 😑'} else if (gay == 34 ) {ga = 'Tengo mi dudas 😑'} else if (gay == 35 ) {ga = 'Tengo mi dudas 😑'} else if (gay == 36 ) {ga = 'Tengo mi dudas 😑'} else if (gay == 37 ) {ga = 'Tengo mi dudas 😑'} else if (gay == 38 ) {ga = 'TTengo mi dudas 😑'} else if (gay == 39 ) {ga = 'Tengo mi dudas 😑'} else if (gay == 40 ) {ga = 'Tengo mi dudas 😑'} else if (gay == 41 ) {ga = 'Tengo razon? 😏'} else if (gay == 42 ) {ga = 'Tengo razon? 😏'} else if (gay == 43 ) {ga = 'Tengo razon? 😏'} else if (gay == 44 ) {ga = 'Tengo razon? 😏'} else if (gay == 45 ) {ga = 'Tengo razon? 😏'} else if (gay == 46 ) {ga = 'Tengo razon? 😏'} else if (gay == 47 ) {ga = 'Tengo razon? 😏'} else if (gay == 48 ) {ga = 'Tengo razon? 😏'} else if (gay == 49 ) {ga = 'Tengo razon? 😏'} else if (gay == 50 ) {ga = 'Eres o no? 🧐'} else if (gay > 51) {ga = 'Usted es gay 🥸'}
hasil = `${rate}Usted es ${random}% gay\n\n${ga}`
reply(hasil)
break

case 'cuties':
if (!isUser) return reply(mess.only.daftarB)
rate = body.slice(9)
client.updatePresence(from, Presence.composing) 
random = `${Math.floor(Math.random() * 100)}`
cuties = random
if (cuties < 20 ) {cu = 'Mi loco usted va para el cielo 👏'} else if (cuties == 21 ) {cu = 'Te salvaste ramirez 😎'} else if (cuties == 23 ) {cu = 'Te salvaste ramirez 😎'} else if (cuties == 24 ) {cu = 'Te salvaste ramirez 😎'} else if (cuties == 25 ) {cu = 'Te salvaste ramirez 😎'} else if (cuties == 26 ) {cu = 'Te salvaste ramirez 😎'} else if (cuties == 27 ) {cu = 'Te salvaste ramirez 😎'} else if (cuties == 28 ) {cu = 'Te salvaste ramirez 😎'} else if (cuties == 29 ) {cu = 'Te salvaste ramirez 😎'} else if (cuties == 30 ) {cu = 'Te salvaste ramirez 😎'} else if (cuties == 31 ) {cu = 'Ramirez que hace viendo cuties 🤔'} else if (cuties == 32 ) {cu = 'Ramirez que hace viendo cuties 🤔'} else if (cuties == 33 ) {cu = 'Ramirez que hace viendo cuties 🤔'} else if (cuties == 34 ) {cu = 'Ramirez que hace viendo cuties 🤔'} else if (cuties == 35 ) {cu = 'Ramirez que hace viendo cuties 🤔'} else if (cuties == 36 ) {cu = 'Ramirez que hace viendo cuties 🤔'} else if (cuties == 37 ) {cu = 'Ramirez que hace viendo cuties 🤔'} else if (cuties == 38 ) {cu = 'Ramirez que hace viendo cuties 🤔'} else if (cuties == 39 ) {cu = 'Ramirez que hace viendo cuties 🤔'} else if (cuties == 40 ) {cu = 'Ramirez que hace viendo cuties 🤔'} else if (cuties == 41 ) {cu = 'Mmm sospechoso ramirez 🧐'} else if (cuties == 42 ) {cu = 'Mmm sospechoso ramirez 🧐'} else if (cuties == 43 ) {cu = 'Mmm sospechoso ramirez 🧐'} else if (cuties == 44 ) {cu = 'Mmm sospechoso ramirez 🧐'} else if (cuties == 45 ) {cu = 'Mmm sospechoso ramirez 🧐'} else if (cuties == 46 ) {cu = 'Mmm sospechoso ramirez 🧐'} else if (cuties == 47 ) {cu = 'Mmm sospechoso ramirez 🧐'} else if (cuties == 48 ) {cu = 'Mmm sospechoso ramirez 🧐'} else if (cuties == 49 ) {cu = 'Mmm sospechoso ramirez 🧐'} else if (cuties == 50 ) {cu = 'Mmm sospechoso ramirez 🧐'} else if (cuties > 51) {cu = 'Señores un autentico FAN DE CUTIES esta en el grupo 🥸'}
hasil = `${rate}Resultado ${random}% fan de cuties\n\n${cu}`
reply(hasil)
break
				  
case 'rankgay':
try{
if (!isUser) return reply(mess.only.daftarB)
if (!isGroup) return reply(mess.only.group)
d = []
teks = 'Top 5 de los mas gays del grupo\n\n'
for(i = 0; i < 5; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
teks += `➔ @${groupMembers[r].jid.split('@')[0]}\n`
d.push(groupMembers[r].jid)
}
mentions(teks, d, true)
} catch (e) {
console.log(e)
reply('Hubo un error intentalo nuevamente :/')
}
break
					
case 'pendejo':
if (!isUser) return reply(mess.only.daftarB)
rate = body.slice(9)
client.updatePresence(from, Presence.composing) 
random = `${Math.floor(Math.random() * 100)}`
gay = random
if (gay < 20 ) {ga = 'Usted es pendejito 🤪🤙'} else if (gay == 21 ) {ga = 'Mas o menos 🤔'} else if (gay == 23 ) {ga = 'Mas o menos 🤔'} else if (gay == 24 ) {ga = 'Mas o menos 🤔'} else if (gay == 25 ) {ga = 'Mas o menos 🤔'} else if (gay == 26 ) {ga = 'Mas o menos 🤔'} else if (gay == 27 ) {ga = 'Mas o menos 🤔'} else if (gay == 28 ) {ga = 'Mas o menos 🤔'} else if (gay == 29 ) {ga = 'Mas o menos 🤔'} else if (gay == 30 ) {ga = 'Mas o menos 🤔'} else if (gay == 31 ) {ga = 'Tengo mi dudas 😑'} else if (gay == 32 ) {ga = 'Tengo mi dudas 😑'} else if (gay == 33 ) {ga = 'Tengo mi dudas 😑'} else if (gay == 34 ) {ga = 'Tengo mi dudas 😑'} else if (gay == 35 ) {ga = 'Tengo mi dudas 😑'} else if (gay == 36 ) {ga = 'Tengo mi dudas 😑'} else if (gay == 37 ) {ga = 'Tengo mi dudas 😑'} else if (gay == 38 ) {ga = 'TTengo mi dudas 😑'} else if (gay == 39 ) {ga = 'Tengo mi dudas 😑'} else if (gay == 40 ) {ga = 'Tengo mi dudas 😑'} else if (gay == 41 ) {ga = 'Tengo razon? 😏'} else if (gay == 42 ) {ga = 'Tengo razon? 😏'} else if (gay == 43 ) {ga = 'Tengo razon? 😏'} else if (gay == 44 ) {ga = 'Tengo razon? 😏'} else if (gay == 45 ) {ga = 'Tengo razon? 😏'} else if (gay == 46 ) {ga = 'Tengo razon? 😏'} else if (gay == 47 ) {ga = 'Tengo razon? 😏'} else if (gay == 48 ) {ga = 'Tengo razon? 😏'} else if (gay == 49 ) {ga = 'Tengo razon? 😏'} else if (gay == 50 ) {ga = 'Eres o te haces? 🧐'} else if (gay > 51) {ga = 'Usted es pendejo 🥸'}
hasil = `${rate} Usted es ${random}% Pendejo \n\n${ga}`
reply(hasil)
break
					
case 'rankpendejos':
try{
if (!isUser) return reply(mess.only.daftarB)
if (!isGroup) return reply(mess.only.group)
d = []
teks = 'Top 5 de los mas pendejos del grupo\n\n'
for(i = 0; i < 5; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
teks += `➔ @${groupMembers[r].jid.split('@')[0]}\n`
d.push(groupMembers[r].jid)
}
mentions(teks, d, true)
} catch (e) {
console.log(e)
reply('Hubo un error intentalo nuevamente :/')
}
break	

case 'ceperos':
try{
if (!isUser) return reply(mess.only.daftarB)
if (!isGroup) return reply(mess.only.group)
d = []
teks = 'Top 10 de los ceperos del grupo\n\n'
for(i = 0; i < 10; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
teks += `➔ @${groupMembers[r].jid.split('@')[0]}\n`
d.push(groupMembers[r].jid)
}
mentions(teks, d, true)
} catch (e) {
console.log(e)
reply('Hubo un error intentalo nuevamente :/')
}
break				

case 'simps':
try{
if (!isUser) return reply(mess.only.daftarB)
if (!isGroup) return reply(mess.only.group)
d = []
teks = 'Top 7 de los mas simps del grupo\n\n'
for(i = 0; i < 7; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
teks += `➔ @${groupMembers[r].jid.split('@')[0]}\n`
d.push(groupMembers[r].jid)
}
mentions(teks, d, true)
} catch (e) {
console.log(e)
reply('Hubo un error intentalo nuevamente :/')
}
break
					
case 'lucky':
a = '🍇'
b = '🍎'
c = '🍓'
e = '🍑'
f = '💰'
g = '🥝'
pw = [`${a}`, `${b}`, `${c}`, `${e}`, `${f}`, `${g}`]
luck = pw[Math.floor(Math.random() * pw.length)]
pw1 = [`${a}`, `${b}`, `${c}`, `${e}`, `${f}`, `${g}`]
luck1 = pw1[Math.floor(Math.random() * pw1.length)]
pw2 = [`${a}`, `${b}`, `${c}`, `${e}`, `${f}`, `${g}`]
luck2 = pw2[Math.floor(Math.random() * pw2.length)]
pw3 = [`${a}`, `${b}`, `${c}`, `${e}`, `${f}`, `${g}`]
luck3 = pw3[Math.floor(Math.random() * pw3.length)]
pw4 = [`${a}`, `${b}`, `${c}`, `${e}`, `${f}`, `${g}`]
luck4 = pw4[Math.floor(Math.random() * pw4.length)]
pw5 = [`${a}`, `${b}`, `${c}`, `${e}`, `${f}`, `${g}`]
luck5 = pw5[Math.floor(Math.random() * pw5.length)]
pw6 = [`${a}`, `${b}`, `${c}`, `${e}`, `${f}`, `${g}`]
luck6 = pw6[Math.floor(Math.random() * pw6.length)]
pw7 = [`${a}`, `${b}`, `${c}`, `${e}`, `${f}`, `${g}`]
luck7 = pw7[Math.floor(Math.random() * pw7.length)]
pw7 = [`${a}`, `${b}`, `${c}`, `${e}`, `${f}`, `${g}`]
luck7 = pw7[Math.floor(Math.random() * pw7.length)]
s = `┃ │  ${luck} │  ${luck1} │ ${luck2}`
a = `┃ │  ${luck3} │  ${luck4} │ ${luck5}`
m = `┃ │  ${luck6} │  ${luck7} │ ${luck7}`
u = `
╭──╼┥𝐂𝐀𝐒𝐒𝐈𝐍𝐎┝╾──╮
╽ ┌──────────┐ ┃
${s}
┃ ├──────────┤ ┃
${a}
┃ ├──────────┤ ┃
${m}
╿ └──────────┘ ╿
╰──┨⃞ Dar┠───╯`
reply(`${u}`)
break
					
case 'lucky2':
a = '⭕'
b = '❌'
c = '💢'
e = '♨️'
f = '🛑'
g = '📛'
pw = [`${a}`, `${b}`, `${c}`, `${e}`, `${f}`, `${g}`]
luck = pw[Math.floor(Math.random() * pw.length)]
pw1 = [`${a}`, `${b}`, `${c}`, `${e}`, `${f}`, `${g}`]
luck1 = pw1[Math.floor(Math.random() * pw1.length)]
pw2 = [`${a}`, `${b}`, `${c}`, `${e}`, `${f}`, `${g}`]
luck2 = pw2[Math.floor(Math.random() * pw2.length)]
pw3 = [`${a}`, `${b}`, `${c}`, `${e}`, `${f}`, `${g}`]
luck3 = pw3[Math.floor(Math.random() * pw3.length)]
pw4 = [`${a}`, `${b}`, `${c}`, `${e}`, `${f}`, `${g}`]
luck4 = pw4[Math.floor(Math.random() * pw4.length)]
pw5 = [`${a}`, `${b}`, `${c}`, `${e}`, `${f}`, `${g}`]
luck5 = pw5[Math.floor(Math.random() * pw5.length)]
pw6 = [`${a}`, `${b}`, `${c}`, `${e}`, `${f}`, `${g}`]
luck6 = pw6[Math.floor(Math.random() * pw6.length)]
pw7 = [`${a}`, `${b}`, `${c}`, `${e}`, `${f}`, `${g}`]
luck7 = pw7[Math.floor(Math.random() * pw7.length)]
pw7 = [`${a}`, `${b}`, `${c}`, `${e}`, `${f}`, `${g}`]
luck7 = pw7[Math.floor(Math.random() * pw7.length)]
s = `┃ │  ${luck} │  ${luck1} │ ${luck2}`
a = `┃ │  ${luck3} │  ${luck4} │ ${luck5}`
m = `┃ │  ${luck6} │  ${luck7} │ ${luck7}`
u = `
╭──┥𝐂𝐀𝐒𝐒𝐈𝐍𝐎┝╾─╮
╽ ┌──────────┐ ┃
${s}
┃ ├──────────┤ ┃
 ${a}
┃ ├──────────┤ ┃
${m}
╿ └──────────┘ ╿
╰───┨⃞  Dar┠───╯`
reply(`${u}`)
break					
					
case 'bot':
if (!isUser) return reply(mess.only.daftarB)
if (!isGroup) return reply(mess.only.group)
if (args.length < 1) return reply(`✳️ Ejemplo: *${prefix + command}* soy feo?`)
d = []
r = ["Si","No","En efecto"," Tal vez","No lo se","Quizas","Mañana","Jamas", "Un domingo", "no lo hace", "muy falso", "muy real", "Sí lo hace", "Simon al rato", "Mmmmm creo que si"]
random = r[Math.floor(Math.random() * (r.length))]
preg = `${random}`
reply(`${preg}`)
break
					
case 'reto':
if (!isUser) return reply(mess.only.daftarB)
if (!isGroup) return reply(mess.only.group)
  const reto = _reto[Math.floor(Math.random() * _reto.length)]
  reply(`‣ *Reto*\n\n${reto}`)
break

case 'verdad':
if (!isUser) return reply(mess.only.daftarB)
if (!isGroup) return reply(mess.only.group)
  const verdad = _verdad[Math.floor(Math.random() * _verdad.length)]
  reply(`‣ *Verdad*\n\n${verdad}`)
break					
											
/******JUEGOS DAR LA PUTA MADRE NO TE OLVIDES******/					
					
					
       				case 'wa.me':
				  case 'wame':
  client.updatePresence(from, Presence.composing) 
      options = {
          text: `「 *LINK WHATSAPP* 」\n\n_Solicitado por_ : @${sender.split("@s.whatsapp.net")[0]}\n\nSu link de Whatsapp : *https://wa.me/${sender.split("@s.whatsapp.net")[0]}*\n*O ( / )*\n*https://api.whatsapp.com/send?phone=${sender.split("@")[0]}*`,
          contextInfo: { mentionedJid: [sender] }
    }
    client.sendMessage(from, options, text, { quoted: mek } )
				break
				if (data.error) return reply(data.error)
				reply(data.result)
				break
		
	
	                                 case 'owner':
                                         case 'creador':
					 client.sendMessage(from, {displayname: "Darlyn xs", vcard: vcard}, MessageType.contact, { quoted: fkontakk})
		                         client.sendMessage(from, 'Hola, te saluda Darlyn, ahora me estoy masturbando, por favor escríbeme dentro de 30 minutos o 1 hora, gracias por su comprensión',MessageType.text, { quoted: mek} )
					 break
					
/******LINKS DARLYN KKKK******/
                                         /*case 'sexo':
		                         client.sendMessage(from, 'Aqui te dejoo links pajin\n\nhttps://es.pornhub.com/view_video.php?viewkey=ph5fb5740bdb24c\n\nhttps://es.pornhub.com/view_video.php?viewkey=ph611676223d5fe\n\nhttps://es.pornhub.com/view_video.php?viewkey=ph5dc5899df25a6\n\nhttps://es.pornhub.com/view_video.php?viewkey=ph59ff1d784abe7\n\nhttps://es.pornhub.com/view_video.php?viewkey=ph591c49b831236\n\nhttps://es.pornhub.com/view_video.php?viewkey=ph5db7555de5bd9\n\nhttps://es.pornhub.com/view_video.php?viewkey=ph60002d6c978c6\n\nhttps://es.pornhub.com/view_video.php?viewkey=ph591ae4fc32014\n\nhttps://es.pornhub.com/view_video.php?viewkey=ph5c3d1914a7665\n\nhttps://es.pornhub.com/view_video.php?viewkey=ph5df121bedb172\n\nhttps://es.pornhub.com/view_video.php?viewkey=ph5e551fecd175b',MessageType.text, { quoted: mek} )
					 break

                                         case 'music':
		                         client.sendMessage(from, 'Aquí tiens algunas playlist:\n\nhttps://open.spotify.com/playlist/37i9dQZF1DWSpF87bP6JSF?si=b9bec9f8d0994e4f\nhttps://open.spotify.com/playlist/37i9dQZF1DX57NRq0pf7ea?si=bd3a981d7ce84d40\nhttps://open.spotify.com/playlist/37i9dQZF1DWXJfnUiYjUKT?si=23b8e7ed51ce4a6a\nhttps://open.spotify.com/playlist/37i9dQZF1DWYxZc1Cgg8Ja?si=a3e894fcfb5a4316\nhttps://open.spotify.com/playlist/37i9dQZF1DX39FzqwAhZEK?si=466f08ee43654e4e\nhttps://open.spotify.com/playlist/37i9dQZF1DWT0qByOJYmmJ?si=8570166d8b834680\nhttps://open.spotify.com/playlist/37i9dQZF1DWX83CujKHHOn?si=8a932312f9ed4060\nhttps://open.spotify.com/playlist/37i9dQZF1DX3YSRoSdA634?si=16e9095cc5284629\nhttps://open.spotify.com/playlist/37i9dQZF1DX0SM0LYsmbMT?si=984efe9fe340400c\nhttps://open.spotify.com/playlist/37i9dQZF1DWVV27DiNWxkR?si=68f34ff00b1d46ae\nhttps://open.spotify.com/playlist/37i9dQZF1DWTtTyjgd08yp?si=0374eece53854026\n\nAhi tienes :D',MessageType.text, { quoted: mek} )
					 break
					
					 case 'xnxx':
		                         client.sendMessage(from, 'https://www.xnxx.com/\n\nhttps://www.xnxx.com/video-ny6hh8e/emily_willis_hace_su_debut_en_pervcity_en_una_nueva_escena_anal_caliente_con_bill_bailey_recibiendo_una_polla_y_bolas_en_su_ojete\n\nListo pajin',MessageType.text, { quoted: mek} )
					 break
					
					case 'trap':
		                         client.sendMessage(from, 'A continuacion playlist de trap:\n\nhttps://open.spotify.com/playlist/37i9dQZF1DZ06evO1nGHQ7?si=3620698598ff4c51\nhttps://open.spotify.com/playlist/37i9dQZF1DXde9tuMHuIsj?si=b622ff6770864492',MessageType.text, { quoted: mek} )
					 break
					
					 case 'kpop':
		                         client.sendMessage(from, 'Aquí tienes playlist de kpop\n\O',MessageType.text, { quoted: mek} )
					 break*/
					
/******LINKS DARLYN KKKK******/					
/***********INSTALACION DEL BOT******/

/*case 'instalacion':
        case 'install':
            case 'installbot':
            case 'instalar':
        client.sendMessage(from, 'Aqui tienes los comandos de instalacion.\n\nPara ello necesitas instalar termux, que lo encuentras en la play store, pero mas recomendado es decargarlo de F-Droid, una vez que tengas instalado termux vas a digitar los siguientes comandos:\n\n1- termux-change-repo\n\nBajas con flecha que te aparece en las herramientas de termux *⇵* y seleccionas los 3 cuadros con la tecla espacio y le das a aceptar con la tecla enter que esta en tu teclado. *↲*\n\nTe saldra una ventana y seleccionas el tercer cuadro y aceptas con la tecla ya mencionada. *↲*\n\n*Digitas*\n\npkg install git\nTe saldra un mensaje y digitas *y* y enter. *↲*\n\npkg install fmmpeg\nY haces lo mismo que con el anterior comando.\n\npkg install nodejs\nY haces lo mismo que con el anterior comando.\n\npkg install wget\nY haces lo mismo que con el anterior comando.\n\nDespues de hacer todo eso vamos a clonar el repositorio, para ello usaremos:\n\ngit clone https://github.com/darlyn1234/DAR-BOT\n\Y haces lo mismo que con los otros comandos, despues digitas:\n\ncd DAR-BOT\nUna vez abierto el directorio digitas:\n\nbash install.sh\mY le das en *y* a todo y finalizar le das a:\n\nnpm start\nY escaneas ell codigo a travez de whatsapp web.',MessageType.text, { quoted: mek} )
        break*/					
			
/*case 'instalacion':
        case 'install':
            case 'installbot':
            case 'instalar':
                  client.sendMessage(from, 'Aqui tienes los comandos de instalacion\n\nPara ello necesitas instalar termux, que lo encuentras en la play store o mas recomendando es decargarlo de F-Droid y digitar los siguientes comandos\n\n1- termux-change-repo\n\nBajas con flecha que te aparece en las herramientas de termux *⇵* y seleccionas los 3 cuadros con la tecla espacio y le das a aceptar con la tecla enter que esta en tu teclado *↲*\n\nTe saldra una ventana y seleccionas el tercer cuadro y seleccionas con la tecla ya mencionada *↲*\n\nDigitas\npkg install git\nTe saldra un mensaje y digitas *y* y enter *↲*\n\npkg install fmmpeg\nY haces lo mismo que hciste con el anterior comando\n\npkg install nodejs\nY haces lo mismo que hciste con el anterior comando\n\npkg install wget\nY haces lo mismo que hciste con el anterior comando\n\nDespues de hacer todo eso vamos a clonar el repositorio, para ello usaremos\n\ngit clone https://github.com/darlyn1234/DAR-BOT\n\Y haces lo mismo que con los otros comandos, despues digitas\n\ncd DAR-BOT\nUna vez abierto el directorio digitas\n\nbash install.sh\mY le das en *y* a todo y finalizar le das a\n\nnpm start\nY escaneas ell codigo a travez de whatsapp web',MessageType.text, { quoted: mek}
                    contextInfo: {"forwardingScore"}:999, "isForwarded": true}
                  {quoted:key: {
                      fromMe: false,
                      participant: `0@s.whatsapp.net`, ...(from ? {remoteJid: "status@broadcast" } :{})
                  },
                  message: {
                      "documentMessage": { "title": "Darlyn?xd", 'jpegThumbnail': fs.readFileSync('./mp3/sticker/lisamanoban.jpg')}}
                  }}*/ 					
/********INSTALACION DEL BOT*******/					
	
	case 'x':
                client.updatePresence(from, Presence.composing) 
                if (!isGroupAdmins) return reply(mess.only.Badmin)
		if (!isUser) return reply(mess.only.daftarB)
                if (!isGroup) return reply(mess.only.group)
                teks = body.slice(3)
                group = await client.groupMetadata(from);
                member = group['participants']
                jids = [];
                member.map( async adm => {
                jids.push(adm.id.replace('c.us', 's.whatsapp.net'));
                 })
                 options = {
                 text: teks,
                contextInfo: {mentionedJid: jids},
                quoted: mek
                }
              await client.sendMessage(from, options, text)
               break
					
case 'hd':
                client.updatePresence(from, Presence.composing) 
                if (!isGroupAdmins) return reply(mess.only.Badmin)
		if (!isUser) return reply(mess.only.daftarB)
                if (!isGroup) return reply(mess.only.group)
                teks = body.slice(4)
                group = await client.groupMetadata(from);
                member = group['participants']
                jids = [];
                member.map( async adm => {
                jids.push(adm.id.replace('c.us', 's.whatsapp.net'));
                 })
                 options = {
                 text: teks,
                contextInfo: {mentionedJid: jids},
                quoted: mek
                }
               await client.sendMessage(from, options, text)
               break
					
		case 'hidetag':	
		client.updatePresence(from, Presence.composing) 
                if (!isGroup) return reply(mess.only.group)
                teks = body.slice(9)
                group = await client.groupMetadata(from);
                member = group['participants']
                jids = [];
                member.map( async adm => {
                jids.push(adm.id.replace('c.us', 's.whatsapp.net'));
                 })
                 options = {
                 text: teks,
                contextInfo: {mentionedJid: jids},
                quoted: mek
                }
              await client.sendMessage(from, options, text)
               break
							
		case 'notificar':
		case 'notify':				
	        client.updatePresence(from, Presence.composing) 
                if (!isGroupAdmins) return reply(mess.only.Badmin)
		if (!isUser) return reply(mess.only.daftarB)
                if (!isGroup) return reply(mess.only.group)
		if (args.length < 1) return reply(`Cual es el mensaje?`)
                teks = `Recibes un mensaje de notificación del admin @${sender.split("@")[0]}\n\n*Mensaje* : ${q}`
                group = await client.groupMetadata(from);
                member = group['participants']
                jids = [];
                member.map( async adm => {
                jids.push(adm.id.replace('c.us', 's.whatsapp.net'));
                 })
                 options = {
                 text: teks,
                contextInfo: {mentionedJid: jids},
                quoted: mek
                }
              await client.sendMessage(from, options, text)
               break
					
                               case 'tts':
				   client.updatePresence(from, Presence.recording) 
				   if (args.length < 1) return client.sendMessage(from, 'Cual es el código de idioma?\n\nPara saber el codigo de idioma coloque el comando ${prefix}idioma', text, {quoted: mek})
                                   if (!isUser) return reply(mess.only.daftarB)
					const gtts = require('./lib/gtts')(args[0])
					if (args.length < 2) return client.sendMessage(from, 'Y el texto gil?', text, {quoted: mek})
					dtt = body.slice(8)
					ranm = getRandom('.mp3')
					rano = getRandom('.ogg')
					dtt.length > 600
					? reply('Texto muy largo mamaguevo')
					: gtts.save(ranm, dtt, function() {
						exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
							fs.unlinkSync(ranm)
							buff = fs.readFileSync(rano)
							if (err) return reply('Gagal om:(')
							client.sendMessage(from, buff, audio, {quoted: mek, ptt:true})
							fs.unlinkSync(rano)
						})
					})
					break
                                case 'listadmins':
				case 'adminlist':
				case 'admins':
					client.updatePresence(from, Presence.composing) 
                                        if (!isUser) return reply(mess.only.daftarB)
					if (!isGroup) return reply(mess.only.group)
					teks = `*Lista De Administradores Del Grupo*\n\n${groupMetadata.subject}\n\nTotal: ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break
			case 'setprefix':
				case 'prefijo':
				case 'nvprefix':
					client.updatePresence(from, Presence.composing) 
					if (args.length < 1) return
					if (!isOwner) return reply(mess.only.ownerB)
					prefix = args[0]
					reply(`El prefijo del bot se ha cambiado correctamente a : ${prefix}`)
					break
			case 'todos':
				case 'tagall':
				case 'invocar':
				case 'tagall2':
				case 'tagall3':
				case 'mencionar':
				client.updatePresence(from, Presence.composing) 
					if (!isGroup) return reply(mess.only.group)
                                        if (!isUser) return reply(mess.only.daftarB)
					if (!isGroupAdmins) return reply(mess.only.admin)
					members_id = []
					teks = (args.length > 1) ? body.slice(7).trim() : ''
					teks += `  Total : ${groupMembers.length}\n`
					for (let mem of groupMembers) {
						teks += `⇝⤐ @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions('⸕ *MENCIONANDO A TODOS* ⸔'+teks+'⇝↱ _*☂︎𝓓𝓪𝓻𝓵𝔂𝓷☂︎*_ ↲', members_id, true)
					break
                                case 'send':
					var pc = body.slice(6)
					var nomor = pc.split("|")[0];
					var pesan = pc.split("|")[1];
					client.sendMessage(nomor+'@s.whatsapp.net', pesan, text)
					break
				case 'setppbot':
				case 'perfil':
				client.updatePresence(from, Presence.composing) 
				if (!isQuotedImage) return reply(`Para cambiar la foto de perfil del bot, manda la imagen y luego responde a esa imagen`)
					if (!isOwner) return reply(mess.only.ownerB)
					enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(enmedia)
					await client.updateProfilePicture(botNumber, media)
					reply('Gracias por el nuevo perfil malparido')
					break
				case 'bc':
					client.updatePresence(from, Presence.composing) 
					if (!isOwner) return reply(mess.only.ownerB)
					if (args.length < 1) return reply('.......')
					anu = await client.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await client.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							client.sendMessage(_.jid, buff, image, {caption: `*「 TRANSMISIÓN 」*\n\n${body.slice(4)}`})
						}
						reply('')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `*「 _*by shanduy*_ 」*\n\n${body.slice(4)}`)
						}
						reply('Transmisión exitosa')
					}
					break
					case 'bcgc':
					client.updatePresence(from, Presence.composing) 
					if (!isOwner) return reply(mess.only.ownerB)
					if (args.length < 1) return reply('.......')
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await client.downloadMediaMessage(encmedia)
						for (let _ of groupMembers) {
							client.sendMessage(_.jid, buff, image, {caption: `*「 GRUPO BC 」*\n*Grupo* : ${groupName}\n\n${body.slice(6)}`})
						}
						reply('')
					} else {
						for (let _ of groupMembers) {
							sendMess(_.jid, `*「 BC GROUP 」*\n*Group* : ${groupName}\n\n${body.slice(6)}`)
						}
						reply('Grupo de transmisión exitoso')
					}
					
                     
				
		
                                       
				
			//ANTILINKS DE REDES SOCIALES	
				
				case 'antiwa':
                                        if (!isGroup) return reply(mess.only.group)
					if (!isUser) return reply(mess.only.daftarB)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (!isGroupAdmins) return reply(mess.only.ownerG)
					if (args.length < 1) return reply('Coloque /antimenu para ver los comandos de activación de los antilinks')
					if (Number(args[0]) === 1) {
						if (isAntiWa) return reply('El antilink de Whatsapp ya esta activo')
						antiwa.push(from)
						fs.writeFileSync('./src/antidiscord.json', JSON.stringify(antiwa))
						reply('La funcion de antilink de Whatsapp esta habilitada en este grupo')
						client.sendMessage(from,`Desde ahora cualquier participante que envie un link de *Discord* a este grupo sera expulsado de inmediato\n\n_*Razones: Spam*_`, text)
					} else if (Number(args[0]) === 0) {
						antiwa.splice(from)
						fs.writeFileSync('./src/antidiscord.json', JSON.stringify(antiwa))
						reply('La funcion de antilink de Whatsapp esta deshabilitada en este grupo')
					} else {
						reply('Coloque /antimenu para ver los comandos de activación de los antilinks')
					}
					break
					
				case 'antidiscord':
                                        if (!isGroup) return reply(mess.only.group)
					if (!isUser) return reply(mess.only.daftarB)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (!isGroupAdmins) return reply(mess.only.ownerG)
					if (args.length < 1) return reply('Coloque /antimenu para ver los comandos de activación de los antilinks')
					if (Number(args[0]) === 1) {
						if (isAntiDiscord) return reply('El antilink de Instagram ya esta activo')
						antidiscord.push(from)
						fs.writeFileSync('./src/antidiscord.json', JSON.stringify(antidiscord))
						reply('La funcion de antilink de Discord esta habilitada en este grupo')
						client.sendMessage(from,`Desde ahora cualquier participante que envie un link de *Discord* a este grupo sera expulsado de inmediato\n\n_*Razones: Spam*_`, text)
					} else if (Number(args[0]) === 0) {
						antidiscord.splice(from)
						fs.writeFileSync('./src/antidiscord.json', JSON.stringify(antidiscord))
						reply('La funcion de antilink de Discord esta deshabilitada en este grupo')
					} else {
						reply('Coloque /antimenu para ver los comandos de activación de los antilinks')
					}
					break
				
				case 'antikwai':
                                        if (!isGroup) return reply(mess.only.group)
					if (!isUser) return reply(mess.only.daftarB)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (!isGroupAdmins) return reply(mess.only.ownerG)
					if (args.length < 1) return reply('Coloque /antimenu para ver los comandos de activación de los antilinks')
					if (Number(args[0]) === 1) {
						if (isAntiKwai) return reply('El antilink de Instagram ya esta activo')
						antikwai.push(from)
						fs.writeFileSync('./src/antinsta.json', JSON.stringify(antikwai))
						reply('La funcion de antilink de Kwai esta habilitada en este grupo')
						client.sendMessage(from,`Desde ahora cualquier participante que envie un link de *Kwai* o de su perfil para pedir likes o followers a este grupo sera expulsado de inmediato\n\n_*Razones: Spam*_`, text)
					} else if (Number(args[0]) === 0) {
						antikwai.splice(from)
						fs.writeFileSync('./src/antinsta.json', JSON.stringify(antikwai))
						reply('La funcion de antilink de Kwai esta deshabilitada en este grupo')
					} else {
						reply('Coloque /antimenu para ver los comandos de activación de los antilinks')
					}
					break
				
				case 'antinsta':
                                        if (!isGroup) return reply(mess.only.group)
					if (!isUser) return reply(mess.only.daftarB)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (!isGroupAdmins) return reply(mess.only.ownerG)
					if (args.length < 1) return reply('Coloque /antimenu para ver los comandos de activación de los antilinks')
					if (Number(args[0]) === 1) {
						if (isAntInsta) return reply('El antilink de Instagram ya esta activo')
						antinsta.push(from)
						fs.writeFileSync('./src/antinsta.json', JSON.stringify(antinsta))
						reply('La funcion de antilink de Instagram esta habilitada en este grupo')
						client.sendMessage(from,`Desde ahora cualquier participante que envie un link de *Instagram* o de su perfil para pedir likes o followers a este grupo sera expulsado de inmediato\n\n_*Razones: Spam*_`, text)
					} else if (Number(args[0]) === 0) {
						antinsta.splice(from)
						fs.writeFileSync('./src/antinsta.json', JSON.stringify(antinsta))
						reply('La funcion de antilink de Instagram esta deshabilitada en este grupo')
					} else {
						reply('Coloque /antimenu para ver los comandos de activación de los antilinks')
					}
					break
				
				
                                  case 'antitik':
                                        if (!isGroup) return reply(mess.only.group)
					if (!isUser) return reply(mess.only.daftarB)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (!isGroupAdmins) return reply(mess.only.ownerG)
					if (args.length < 1) return reply('Coloque /antimenu para ver los comandos de activación de los antilinks')
					if (Number(args[0]) === 1) {
						if (isAntiTik) return reply('El antilink de Tik Tok ya esta activo')
						antitik.push(from)
						fs.writeFileSync('./src/antitik.json', JSON.stringify(antitik))
						reply('La funcion de antilink de Tik Tok esta habilitada en este grupo')
						client.sendMessage(from,`Desde ahora cualquier participante que envia un link de *Tik Tok* o de su perfil a este grupo sera expulsado de inmediato\n\n_*Razones: Spam*_`, text)
					} else if (Number(args[0]) === 0) {
						antitik.splice(from)
						fs.writeFileSync('./src/antitik.json', JSON.stringify(antitik))
						reply('La funcion de antilink de Tik Tok esta deshabilitada en este grupo')
					} else {
						reply('Coloque /antimenu para ver los comandos de activación de los antilinks')
					}
					break 
				
				
				case 'antiface':
                                        if (!isGroup) return reply(mess.only.group)
					if (!isUser) return reply(mess.only.daftarB)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (!isGroupAdmins) return reply(mess.only.ownerG)
					if (args.length < 1) return reply('Coloque /antimenu para ver los comandos de activación de los antilinks')
					if (Number(args[0]) === 1) {
						if (isAntiFace) return reply('El antilink de facebook ya esta activo')
						antiface.push(from)
						fs.writeFileSync('./src/antiface.json', JSON.stringify(antiface))
						reply('La funcion de antilink de Facebook esta habilitada en este grupo')
						client.sendMessage(from,`Desde ahora cualquier participante que envia un link de *Facebook* o de alguna publicacion para pedir likes o grupos a este grupo sera expulsado de inmediato\n\n_*Razones: Spam*_`, text)
					} else if (Number(args[0]) === 0) {
						antiface.splice(from)
						fs.writeFileSync('./src/antiface.json', JSON.stringify(antiface))
						reply('La funcion de antilink de Facebook esta deshabilitada en este grupo')
					} else {
						reply('Coloque /antimenu para ver los comandos de activación de los antilinks')
					}
					break
				        
			       case 'antilink':
                                        if (!isGroup) return reply(mess.only.group)
					if (!isUser) return reply(mess.only.daftarB)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (!isGroupAdmins) return reply(mess.only.ownerG)
					if (args.length < 1) return reply('Coloque *antimenu para ver los comandos de activación de los antilinks')
					if (Number(args[0]) === 1) {
						if (isAntiLink) return reply('El antilink ya esta activo')
						antilink.push(from)
						fs.writeFileSync('./src/antilink.json', JSON.stringify(antilink))
						reply('La funcion de antilink de Grupos De Whatsapp esta habilitada en este grupo')
						client.sendMessage(from,`El antilink esta activo\n\nY solo los admins de este grupo podran pasar el enlace\n\nSi algun participante que no se admin envía un enlace de este grupo u otro grupo sera expulsado de este grupo de inmediato`, text)
					} else if (Number(args[0]) === 0) {
						antilink.splice(from)
						fs.writeFileSync('./src/antilink.json', JSON.stringify(antilink))
						reply('❬La funcion de antilink de Grupos De Whatsapp esta deshabilitada en este grupo')
					} else {
						reply('Coloque /antimenu para ver los comandos de activación de los antilinks')
					}
					break
			        
				
				//FIN DE ANTILINK HECHO POR DARLYN
				
//ADMINISTRACION DE GRUPOS
		                
case 'exe':
case 'bye':
if (!isGroup) return reply(mess.only.group)
if (!isOwner) return reply(mess.only.ownerB)
setTimeout( () => {
client.groupLeave (from) 
}, 2000)
setTimeout( () => {
client.updatePresence(from, Presence.composing) 
client.sendMessage(from, 'NO VEMOS MAMAGUEVAZOS😡🏑', text) // ur cods
}, 0)
break
       
case 'grupocr':
client.updatePresence(from, Presence.composing) 
options = {
text: `El creador de este grupo es: @${from.split("-")[0]}`, 
contextInfo: { mentionedJid: [from] }
}
client.sendMessage(from, options, text, { quoted: mek } )
break

case 'vete':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
setTimeout( () => {
client.groupLeave (from) 
}, 2000)
setTimeout( () => {
client.updatePresence(from, Presence.composing) 
client.sendMessage(from, 'NOS VEMOS MAMAGUEVAZOS😡🏑', text) // ur cods
}, 0)
break
					
                                      
                    case 'kick':
				    case 'pafuera':
					case'balazo':
					case 'alv':
					client.updatePresence(from, Presence.composing) 
					if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return reply(mess.only.ownerB)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Marca al que vamos a funar')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Pedido recibido jefe, Adios  puto :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
                                                }
						mentions(teks, mentioned, true)
						client.groupRemove(from, mentioned)
					} else {
						mentions(`Pedido recibido jefe, adios gil : @${mentioned[0].split('@')[0]}`, mentioned, true)
						client.groupRemove(from, mentioned)
					client.sendMessage(mentioned, 'Chao puta gorda', text)
					}
					break
					
					case 'sacar':
					client.updatePresence(from, Presence.composing) 
					if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return reply(mess.only.ownerB)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Marca al que vamos a funar')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Pedido recibido, adios a :\n'
						for (let _ of mentioned) {
                                                }
						mentions(teks, mentioned, true)
						client.groupRemove(from, mentioned)
					} else {
						mentions(`Pedido recibido jefe, Adios gil : @${mentioned[0].split('@')[0]}`, mentioned, true)
						client.groupRemove(from, mentioned)
					client.sendMessage(mentioned, 'Chao puta gorda', text)
					}
					break


case 'demote':
case 'adm-':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Flaco te falto agregar a la persona que voy a quitar el admin')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = ''
for (let _ of mentioned) {
teks += `Pedido recibido✅\n\nRetirando cargo como administrador :\n`
teks += `@_.split('@')[0]`
}
mentions(teks, mentioned, true)
client.groupDemoteAdmin(from, mentioned)
} else {
mentions(`Pedido recibido✅\n\nRetirando cargo como administrador @${mentioned[0].split('@')[0]}\n*${groupMetadata.subject}*_`, mentioned, true)
client.groupDemoteAdmin(from, mentioned)
}
break

case 'promote':
case 'adm+':
client.updatePresence(from, Presence.composing) 
if (!isUser) return reply(mess.only.daftarB)
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('A quien voy a dar admin??\n\n*Ejemplo:* ${prefix}promote @xxxxxxx')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Pedido recibido✅\n\nAgregando cargo como administrador :\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
client.groupMakeAdmin(from, mentioned)
} else {
mentions(`Pedido recibido✅\n\nAgregando cargo como administrador : @${mentioned[0].split('@')[0]}`, mentioned, true)
client.groupMakeAdmin(from, mentioned)
}
break				
				
case 'linkgc':
client.updatePresence(from, Presence.composing) 
if (!isGroup) return reply(mess.only.group)
if (!isUser) return reply(mess.only.daftarB)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
linkgc = await client.groupInviteCode (from)
yeh = `https://chat.whatsapp.com/${linkgc}\n\nLink de *${groupName}*`
client.sendMessage(from, yeh, text, {quoted: mek, detectLinks: false})
break

case 'closegc':
case 'cerrar':
client.updatePresence(from, Presence.composing) 
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
var nomor = mek.participant
const close = {
text: `Grupo cerrado por el administrador @${nomor.split("@s.whatsapp.net")[0]}\nAhora *solo los administradores* puede enviar mensajes`,
contextInfo: { mentionedJid: [nomor] }
}
client.groupSettingChange (from, GroupSettingChange.messageSend, true);
reply(close)
break
                
case 'opengc':  
case 'abrir':
client.updatePresence(from, Presence.composing) 
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
open = {
text: `Grupo abierto por el administrador @${sender.split("@")[0]}\nAhora *todos los participantes* pueden enviar mensajes`,
contextInfo: { mentionedJid: [sender] }
}
client.groupSettingChange (from, GroupSettingChange.messageSend, false)
client.sendMessage(from, open, text, {quoted: mek})
break
				                
case 'unir':
if (!isGroup) return reply(mess.only.group)
if (!isOwner) return reply(mess.only.ownerB)
if (args.length < 1) return reply('Para unir a una persona debes escribir el numero sin (+)\n\nEjemplo: *unir 52xxxxxxxxx')
if (args[0].startsWith('+')) return reply(mess.error.unire)
try {0
num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
client.groupAdd(from, [num])
} catch (e) {
console.log('Error:', e)
reply('No se pudo agregar el destino, tal vez porque es privado')
}
break
				
case 'fgc': 
reply(mess.foto)
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
media = await client.downloadAndSaveMediaMessage(mek)
await client.updateProfilePicture (from, media)
reply('*⌊✅⌉ El cambio de foto del grupo fue exitoso*')
break						
				
case 'ngc':
case 'name':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
client.groupUpdateSubject(from, `${body.slice(5)}`)
client.sendMessage(from, '*⌊✅⌉ El nombre del grupo fue cambiado*', text, {quoted: mek})
break

case 'dgc':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
client.groupUpdateDescription(from, `${body.slice(5)}`)
client.sendMessage(from, '*⌊✅⌉ La descripción del grupo fue cambiado*', text, {quoted: mek})
 break

case 'welcome':
if (!isGroup) return reply(mess.only.group)
if (!isUser) return reply(mess.only.daftarB)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isGroupAdmins) return reply(mess.only.Badmin)
if (args.length < 1) return reply('Para activar está funcion coloca *welcome 1')
if (Number(args[0]) === 1) {
if (isWelkom) return reply('Ya esta activada!!!')
welkom.push(from)
fs.writeFileSync('./database/json/welkom.json', JSON.stringify(welkom))
reply('❬ ✅ ❭ La funcion de bienvenida esta habilitada en este grupo')
} else if (Number(args[0]) === 0) {
welkom.splice(from)
fs.writeFileSync('./database/json/welkom.json', JSON.stringify(welkom))
reply('❬ ✅ ❭ La funcion de bienvenida esta deshabilitada en este grupo')
} else {
reply('Escribe el comando 1 para activarlo y 0 para desactivarlo Ejemplo: *welcome 1')
}
break	
					
case 'off':
if (!isOwner) return reply('Solo el jefe puede darme ordenes!')
if (!isOwner) return reply('Me apagare en 3 Segundos....')
await sleep(5000)
client.close()
break					
					
case 'restaurar':
if (!isOwner) return reply('Tu no eres el jefe para darme ordenesr!!')
if (!isOwner) return reply('*LA INFORMACION DE ESTE USUARIO SE RESTABLECERA PARA PODER USAR Y ESCANEAR EL CODIGO EN OTRO DISPOSITIVO*')
exec(`bash restore.sh`, (err, stdout) => {
if (err) return reply(err)
if (stdout) reply(stdout)
})					
break
                  case 'blackpink':
                  case 'rainbow2':
                  case 'water_pipe':
                  case 'halloween':
                  case 'sketch':
                  case 'sircuit':
                  case 'discovery':
                  case 'metallic2':
                  case 'fiction':
                  case 'demon':
                  case 'transformer':
                  case 'berry':
                  case 'thunder':
                  case 'magma':
                  case '3dstone':
                  case 'neon':
                  case 'glitch':
                  case 'harry_potter':
                  case 'embossed':
                  case 'broken':
                  case 'papercut':
                  case 'gradient':
                  case 'glossy':
                  case 'watercolor':
                  case 'multicolor':
                  case 'neon_devil':
                  case 'underwater':
                  case 'bear':
                  case 'wonderfulg':
                  case 'christmas':
                  case 'neon_light':
                  case 'snow':
                  case 'cloudsky':
                  case 'luxury2':
                  case 'gradient2':
                  case 'summer':
                  case 'writing':
                  case 'engraved':
                  case 'summery':
                  case '3dglue':
                  case 'metaldark':
                  case 'neonlight':
                  case 'oscar':
                  case 'minion':
                  case 'holographic':
                  case 'purple':
                  case 'glossyb':
                  case 'deluxe2':
                  case 'glossyc':
                  case 'fabric':
                  case 'neonc':
                  case 'newyear':
                  case 'newyear2':
                  case 'metals':
                  case 'xmas':
                  case 'blood':
                  case 'darkg':
                  case 'joker':
                  case 'wicker':
                  case 'natural':
                  case 'firework':
                  case 'skeleton':
                  case 'balloon':
                  case 'balloon2':
                  case 'balloon3':
                  case 'balloon4':
                  case 'balloon5':
                  case 'balloon6':
                  case 'balloon7':
                  case 'steel':
                  case 'gloss':
                  case 'denim':
                  case 'decorate':
                  case 'decorate2':
                  case 'peridot':
                  case 'rock':
                  case 'glass':
                  case 'glass2':
                  case 'glass3':
                  case 'glass4':
                  case 'glass5':
                  case 'glass6':
                  case 'glass7':
                  case 'glass8':
                  case 'captain_as2':
                  case 'robot':
                  case 'equalizer':
                  case 'toxic':
                  case 'sparkling':
                  case 'sparkling2':
                  case 'sparkling3':
                  case 'sparkling4':
                  case 'sparkling5':
                  case 'sparkling6':
                  case 'sparkling7':
                  case 'decorative':
                  case 'chocolate':
                  case 'strawberry':
                  case 'koifish':
                  case 'bread':
                  case 'matrix':
                  case 'blood2':
                  case 'neonligth2':
                  case 'thunder2':
                  case '3dbox':
                  case 'neon2':
                  case 'roadw':
                  case 'bokeh':
                  case 'gneon':
                  case 'advanced':
                  case 'dropwater':
                  case 'wall':
                  case 'chrismast':
                  case 'honey':
                  case 'drug':
                  case 'marble':
                  case 'marble2':
                  case 'ice':
                  case 'juice':
                  case 'rusty':
                  case 'abstra':
                  case 'biscuit':
                  case 'wood':
                  case 'scifi':
                  case 'metalr':
                  case 'purpleg':
                  case 'shiny':
                  case 'jewelry':
                  case 'jewelry2':
                  case 'jewelry3':
                  case 'jewelry4':
                  case 'jewelry5':
                  case 'jewelry6':
                  case 'jewelry7':
                  case 'jewelry8':
                  case 'metalh':
                  case 'golden':
                  case 'glitter':
                  case 'glitter2':
                  case 'glitter3':
                  case 'glitter4':
                  case 'glitter5':
                  case 'glitter6':
                  case 'glitter7':
                  case 'metale':
                  case 'carbon':
                  case 'candy':
                  case 'metalb':
                  case 'gemb':
                  case '3dchrome':
                  case 'metalb2':
                 if (isBanned) return  reply(mess.banned)
                 if (args.length < 1) return reply('Falta el texto')
                 texto = args.join(" ")
                 reply(mess.wait)
                         try {
                 let textpro2 = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/${command}?apikey=${alphakey}&text=${texto}`)
                         cnf.sendMessage(from, textpro2, image, {quoted: mek})
                              } catch {
                            reply('Lo siento ah ocurrido un error')
                            }
                         break
					case 'hacknum':
if (isBanned) return  reply(mess.banned)         

numero = `${args[0].replace('@', '')}`

uwus = ['```']

	anu = await fetchJson(`http://apilayer.net/api/validate?access_key=0037494de576f1341eb310a420dd5cb0&number=${numero}&country_code=&format=1`)

reply(`Numero : ${anu.number}

Formato local : ${anu.local_format}

Formato internacional : ${anu.international_format}

Prefijo de pais : ${anu.country_prefix}

Codigo de pais : ${anu.country_code}

Nombre de pais : ${anu.country_name}

Localización : ${anu.location}

Empresa : ${anu.carrier}

Tipo de línea : ${anu.line_type}`)

break
case 'simi':
  case 'preg':
    case 'pr':
      case 'pregunta':
        case 'bot':
teks = args.join(' ');
anu = await fetchJson(`https://api-alc.herokuapp.com/api/other/simi?text=${teks}&apikey=ConfuMods`)
res = anu.result;
reply(res)
break
case 'frase':
case 'frases':
if (isBanned) return  reply(mess.banned)
anu = await fetchJson(`https://api-alc.herokuapp.com/api/other/frases?apikey=${confukey}`)
reply(`Frase : ${anu.frase}
By : ${anu.by}`)
break
					case 'wattpad':
	if (isBanned) return  reply(mess.banned)
   if (args.length === 0) return reply(`*Ingrese el titulo de la cancion/video que desea que busque:)*`) 
	search = args.join(" ")
  anu = await fetchJson(`https://api-alc.herokuapp.com/api/search/wattpad?query=${search}&apikey=${confukey}`)
	  wttsrch = `*---- 「 WATTPAD SEARCH 」----*
  • Titulo : ${anu.result[0].judul}
  • Lectores : ${anu.result[0].dibaca}
  • Link : ${anu.result[0].url}
  • Desc : ${anu.result[0].description}`
  var buffer = await getBuffer(anu.result[0].thumb)
				client.sendMessage(from, buffer, image, {quoted: mek, caption: wttsrch})                  
  break
					 case 'creditos':  
  if (isBanned) return  reply(mess.banned)           
	  hmm4 = fs.readFileSync(`./cnf.jpg`)
  imeu = await client.prepareMessage('0@s.whatsapp.net', hmm4, image)
  imeg = imeu.message.imageMessage
  res = await client.prepareMessageFromContent(from,{
	"productMessage": {
	"product": {
	"productImage": imeg,
	"productId": "4626803044093248", 
	"title": '•८≛ 𝓓𝓪𝓻𝓵𝔂𝓷 𔐬☆᤻᤻[𝓼𝓮𝔁]ᶤ🌹 ᵇᵒᵗ ²',
  "description": 'Remasterized by Darlyn',
  "priceAmount1000": "99999999",
  "descriptionCount": "999999999",
	"productImageCount": "1",
	},
	"businessOwnerJid": "51956570030@s.whatsapp.net",
	"contextInfo": {
	"forwardingScore": 9999,
	"isForwarded": true
	}
	}
	}, {quoted: {
			key: {
			 fromMe: false,
			 participant: `0@s.whatsapp.net`, 
			 remoteJid: "status@broadcast"
			},
			message: {
			 orderMessage: {
			  itemCount: 999999999, 
			  status: 1,
			  surface: 1,
			  message: '999999999',
			  orderTitle: '999999999', 
			  sellerJid: `0@s.whatsapp.net` 
			 }
			}
		   }
		  })
	client.relayWAMessage(res)
	break
case 'actualizar':
case 'update':
if (!isOwner) return reply('Solo el jefe puede darme ordenes!')
reply('*ACTUALIZANDO LA BASE DE DATOS, POR FAVOR ESPERE...*')
exec(`bash update.sh`, (err, stdout) => {
if (err) return reply(err)
if (stdout) reply(`*YA ESTOY ACTUALIZADO*.✅`)
})
break					
					
					
//FIN DE ADMINISTRACION DE GRUPOS				
				
				
				
//CREACION DE STICKERS Y VARIOS				
				
				case 's':
				case 'stiker':
				case 'sticker':
				case 'stickergif':
				case 'stikergif':
				case 'sofi':
				case 'dar':
			        if (!isUser) return reply(mess.only.daftarB)
				if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
                                                if (!isUser) return reply(mess.only.daftarB)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(mess.error.stick)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ${addMetadata(pack, author)} ${ran} -o ${ran}`, async (error) => {
									 if (error) {    
										         fs.unlinkSync(media)	
											 fs.unlinkSync(ran)
											 }
									client.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
									fs.unlinkSync(media)	
									fs.unlinkSync(ran)	
								})
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
						} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						reply(mess.only.pegatina)
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(`[❗] Fallo, al momento de convertir la imagen a sticker`)
							})
							.on('end', function () {
								console.log('Finish')
							        exec(`webpmux -set exif ${addMetadata(pack, author)} ${ran} -o ${ran}`, async (error) => {
									if (error) {
											 fs.unlinkSync(media)	
											 fs.unlinkSync(ran)
											 }
								buff = fs.readFileSync(ran)
								client.sendMessage(from, buff, sticker)
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
						})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
						}
						break
					
					case 'attp':
						if (!isUser) return reply(mess.only.daftarB)
					        if (args.length < 1) return reply(`¿Dónde está el texto?\n*Ejemplo:* ${prefix}attp Darlyn`)
						reply(mess.only.attp)
					        attp2 = await getBuffer(`https://api.xteam.xyz/attp?file&text=${body.slice(6)}`)
						client.sendMessage(from, attp2, MessageType.sticker, {quoted: mek})
						break
					
			          case 'qrcode':
                buff = await getBuffer(`https://api.qrserver.com/v1/create-qr-code/?data=${body.slice(8)}&size=1080%C3%971080`)
				client.sendMessage(from, buff, image, {quoted: mek})
				break  
				
				case 'toimg':
				    client.updatePresence(from, Presence.composing)
                                    if (!isUser) return reply(mess.only.daftarB)
					if (!isQuotedSticker) return reply('❌ Solo stickers')
					reply(mess.only.imgs)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('❗ No se pudo convertir el sticker en imágenes')
						buffer = fs.readFileSync(ran)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Imagen convertida'})
						fs.unlinkSync(ran)
					})
					break
                        case 'tomp3':
                	client.updatePresence(from, Presence.composing) 
                        if (!isUser) return reply(mess.only.daftarB)
					if (!isQuotedVideo) return reply('❗ Solo videos')
					reply(mess.only.mpcancion)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp4')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('❗ No se pudo convertir el video a mp3')
						buffer = fs.readFileSync(ran)
						client.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', quoted: mek})
						fs.unlinkSync(ran)
					})
					break
//CREACION DE STICKERS Y VARIOS	            
		
	//SERVICIO DE MUSICA Y VIDEO 			
				
				
	        case 'play':   
	        if (args.length < 1) return reply('Donde esta el nombre de la canción?\n\nEjemplo: /play Industry Baby - Lil Nas X')
		if (!isUser) return reply(mess.only.daftarB)
                reply(mess.only.musica)
                play = body.slice(5)
                anu = await fetchJson(`https://api.zeks.me/api/ytplaymp3?q=${play}&apikey=22hamilton`)
                if (anu.error) return reply(anu.error)
                infomp3 = `*⌜Cancion Encontrada ✅⌟*\n◉ *Título:* ${anu.result.title}\n◉ *Fuente:* ${anu.result.source}\n◉ *Tamaño:* ${anu.result.size}\n\n*ESPERE ENVIANDO SU ARCHIVO MP3 ⚠`
                buffer = await getBuffer(anu.result.thumbnail)
                lagu = await getBuffer(anu.result.url_audio)
                client.sendMessage(from, buffer, image, {quoted: mek, caption: infomp3})
                client.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', filename: `${anu.title}.mp3`, quoted: mek})
                break
		
		case 'play2':   
	        if (args.length < 1) return reply('Donde esta el nombre de la canción?\n\nEjemplo: /play2 Industry Baby - Lil Nas X')
		if (!isUser) return reply(mess.only.daftarB)
	        reply(mess.only.musica2)
                play = body.slice(5)
                anu = await fetchJson(`https://api.zeks.me/api/ytplaymp3?q=${play}&apikey=22shanduy`)
                if (anu.error) return reply(anu.error)
                infomp3 = `*⌜Cancion Encontrada ✅⌟*\n◉ *Título:* ${anu.result.title}\n◉ *Fuente:* ${anu.result.source}\n◉ *Tamaño:* ${anu.result.size}\n\n*ESPERE ENVIANDO SU ARCHIVO MP3 ⚠`
                buffer = await getBuffer(anu.result.thumbnail)
                lagu = await getBuffer(anu.result.url_audio)
                client.sendMessage(from, buffer, image, {quoted: mek, caption: infomp3})
                client.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', filename: `${anu.title}.mp3`, quoted: mek})
                break
                                
		case 'ytmp4':
		if (args.length < 1) return reply('Donde esta la url del video?\n\nEjemplo: *ytmp4 www.youtube.com/xxxxxxxxx')
		if (!isUser) return reply(mess.only.daftarB)
		reply(mess.only.mpv)
		if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
		anu = await fetchJson(`https://api.zeks.me/api/ytmp4?apikey=${apikey}&url=${args[0]}`, {method: 'get'})
		if (anu.error) return reply(anu.error.yt)
		teks = `*⌜Video Encontrado ✅⌟*\n◉ *Título:* ${anu.result.title} \n◉ *Tamaño:* ${anu.result.size}\n\n*ESPERE ENVIANDO SU ARCHIVO MP4 ⚠`
		lagu = await getBuffer(anu.result.thumbnail)
                client.sendMessage(from, lagu, image, {quoted: mek, caption: teks})
		buffer = await getBuffer(anu.result.url_video)
		client.sendMessage(from, buffer, video, {mimetype: 'video/mp4', filename: `${anu.result.title}.mp4`, quoted: mek})
		break
					
														
	//FIN DE SERVICIO DE MUSICA Y VIDEO			
				
//REGISTRO				

case 'daftar':
case 'reg':
case 'rg':
case 'verify':
case 'registrar':					
client.updatePresence(from, Presence.composing)
if (isUser) return reply('Ya estas registrado weon')
if (args.length < 1) return reply(`Incorrecto ❎\nComando: ${prefix}daftar Nombre\n\nEjemplo: ${prefix}daftar darlyn`)
var reg = body.slice(8)
var nombre = reg.split("|")[0];
user.push(sender)
fs.writeFileSync('./database/json/user.json', JSON.stringify(user))
client.sendMessage(from, ` 「*REGISTRADO* 」─\n\ ▢ *Nombre:* ${nombre}\n ▢ *Número:* wa.me/${sender.split("@")[0]}\n\ ▢ *Hora:* ${time}\n ▢ *Usuarios Verificados:* ${user.length} \n└────「 *☠Dar-Bot☠*──\n\n Registro completo usa ${prefix}help para ver el menu y leer el resto de comandos`, text, {quoted: mek})
break
                                
//FIN DE REGISTRO  
				
				case 'nsfwneko':
				    try{
						if (!isNsfw) return reply('❌ *NSFW NO ESTA ACTIVADO* ❌')
                                                if (!isUser) return reply(mess.only.daftarB)
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/nsfwneko?apikey=BotWeA`, {method: 'get'})
						buffer = await getBuffer(res.result)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: 'mesum'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('❌ *ERROR* ❌')
					}
					break
                              	case 'nsfw':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Digita 1 para activar los NSFW')
					if (Number(args[0]) === 1) {
						if (isNsfw) return reply('Recursos Activados ✅')
						nsfw.push(from)
						fs.writeFileSync('./database/json/nsfw.json', JSON.stringify(nsfw))
						reply('❬ ✅ ❭ La funcion NSFW esta habilitado en este grupo')
					} else if (Number(args[0]) === 0) {
						nsfw.splice(from, 1)
						fs.writeFileSync('./database/json/nsfw.json', JSON.stringify(nsfw))
						reply('❬ ✅ ❭ La funcion NSFW esta deshabilitado en este grupo')
					} else {
						reply('Digite 1 para activarlo, 0 para desactivarlo')
					}
					break	
				case 'waifu':
					gatauda = body.slice(7)
					reply(mess.wait)
                                        if (!isUser) return reply(mess.only.daftarB)
					anu = await fetchJson(`https://arugaz.my.id/api/nekonime`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image,{quoted: mek})
					break
				case 'randomanime':
					gatauda = body.slice(13)
					reply(mess.wait)
                                        if (!isUser) return reply(mess.only.daftarB)
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/randomanime?apikey=BotWeA`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, {quoted: mek})
					break						
                             case 'delete':
					case 'del':
					if (!isGroup)return reply(mess.only.group)
                                        if (!isUser) return reply(mess.only.daftarB)
		                        client.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
					break
                 case 'level':
                if (!isLevelingOn) return reply(mess.levelnoton)
                if (!isGroup) return reply(mess.only.group)
                const userLevel = getLevelingLevel(sender)
                const userXp = getLevelingXp(sender)
		sem = sender.replace('@s.whatsapp.net','')
		if (userLevel === undefined && userXp === undefined) return reply(mess.levelnol)
                resul = `『 *TUS ESTADISTICAS 🆙* 』\n\nTus estadisticas en tiempo real 🕐\n\n├─ ❏ *NOMBRE:* ${sem}\n├─ ❏ *XP 🆙:* ${userXp}\n└─ ❏ *NIVEL:* ${userLevel}`
               client.sendMessage(from, resul, text, { quoted: mek})
                .catch(async (err) => {
                        console.error(err)
                        await reply(`Error!\n${err}`)
                    })
            break
				
            case 'leveling':
                if (!isGroup) return reply(mess.only.group)
                if (!isGroupAdmins) return reply(mess.only.admin)
                if (args.length < 1) return reply('Digita *leveling 1 para activar este recurso')
                if (args[0] === '1') {
                    if (isLevelingOn) return reply('*La función de nivel ya estaba activa*')
                    _leveling.push(groupId)
                    fs.writeFileSync('./database/json/leveling.json', JSON.stringify(_leveling))
                     reply(mess.levelon)
                } else if (args[0] === '0') {
                    _leveling.splice(groupId, 1)
                    fs.writeFileSync('./database/json/leveling.json', JSON.stringify(_leveling))
                     reply(mess.leveloff)
                } else {
                    reply(` *Digita el comando 1 para activar, 0 para desactivar *\n * Ejemplo: ${prefix}leveling 1*`)
                }
            break
                                /*case 'nsfwtrap':
                                        try{
                                                if (!isNsfw) return reply('❌ *NSFW Desactivado* ❌')
                                                if (!isUser) return reply(mess.only.daftarB)
                                                res = await fetchJson(`https://tobz-api.herokuapp.com/api/nsfwtrap?apikey=APIKEYLU`, {method: 'get'})
                                                buffer = await getBuffer(res.result)
                                                client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Estas enfermo flaco NEFASTOOOOO'})
                                        } catch (e) {
                                                console.log(`*Error* :`, color(e,'red'))
                                                reply('❌ *ERROR* ❌')
                                        }
										break*/
										case 'randomhentaio': 
						try {
							if (!isNsfw) return reply('❌ *NSFW Desactivado* ❌')
							res = await fetchJson(`https://tobz-api.herokuapp.com/api/hentai?apikey=BotWeA`, {method: 'get'})
							buffer = await getBuffer(res.result)
							client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Otaku que se esperaba'})
						} catch (e) {
							console.log(`Error :`, color(e,'red'))
							reply('❌ *ERROR* ❌')
						}
						break
					/*case 'nsfwloli':
						try {
							if (!isNsfw) return reply('❌ *NSFW Desactivado* ❌')
							res = await fetchJson(`https://api.lolis.life/random?nsfw=true`, {method: 'get'})
							buffer = await getBuffer(res.url)
							client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Alto pedofilo socio'})
						} catch (e) {
							console.log(`Error :`, color(e,'red'))
							reply('❌ *ERROR* ❌')
						}
						break*/
					case 'nsfwbobs': 
						try {
							if (!isNsfw) return reply('❌ *NSFW Desactivado* ❌')
							res = await fetchJson(`https://meme-api.herokuapp.com/gimme/biganimetiddies`, {method: 'get'})
							buffer = await getBuffer(res.url)
							client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Quiero ver tetas'})
						} catch (e) {
							console.log(`Error :`, color(e,'red'))
							reply('❌ *ERROR* ❌')
						}
						break
					case 'nsfwblowjob':
						try {
							if (!isNsfw) return reply('❌ *NSFW Desactivado* ❌')
							res = await fetchJson(`https://tobz-api.herokuapp.com/api/nsfwblowjob`, {method: 'get'})
							buffer = await getBuffer(res.result)
							client.sendMessage(from, buffer, image, {quoted: mek, caption: 'No antojen'})
						} catch (e) {
							console.log(`Error :`, color(e,'red'))
							reply('❌ *ERROR* ❌')
						}
						break
					case 'nsfwneko':
						try {
							if (!isNsfw) return reply('❌ *NSFW Desactivado* ❌')
							res = await fetchJson(`https://api.computerfreaker.cf/v1/neko`, {method: 'get'})
							buffer = await getBuffer(res.result)
							client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Pero que wea?'})
						} catch (e) {
							console.log(`Error :`, color(e,'red'))
							reply('❌ *ERROR* ❌')
						}
						break
					/*case 'nsfwyuri':
						try {
							if (!isNsfw) return reply('❌ *NSFW Desactivado* ❌')
							res = await fetchJson(`https://api.computerfreaker.cf/v1/yuri`, {method: 'get'})
							buffer = await getBuffer(res.result)
							client.sendMessage(from, buffer, image, {quoted: mek, caption: 'NEFASTOOOOOOO'})
						} catch (e) {
							console.log(`Error :`, color(e,'red'))
							reply('❌ *ERROR* ❌')
						}
					break*/
				case 'nsfwass':
						try {
							if (!isNsfw) return reply('❌ *NSFW Desactivado* ❌')
							res = await fetchJson(`'https://meme-api.herokuapp.com/gimme/animebooty`, {method: 'get'})
							buffer = await getBuffer(res.url)
							client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Ese es el culo que querías?'})
						} catch (e) {
							console.log(`Error :`, color(e,'red'))
							reply('❌ *ERROR* ❌')
						}
						break
					case 'nsfwsidebobs':
						try {
							if (!isNsfw) return reply('❌ *NSFW Desactivado* ❌')
							res = await fetchJson(`https://meme-api.herokuapp.com/gimme/sideoppai`, {method: 'get'})
							buffer = await getBuffer(res.url)
							client.sendMessage(from, buffer, image, {quoted: mek, caption: 'La vieja de gabo, tremenda puta'})
						} catch (e) {
							console.log(`Error :`, color(e,'red'))
							reply('❌ *ERROR* ❌')
						}
					    break
					case 'nsfwahegao':
						try {
							if (!isNsfw) return reply('❌ *NSFW Desactivado* ❌')
							res = await fetchJson(`https://meme-api.herokuapp.com/gimme/ahegao`, {method: 'get'})
							buffer = await getBuffer(res.url)
							client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Joder, quisiera follarmela'})
						} catch (e) {
							console.log(`Error :`, color(e,'red'))
							reply('❌ *ERROR* ❌')
						}
						break
					case 'nsfwthighs':
						try {
							if (!isNsfw) return reply('❌ *NSFW Desactivado* ❌')
							res = await fetchJson(`https://meme-api.herokuapp.com/gimme/animethighss`, {method: 'get'})
							buffer = await getBuffer(res.url)
							client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Por que muslos?'})
						} catch (e) {
							console.log(`Error :`, color(e,'red'))
							reply('❌ *ERROR* ❌')
						}
						break
					case 'nsfwfeets':
						try {
							if (!isNsfw) return reply('❌ *NSFW Desactivado* ❌')
							res = await fetchJson(`https://meme-api.herokuapp.com/gimme/animefeets`, {method: 'get'})
							buffer = await getBuffer(res.url)
							client.sendMessage(from, buffer, image, {quoted: mek, caption: 'MMMMM PATAS'})
						} catch (e) {
							console.log(`Error :`, color(e,'red'))
							reply('❌ *ERROR* ❌') 
						}
						break
					case 'nsfwarmpits':
						try {
							if (!isNsfw) return reply('❌ *NSFW Desactivado* ❌')
							res = await fetchJson(`https://meme-api.herokuapp.com/gimme/animearmpits`, {method: 'get'})
							buffer = await getBuffer(res.url)
							client.sendMessage(from, buffer, image, {quoted: mek, caption: 'A?'})
						} catch (e) {
							console.log(`Error :`, color(e,'red'))
							reply('❌ *ERROR* ❌')
						}
						break
						case 'nsfwtoin':
						try {
							if (!isNsfw) return reply('❌ *NSFW Desactivado* ❌')
							res = await fetchJson(`https://tobz-api.herokuapp.com/nsfwtrap?apikey=BotWeA`, {method: 'get'})
							buffer = await getBuffer(res.url)
							client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Bro....'})
						} catch (e) {
							console.log(`Error :`, color(e,'red'))
							reply('❌ *ERROR* ❌')
						}
						break
                                case 'ping':
                                case 'velocidad':
			   	        if (!isUser) return reply(mess.only.userB)
                                        const timestamp = speed();
                                        const latensi = speed() - timestamp
                                        client.updatePresence(from, Presence.composing) 
				        uptime = process.uptime()
                                        client.sendMessage(from, `Velocidad: ${latensi.toFixed(4)} Second`, text, { quoted: mek})
                                        break
                                case 'ttp':
					if (args.length < 1) return reply('Y el texto flaco?')
					ranp = getRandom('.png')
					rano = getRandom('.webp')
					teks = body.slice(4).trim()
					anu = await fetchJson(`https://mhankbarbar.tech/api/text2image?text=${teks}&apiKey=${BarBarKey}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						client.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					break

                default:
                
	        if (budy.includes(`sexo`)) {
                  reply(`¿Pasan o paso?`)
                  }
                
		if (budy.includes(`Hola`)) {
                reply(`Hola, ¿Cómo estás?`)
                }

		if (budy.includes(`Bot`)) {
                  reply(`Eu, ¿Qué quieres?`)
                  }

		if (budy.includes(`hola`)) {
                  reply(`Hola, ¿Cómo estás?`)
                  }
					
		if (budy.includes(`Sexo`)) {
                  reply(`¿Pasan o paso?`)
                  }
                 
		if (budy.includes(`Gracias`)) {
                  reply(`De nada :D`)
                  }
		  
		  if (budy.includes(`bot`)) {
                  reply(`Eu, ¿Qué quieres?`)
                  }
/////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////	
	if (budy.startsWith(`Itzy`)) {
        const none = fs.readFileSync('./mp3/loco.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
	if (budy.startsWith(`Sad`)) {
        const none = fs.readFileSync('./mp3/nostalgia.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
	if (budy.startsWith(`Pillowtalk`)) {
        const none = fs.readFileSync('./mp3/PILLOWTALK.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
	if (budy.startsWith(`Twice`)) {
        const none = fs.readFileSync('./mp3/Feel Special.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
	if (budy.startsWith(`kkk`)) {
        const none = fs.readFileSync('./mp3/Parado no Bailão.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
	if (budy.startsWith(`Pene`)) {
        const none = fs.readFileSync('./mp3/INTERNET.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }

//STICKER AUTOMATICOS

                        /*if (budy.includes(`Bot`)){
			            client.updatePresence(from, Presence.composing)
		            	rm = [
		              	result = fs.readFileSync(`./mp3/sticker/fua.webp`),
			            result1 = fs.readFileSync(`./mp3/sticker/ryujin.webp`),
		             	result2 = fs.readFileSync(`./mp3/sticker/jenniedark.webp`),
			            result3 = fs.readFileSync(`./mp3/sticker/icon2.webp`),
			            result4 = fs.readFileSync(`./mp3/sticker/icon3.webp`),
                        result5 = fs.readFileSync(`./mp3/sticker/icon4.webp`),
		                result6 = fs.readFileSync(`./mp3/sticker/Darlyn.webp`),
                        result7 = fs.readFileSync(`./mp3/sticker/Darlyn1.webp`),
                        result8 = fs.readFileSync(`./mp3/sticker/Darlyn2.webp`),
                        result9 = fs.readFileSync(`./mp3/sticker/Darlyn3.webp`),
                        result10 = fs.readFileSync(`./mp3/sticker/Darlyn4.webp`),
                        result11 = fs.readFileSync(`./mp3/sticker/Darlyn4.webp`),
                        result12 = fs.readFileSync(`./mp3/sticker/Darlyn5.webp`),
                        result13 = fs.readFileSync(`./mp3/sticker/Darlyn6.webp`),
                        result14 = fs.readFileSync(`./mp3/sticker/Darlyn7.webp`),
                        result15 = fs.readFileSync(`./mp3/sticker/Darlyn8.webp`),
                        result16 = fs.readFileSync(`./mp3/sticker/Darlyn9.webp`),
                        result17 = fs.readFileSync(`./mp3/sticker/Darlyn10.webp`),
                        result18 = fs.readFileSync(`./mp3/sticker/Darlyn11.webp`),
                        result19 = fs.readFileSync(`./mp3/sticker/Darlyn12.webp`),
                        result20 = fs.readFileSync(`./mp3/sticker/Darlyn13.webp`),
                        result21 = fs.readFileSync(`./mp3/sticker/Darlyn14.webp`),
	                    result22 = fs.readFileSync(`./mp3/sticker/Darlyn15.webp`),
	                   result23 = fs.readFileSync(`./mp3/sticker/Darlyn16.webp`),
	                   result24 = fs.readFileSync(`./mp3/sticker/Darlyn17.webp`),
			           ]
			           nk = rm[Math.floor(Math.random() * rm.length)]
	            		client.sendMessage(from, nk, sticker)
		            	}
		            	if (budy.includes(`bot`)){
                        client.updatePresence(from, Presence.composing)
                        rm = [
                        result = fs.readFileSync(`./mp3/sticker/Darlyn.webp`),
                        result1 = fs.readFileSync(`./mp3/sticker/Darlyn1.webp`),
                        result2 = fs.readFileSync(`./mp3/sticker/Darlyn2.webp`),
                        result3 = fs.readFileSync(`./mp3/sticker/Darlyn3.webp`),
                        result4 = fs.readFileSync(`./mp3/sticker/Darlyn4.webp`),
                        result5 = fs.readFileSync(`./mp3/sticker/Darlyn4.webp`),
                        result6 = fs.readFileSync(`./mp3/sticker/Darlyn5.webp`),
                        result7 = fs.readFileSync(`./mp3/sticker/Darlyn6.webp`),
                        result8 = fs.readFileSync(`./mp3/sticker/Darlyn7.webp`),
                        result9 = fs.readFileSync(`./mp3/sticker/Darlyn8.webp`),
                        result10 = fs.readFileSync(`./mp3/sticker/Darlyn9.webp`),
                        result11 = fs.readFileSync(`./mp3/sticker/Darlyn10.webp`),
                        result12 = fs.readFileSync(`./mp3/sticker/Darlyn11.webp`),
                        result13 = fs.readFileSync(`./mp3/sticker/Darlyn12.webp`),
                        result14 = fs.readFileSync(`./mp3/sticker/Darlyn13.webp`),
                        result15 = fs.readFileSync(`./mp3/sticker/Darlyn14.webp`),
	                    result16 = fs.readFileSync(`./mp3/sticker/Darlyn15.webp`),
	                    result17 = fs.readFileSync(`./mp3/sticker/Darlyn16.webp`),
	                     result18 = fs.readFileSync(`./mp3/sticker/Darlyn17.webp`),
                        ]
                        nk = rm[Math.floor(Math.random() * rm.length)]
                        client.sendMessage(from, nk, sticker)
                        }
					
			            if (budy.includes(`hola`)){
                        client.updatePresence(from, Presence.composing)
                        rm = [
                        result = fs.readFileSync(`./mp3/sticker/sofi.webp`),
                        result1 = fs.readFileSync(`./mp3/sticker/sofi1.webp`),
                        result2 = fs.readFileSync(`./mp3/sticker/sofi2.webp`),
                        result3 = fs.readFileSync(`./mp3/sticker/sofi3.webp`),
                        result4 = fs.readFileSync(`./mp3/sticker/sofi4.webp`),     
                        result5 = fs.readFileSync(`./mp3/sticker/sofi5.webp`),
                        result6 = fs.readFileSync(`./mp3/sticker/sofi6.webp`),
                        result7 = fs.readFileSync(`./mp3/sticker/sofi7.webp`),
                        result8 = fs.readFileSync(`./mp3/sticker/sofi8.webp`),
                        result9 = fs.readFileSync(`./mp3/sticker/sofi9.webp`),
                        result10 = fs.readFileSync(`./mp3/sticker/sofi10.webp`),
                        ]
                        nk = rm[Math.floor(Math.random() * rm.length)]
                        client.sendMessage(from, nk, sticker)
                        }
					
			            if (budy.includes(`Hola`)){
                        client.updatePresence(from, Presence.composing)
                        rm = [
                        result = fs.readFileSync(`./mp3/sticker/sofi.webp`),
                        result1 = fs.readFileSync(`./mp3/sticker/sofi1.webp`),
                        result2 = fs.readFileSync(`./mp3/sticker/sofi2.webp`),
                        result3 = fs.readFileSync(`./mp3/sticker/sofi3.webp`),
                        result4 = fs.readFileSync(`./mp3/sticker/sofi4.webp`),     
                        result5 = fs.readFileSync(`./mp3/sticker/sofi5.webp`),
                        result6 = fs.readFileSync(`./mp3/sticker/sofi6.webp`),
                        result7 = fs.readFileSync(`./mp3/sticker/sofi7.webp`),
                        result8 = fs.readFileSync(`./mp3/sticker/sofi8.webp`),
                        result9 = fs.readFileSync(`./mp3/sticker/sofi9.webp`),
                        result10 = fs.readFileSync(`./mp3/sticker/sofi10.webp`),
                        ]
                        nk = rm[Math.floor(Math.random() * rm.length)]
                        client.sendMessage(from, nk, sticker)
                        }
                       
                        if (budy.includes(`sexo`)){
                        client.updatePresence(from, Presence.composing)
                        rm = [
                        result = fs.readFileSync(`./mp3/sticker/da.webp`),
                        result1 = fs.readFileSync(`./mp3/sticker/da2.webp`),
                        result2 = fs.readFileSync(`./mp3/sticker/da3.webp`),
                        result3 = fs.readFileSync(`./mp3/sticker/da4.webp`),
                        result4 = fs.readFileSync(`./mp3/sticker/da4.webp`),
                        result5 = fs.readFileSync(`./mp3/sticker/da5.webp`),
                        result6 = fs.readFileSync(`./mp3/sticker/da6.webp`),
                        result7 = fs.readFileSync(`./mp3/sticker/da7.webp`),
                        result8 = fs.readFileSync(`./mp3/sticker/da8.webp`),
                        result9 = fs.readFileSync(`./mp3/sticker/da9.webp`),
                        result10 = fs.readFileSync(`./mp3/sticker/da10.webp`),
                        result11 = fs.readFileSync(`./mp3/sticker/da11.webp`),
			            result12 = fs.readFileSync(`./mp3/sticker/sd1.webp`),
                        result13 = fs.readFileSync(`./mp3/sticker/sd2.webp`),
                        result14 = fs.readFileSync(`./mp3/sticker/sd3.webp`),
                        result15 = fs.readFileSync(`./mp3/sticker/sd4.webp`),
                        result16 = fs.readFileSync(`./mp3/sticker/sd5.webp`),
                        result17 = fs.readFileSync(`./mp3/sticker/sd6.webp`),
                        result18 = fs.readFileSync(`./mp3/sticker/sd7.webp`),
                        result19 = fs.readFileSync(`./mp3/sticker/sd8.webp`),
                        result20 = fs.readFileSync(`./mp3/sticker/sd9.webp`),
                        result21 = fs.readFileSync(`./mp3/sticker/sd10.webp`),
	                    result22 = fs.readFileSync(`./mp3/sticker/sd11.webp`),
	                    result23 = fs.readFileSync(`./mp3/sticker/sd12.webp`),
	                    result24 = fs.readFileSync(`./mp3/sticker/sd13.webp`),
                        result25 = fs.readFileSync(`./mp3/sticker/sd14.webp`),
                        result26 = fs.readFileSync(`./mp3/sticker/sd15.webp`),
                        result27 = fs.readFileSync(`./mp3/sticker/sd16.webp`),
                        result28 = fs.readFileSync(`./mp3/sticker/sd17.webp`),
                        result29 = fs.readFileSync(`./mp3/sticker/sd18.webp`),
                        result30 = fs.readFileSync(`./mp3/sticker/sd19.webp`),
                        result31 = fs.readFileSync(`./mp3/sticker/sd20.webp`),
                        result32 = fs.readFileSync(`./mp3/sticker/sd21.webp`),
                        result33 = fs.readFileSync(`./mp3/sticker/sd22.webp`),
                        result34 = fs.readFileSync(`./mp3/sticker/sd23.webp`),
	                    result35 = fs.readFileSync(`./mp3/sticker/sd24.webp`),
	                    result36 = fs.readFileSync(`./mp3/sticker/sd25.webp`),
	                    result37 = fs.readFileSync(`./mp3/sticker/sd26.webp`),
			            result38 = fs.readFileSync(`./mp3/sticker/sd27.webp`),
                        result39 = fs.readFileSync(`./mp3/sticker/sd28.webp`),
                        result40 = fs.readFileSync(`./mp3/sticker/sd29.webp`),
                        result41 = fs.readFileSync(`./mp3/sticker/sd30.webp`),
                        result42 = fs.readFileSync(`./mp3/sticker/sd31.webp`),
                        result43 = fs.readFileSync(`./mp3/sticker/sd32.webp`),	
                        ]
                        nk = rm[Math.floor(Math.random() * rm.length)]
                        client.sendMessage(from, nk, sticker)
                        }
			
			            if (budy.includes(`Sexo`)){
                        client.updatePresence(from, Presence.composing)
                        rm = [
                        result = fs.readFileSync(`./mp3/sticker/da.webp`),
                        result1 = fs.readFileSync(`./mp3/sticker/da2.webp`),
                        result2 = fs.readFileSync(`./mp3/sticker/da3.webp`),
                        result3 = fs.readFileSync(`./mp3/sticker/da4.webp`),
                        result4 = fs.readFileSync(`./mp3/sticker/da4.webp`),
                        result5 = fs.readFileSync(`./mp3/sticker/da5.webp`),
                        result6 = fs.readFileSync(`./mp3/sticker/da6.webp`),
                        result7 = fs.readFileSync(`./mp3/sticker/da7.webp`),
                        result8 = fs.readFileSync(`./mp3/sticker/da8.webp`),
                        result9 = fs.readFileSync(`./mp3/sticker/da9.webp`),
                        result10= fs.readFileSync(`./mp3/sticker/da10.webp`),
                        result11 = fs.readFileSync(`./mp3/sticker/da11.webp`),
			            result12 = fs.readFileSync(`./mp3/sticker/sd1.webp`),
                        result13 = fs.readFileSync(`./mp3/sticker/sd2.webp`),
                        result14 = fs.readFileSync(`./mp3/sticker/sd3.webp`),
                        result15 = fs.readFileSync(`./mp3/sticker/sd4.webp`),
                        result16 = fs.readFileSync(`./mp3/sticker/sd5.webp`),
                        result17 = fs.readFileSync(`./mp3/sticker/sd6.webp`),
                        result18 = fs.readFileSync(`./mp3/sticker/sd7.webp`),
                        result19 = fs.readFileSync(`./mp3/sticker/sd8.webp`),
                        result20 = fs.readFileSync(`./mp3/sticker/sd9.webp`),
                        result21 = fs.readFileSync(`./mp3/sticker/sd10.webp`),
	                    result22 = fs.readFileSync(`./mp3/sticker/sd11.webp`),
	                    result23 = fs.readFileSync(`./mp3/sticker/sd12.webp`),
	                    result24 = fs.readFileSync(`./mp3/sticker/sd13.webp`),
                        result25 = fs.readFileSync(`./mp3/sticker/sd14.webp`),
                        result26 = fs.readFileSync(`./mp3/sticker/sd15.webp`),
                        result27 = fs.readFileSync(`./mp3/sticker/sd16.webp`),
                        result28 = fs.readFileSync(`./mp3/sticker/sd17.webp`),
                        result29 = fs.readFileSync(`./mp3/sticker/sd18.webp`),
                        result30 = fs.readFileSync(`./mp3/sticker/sd19.webp`),
                        result31 = fs.readFileSync(`./mp3/sticker/sd20.webp`),
                        result32 = fs.readFileSync(`./mp3/sticker/sd21.webp`),
                        result33 = fs.readFileSync(`./mp3/sticker/sd22.webp`),
                        result34 = fs.readFileSync(`./mp3/sticker/sd23.webp`),
	                    result35 = fs.readFileSync(`./mp3/sticker/sd24.webp`),
	                    result36 = fs.readFileSync(`./mp3/sticker/sd25.webp`),
	                    result37 = fs.readFileSync(`./mp3/sticker/sd26.webp`),
			            result38 = fs.readFileSync(`./mp3/sticker/sd27.webp`),
                        result39 = fs.readFileSync(`./mp3/sticker/sd28.webp`),
                        result40 = fs.readFileSync(`./mp3/sticker/sd29.webp`),
                        result41 = fs.readFileSync(`./mp3/sticker/sd30.webp`),
                        result42 = fs.readFileSync(`./mp3/sticker/sd31.webp`),
                        result43 = fs.readFileSync(`./mp3/sticker/sd32.webp`),	
                        ]
                        nk = rm[Math.floor(Math.random() * rm.length)]
                        client.sendMessage(from, nk, sticker)
                        }

                        if (budy.includes(`Gracias`)){
                        client.updatePresence(from, Presence.composing)
                        rm = [
                        result = fs.readFileSync(`./mp3/sticker/cl1.webp`),
                        result1 = fs.readFileSync(`./mp3/sticker/cl2.webp`),
                        result2 = fs.readFileSync(`./mp3/sticker/cl3.webp`),
                        result3 = fs.readFileSync(`./mp3/sticker/cl4.webp`),
                        result4 = fs.readFileSync(`./mp3/sticker/cl5.webp`),
                        result5 = fs.readFileSync(`./mp3/sticker/cl6.webp`),
                        result6 = fs.readFileSync(`./mp3/sticker/cl7.webp`),
                        result7 = fs.readFileSync(`./mp3/sticker/cl8.webp`),
                        result8 = fs.readFileSync(`./mp3/sticker/cl9.webp`),
                        result9 = fs.readFileSync(`./mp3/sticker/cl10.webp`),
                        result10 = fs.readFileSync(`./mp3/sticker/cl11.webp`),
                        result11 = fs.readFileSync(`./mp3/sticker/cl12.webp`),
                        ]
                        nk = rm[Math.floor(Math.random() * rm.length)]
                        client.sendMessage(from, nk, sticker)
                        }

                        if (budy.includes(`gracias`)){
                        client.updatePresence(from, Presence.composing)
                        rm = [
                        result = fs.readFileSync(`./mp3/sticker/cl1.webp`),
                        result1 = fs.readFileSync(`./mp3/sticker/cl2.webp`),
                        result2 = fs.readFileSync(`./mp3/sticker/cl3.webp`),
                        result3 = fs.readFileSync(`./mp3/sticker/cl4.webp`),
                        result4 = fs.readFileSync(`./mp3/sticker/cl5.webp`),
                        result5 = fs.readFileSync(`./mp3/sticker/cl6.webp`),
                        result6 = fs.readFileSync(`./mp3/sticker/cl7.webp`),
                        result7 = fs.readFileSync(`./mp3/sticker/cl8.webp`),
                        result8 = fs.readFileSync(`./mp3/sticker/cl9.webp`),
                        result9 = fs.readFileSync(`./mp3/sticker/cl10.webp`),
                        result10 = fs.readFileSync(`./mp3/sticker/cl11.webp`),
                        result11 = fs.readFileSync(`./mp3/sticker/cl12.webp`),
                        ]
                        nk = rm[Math.floor(Math.random() * rm.length)]
                        client.sendMessage(from, nk, sticker)
                        }

                        if (budy.includes(`Eu`)){
                        client.updatePresence(from, Presence.composing)
                        rm = [
                        result = fs.readFileSync(`./mp3/sticker/dofi.webp`),
                        result1 = fs.readFileSync(`./mp3/sticker/dofi2.webp`),
                        result2 = fs.readFileSync(`./mp3/sticker/dofi3.webp`),
                        result3 = fs.readFileSync(`./mp3/sticker/dofi4.webp`),
                        result4 = fs.readFileSync(`./mp3/sticker/dofi5.webp`),
                        result5 = fs.readFileSync(`./mp3/sticker/dofi6.webp`),
                        result6 = fs.readFileSync(`./mp3/sticker/dofi7.webp`),
                        result6 = fs.readFileSync(`./mp3/sticker/dofi8.webp`),
                        result7 = fs.readFileSync(`./mp3/sticker/dofi9.webp`),
                        result8 = fs.readFileSync(`./mp3/sticker/dofi10.webp`),
                        result9 = fs.readFileSync(`./mp3/sticker/dofi11.webp`),
                        result10 = fs.readFileSync(`./mp3/sticker/dofi12.webp`),
                        result11 = fs.readFileSync(`./mp3/sticker/dofi13.webp`),
                        result12 = fs.readFileSync(`./mp3/sticker/dofi14.webp`),
                        result13 = fs.readFileSync(`./mp3/sticker/dofi16.webp`),
                        result14 = fs.readFileSync(`./mp3/sticker/dofi17.webp`),
                        result15 = fs.readFileSync(`./mp3/sticker/dofi18.webp`),
                        result16 = fs.readFileSync(`./mp3/sticker/dofi19.webp`),
                        result17 = fs.readFileSync(`./mp3/sticker/dofi20.webp`),
                        result18 = fs.readFileSync(`./mp3/sticker/dofi21.webp`),
                        ]
                        nk = rm[Math.floor(Math.random() * rm.length)]
                        client.sendMessage(from, nk, sticker)
                        }*/				
///////////////////////////////////////////////
if (budy.includes(`Idols`)){
	client.updatePresence(from, Presence.composing)
	rm = [
	result = fs.readFileSync(`./aja/nayeon.jpg`),
	result1 = fs.readFileSync(`./aja/Jennie.jpg`),
	result2 = fs.readFileSync(`./aja/fua.jpg`),
	]
	nk = rm[Math.floor(Math.random() * rm.length)]
	client.sendMessage(from, nk, image)
	}
//INICIO DE INTERACCIONES CON EL BOT

    if (budy.includes(`Spam1`)) {
        reply(`Hace años entré en una web que pone en contacto a atractivos hombres como yo con solteras rusas incluso más atractivas, por razones que no vienen al caso detallar pero que a mi mujer le dije que formaban parte de la documentación para escribir una novela (#truco: TODO se puede explicar diciendo que forma parte de la documentación para una novela). Desde entonces he recibido unos cinco mil mensajes de bellas señoritas que desean entablar conmigo amistad y lo que surja, no necesariamente por ese orden. El mérito es que todos los mensajes son distintos, y que las rusas son incansables por mucho que yo las ignore. Recurren a todo tipo de argumentos para convencerme de que les dé una oportunidad, de momento sin éxito.`)
        }

//FIN DE LAS INTERACCCIONES CON EL BOT

		if (budy.startsWith(`Nefasto`)) {
        const none = fs.readFileSync('./mp3/gaspi1.mp3');
		client.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
	if (isGroup && isSimi && budy != undefined) {
						console.log(budy)
						muehe = await simih(budy)
						console.log(muehe)
						reply(muehe)
					} else {
						console.log(color('[WARN]','red'), 'Unregistered Command from', color(sender.split('@')[0]))
					}
                           }
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
}
starts()
