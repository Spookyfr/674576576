const Discord = require('discord.js');
const express = require('express');
const charModMail = require('char-mod-mail');

// Fetch the bot token from the environment variable
const botToken = process.env.TOKEN;

// Check if the bot token is provided
if (!botToken) {
  console.error('Bot token not provided. Set the TOKEN environment variable.');
  process.exit(1);
}

const allIntents = new Discord.Intents(32767);
const client = new Discord.Client({
  messageCacheLifetime: 60,
  fetchAllMembers: false,
  messageCacheMaxSize: 10,
  restTimeOffset: 0,
  restWsBridgetimeout: 100,
  allowedMentions: {
    parse: ["roles", "users", "everyone"],
    repliedUser: true,
  },
  partials: ["MESSAGE", "CHANNEL", "REACTION"],
  intents: allIntents,
});

// Use the bot token from the environment variable
client.login(botToken);

const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Firebird54.'));

app.listen(port, () =>
  console.log(`Your app is listening at http://localhost:${port}`)
);

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);

  // Important Changing Area
  charModMail.ModMail(client, {
    guildID: "1178176927249481758", // put your guild id here
    categoryID: "1186203416582688768", // put your category id here
    staffRole: "1178203034883461131", // put your staff role id here
    embedColor: "#2f3136", // change the hex color code if you want
    anonymousReply: false, // make it false if only the staff can reply the user or make it true so anyone can reply.
    closedTitle: "This ticket has been closed. Please vouch in the server or if you need more help, please reopen a ticket.",
    closedMessage: "Infinity Support",
    staffOpenedTitle: "User Opened Mod Mail",
    staffOpenedMessage: "The User Opened A ModMail And Is Now Waiting For A Reply!",
    userOpenedTitle: "Thank you for contacting infinity support! Please be patient and wait for staff to reply.",
    userOpenedMessage: "Infinity Support!",
    wrongEmoji: "❎", // if you want you can change but don't change it recommended.
    rightEmoji: "✅" // if you want you can change but don't change it recommended.
  });
});
