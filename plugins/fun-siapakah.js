let toM = a => '@' + a.split('@')[0]
function handler(m, { groupMetadata }) {
    let ps = groupMetadata.participants.map(v => v.id)
    let a = ps.getRandom()
    let b
    do b = ps.getRandom()
    while (b === a)
    m.reply(`${toM(a)}`, null, {
        mentions: [a]
    })
}
handler.help = ['siapakah']
handler.tags = ['main', 'fun']
handler.command = ['siapakah']

handler.group = true

export default handler
