const {readEnv} = require('../lib/database')
const {cmd , commands} = require('../command')

cmd({
    pattern: "menu",
    desc: "get cmd list",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
const config = await readEnv();
let menu = {
main: '',
download: '',
group: '',
owner: '',
convert: '',
search: ''
};

for (let i = 0; i < commands.length; i++) {
if (commands[i].pattern && !commands[i].dontAddCommandList) {
menu[commands[i].category] += `${config.PREFIX}${commands[i].pattern}\n`;
 }
}

let madeMenu = `💗 *Hello ${pushname}* 👋
┌────────────
❖ *📥DOWNLOAD COMMANDS📥*
│
│ ✑ _.song_
│ ✑ _.video_
│ ✑ _.fb_
│ ✑ _.facebook_
│ ✑ _.tt_
│ ✑ _.tiktok_
│ ✑ _.ig_
│ ✑ _.twdl_
│ ✑ _.twitter_
│ ✑ _.gdrive_
│ ✑ _.apk_
│ ✑ _.mediafire_
└────────────

POWERD BY QUEEN-AIFA-MD-BOT 💗
`
return await conn.sendMessage(from,{image: {url: `https://i.ibb.co/GWyFJPj/20241013-212512.jpg`},caption: desc},{quoted: mek})


}catch(e){
console.log(e)
reply(`${e}`)
}
})
