let fs = require('fs')
let moment = require('moment-timezone')
let fetch = require('node-fetch')

let handler = m => m

handler.all = async function (m) {
    if (m.chat.endsWith('status@broadcast')) {
        console.log('sw cok')
    }
    let { isBanned } = db.data.chats[m.chat]
    let { banned } = db.data.users[m.sender]
    let { group } = db.data.settings
    let setting = db.data.settings
    let user = global.db.data.users[m.sender]
    let botNumber = await conn.decodeJid(conn.user.id)
    
    // salam
    let reg = /(ass?alam|اَلسَّلاَمُ عَلَيْكُمْ|السلام عليکم)/i
    let isSalam = reg.exec(m.text)
    if (isSalam && !m.fromMe) {
        m.reply(`وَعَلَيْكُمْ السَّلاَمُ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ\n_wa\'alaikumussalam wr.wb._`)
    }
    
    // ketika ada yang invite/kirim link grup di chat pribadi
    if ((m.mtype === 'groupInviteMessage' || m.text.startsWith('https://chat') || m.text.startsWith('Buka tautan ini')) && !m.isBaileys && !m.isGroup) {
        this.sendButton(m.chat, `┌「 *Undang Bot ke Grup* 」
├ 7 Hari / Rp 10,000
├ 30 Hari / Rp 28,000
└────
`.trim(), wm, 'Pemilik Bot', '.owner', m)
await this.reply('628981574999-1632717792@g.us', `Ada Yang Mau Nyulik nih :v \n\ndari: @${m.sender.split("@")[0]} \n\npesan: ${m.text}`, m, { mentions: [m.sender] })
    }

    if (m.isGroup) {
    if (m.fromMe) return
    if (m.mentionedJid && m.mentionedJid.includes(this.user.jid) && m.isGroup) {
    	await this.send2Button(m.chat, m.msg.contextInfo.expiration == 604800 ? '\n\nketik *.ephe* untuk matiin pesan sementaranya, biar tombolnya bisa dipake' : 'uhm.. iya ada apa?', wm, `${isBanned ? 'UNBAN' : 'MENU'}`, `${isBanned ? '.unban' : '.?'}`, `${!m.isGroup ? 'DONASI' : isBanned ? 'UNBAN' : 'BAN'}`, `${!m.isGroup ? '.donasi' : isBanned ? '.unban' : '.ban'}`, m)
    }
}
    
    if (/^bot$/i.test(m.text)) {
        await this.sendButton(m.chat, !(m.isGroup || m.isPrems) && group ? 'hanya grup' : isBanned ? 'chat banned' : banned ? 'user banned' : 'aktif', wm, !(m.isGroup || m.isPrems) && group ? 'donasi' : isBanned ? 'unban' : banned ? 'minta owner kalo mau di unban' : 'donasi', !(m.isGroup || m.isPrems) && group ? '.donasi' : isBanned ? '.unban' : banned ? '.owner' : '.donasi', m)
    }

    //auto setBio
	    if (new Date() * 1 - setting.status > 1000) {
		let _uptime = process.uptime() * 1000
        let uptime = clockString(_uptime)
        let use = Object.keys(db.data.users).length
		await this.setBio(`${data.owner} | Runtime: ${uptime} | Total User: ${use}`)
		setting.status = new Date() * 1
	    }

    // backup db
    if (setting.backup) {
        if (new Date() * 1 - setting.backupDB > 1000 * 60 * 60) {
            let d = new Date
            let date = d.toLocaleDateString('id', {
                day: 'numeric',
                month: 'long',
                year: 'numeric'
            })
            await global.db.write()
            this.reply(global.owner[0] + '@s.whatsapp.net', `Database: ${date}`, null)
            let data = fs.readFileSync('./database.json')
            await this.sendFile(owner[0] + '@s.whatsapp.net', { document: data, mimetype: 'application/json', fileName: 'database.json' }, { quoted: m })
            setting.backupDB = new Date() * 1
        }
    }

    return !0
}

module.exports = handler
function ucapan() {
    const time = moment.tz('Asia/Jakarta').format('HH')
    res = "Selamat dinihari"
    if (time >= 4) {
        res = "Selamat pagi"
    }
    if (time > 10) {
        res = "Selamat siang"
    }
    if (time >= 15) {
        res = "Selamat sore"
    }
    if (time >= 18) {
        res = "Selamat malam"
    }
    return res
}

function clockString(ms) {
    let days = Math.floor(ms / (24 * 60 * 60 * 1000));
    let daysms = ms % (24 * 60 * 60 * 1000);
    let hours = Math.floor((daysms) / (60 * 60 * 1000));
    let hoursms = ms % (60 * 60 * 1000);
    let minutes = Math.floor((hoursms) / (60 * 1000));
    let minutesms = ms % (60 * 1000);
    let sec = Math.floor((minutesms) / (1000));
    return days + " Hari " + hours + " Jam " + minutes + " Menit " + sec + " Detik ";
}

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}
