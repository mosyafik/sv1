let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let text = `
*KALO KAMU INGIN SERVER BOT BERTAHAN LAMA, KAMU BISA DONASI DI NOMER BAWAH*
┌─「 Donasi • Pulsa 」
│ • *[${global.ppulsa}]*
❏────

┌─「 Donasi • e-Wallet 」
│ • *DANA:* [${global.pdana}]
│ • *Gopay:* [${global.pgopay}]
│ • *OVO:* [${global.povo}]
│ • *Link Aja:* [${global.plinkaja}]
❏────
`.trim()
  m.reply(text)
}
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler
