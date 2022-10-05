let handler = async (m, { conn, command, text, usedPrefix }) => {
    if (!text) throw `Use example ${usedPrefix}${command} i'm`
    conn.reply(m.chat, `
  Hasilnya adalah :

  *${text}* *${(101).getRandom()}*% ${command.replace('cek', '').toUpperCase()} coy
  `.trim(), m, m.mentionedJid ? {
        mentions: m.mentionedJid
    } : {})
}
handler.help = ['gay', 'pintar', 'cantik', 'ganteng', 'gabut', 'gila', 'lesbi', 'stress', 'bucin', 'jones', 'jodoh', 'sadboy'].map(v => 'cek' + v + ' siapa?')
handler.tags = ['kerang', 'fun']
handler.command = /^cek(gay|pintar|cantik|ganteng|gabut|gila|lesbi|stress?|bucin|jones|jodoh|sadboy)/i

export default handler
