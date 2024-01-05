module.exports = {
 config: {
	 name: "prefix",
	 version: "1.0",
	 author: "Tokodori_Frtiz",//remodified by cliff
	 countDown: 5,
	 role: 0,
	 shortDescription: "no prefix",
	 longDescription: "no prefix",
	 category: "auto 🪐",
 },

 onStart: async function(){}, 
 onChat: async function({ event, message, getLang }) {
 if (event.body && event.body.toLowerCase() === "prefix") {
 return message.reply({
 body: `



Hello! It look's like you're not familiar with my prefix!, here's a guide, use this:


 ☃️ SYSTEM PREFIX: [+]
 ✨ BOX CHAT PREFIX: [+]


OWNER: https://www.facebook.com/AlMeydakiAn24`,
 attachment: await global.utils.getStreamFromURL("https://i.imgur.com/voEHfHB.gif")
 });
 }
 }
}