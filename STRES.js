import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
  let caption = `
*NGACA WOY* 🖕😅 
`.trim()
  m.reply(caption)
}
handler.help = ['stres']
handler.tags = ['other']
handler.customPrefix = /(\?$)/
handler.command = /^(stres)$/i
handler.limit = true

export default handler
