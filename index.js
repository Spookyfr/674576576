/*
Created With char-mod-mail Package.
Created By Firebird54.
Firebird Gaming Discord: https://discord.gg/qugqZeseW4
Firebird54 Youtube: https://youtube.com/@firebird54
Thanks for using our coded bot!
*/
const Discord = require('discord.js');
const allIntents = new Discord.Intents(32767);
const client = new Discord.Client({
  messageCacheLifetime: 60,
  fetchAllMembers: false,
  messageCacheMaxSize: 10,
  restTimeOffset: 0,
  restWsBridgetimeout: 100,
  allowedMentions: {
    parse: ["roles", "users", "eveoryone"],
    repliedUser: true,
  },
  partials: ["MESSAGE", "CHANNEL", "REACTION"],
  intents: allIntents,
});

client.login(process.env.TOKEN);
const express = require('express')
const app = express();
const port = 3000
app.get('/', (req, res) => res.send('Firebird54.'))
app.listen(port, () =>
console.log(`Your app is listening a http://localhost:${port}`)
);
const charModMail = require('char-mod-mail');
client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`);

  //Important Changing Area
charModMail.ModMail(client, {
  guildID: "1178176927249481758", //put your guild id here
  categoryID: "1186203416582688768", //put your category id here
  staffRole: "1178203034883461131", //put your staff role id here
  embedColor: "#2f3136", //change the hax color code if you want
  anonymousReply: false, //make it false if only the staff can reply the user or make it true so anyone can reply.
  closedTitle: "This ticket has been closed please vouch in the server or if you need more help please re-open a ticket.",
  closedMessage: "Infinity Support",
  staffOpenedTitle: "User Opened Mod Mail",
  staffOpenedMessage: "The User Opened A ModMail And Is Now Waiting For A Reply!",
  userOpenedTitle: "Thank you for contacting infinity support! Please be patient and wait for staff to reply.",
  userOpenedMessage: "Infinity Support!",
  wrongEmoji: "❎", // if you want you can change but don't change it recommaned.
  rightEmoji: "✅" // if you want you can change but don't change it recommaned.
})
});
