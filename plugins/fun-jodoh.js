let handler = async (m, { conn, command, text, usedPrefix }) => {
    if (!text) throw `Use example ${usedPrefix}${command} i'm`
    conn.reply(m.chat, `
  Hasil Presentase :

  Kamu dan *${text}* *${(101).getRandom()}*% ${command.replace('se', '').toUpperCase()} Cuy ❤️
  `.trim(), m, m.mentionedJid ? {
        mentions: m.mentionedJid
    } : {})
}
handler.help = ['jodoh', 'rasi', 'cantik', 'ganteng', 'gabut', 'gila', 'lesbi', 'stress', 'bucin', 'jones', 'sadboy'].map(v => 'se' + v + ' siapa?')
handler.tags = ['kerang', 'fun']
handler.command = /^se(rasi|jodoh|)/i

export default handler
