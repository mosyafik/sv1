let handler = async (m) => m.reply(`
*Pertanyaan:* ${m.text}
*Jawaban:* ${['iya', 'Tentu saja😁', 'Mungkin...', 'Belum tentu😏', 'Tidak', 'Mustahil Coy🗿'].getRandom()}
  `.trim(), null, m.mentionedJid ? {
  mentions: m.mentionedJid
} : {})

handler.help = ['apakah <teks>?']
handler.tags = ['kerang', 'fun']
handler.customPrefix = /(\?$)/
handler.command = /^apakah$/i

export default handler
