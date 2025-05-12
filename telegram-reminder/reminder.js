require("dotenv").config();
const axios = require("axios");
const cron = require("node-cron");

const BOT_TOKEN = process.env.BOT_TOKEN;
const CHAT_ID = process.env.CHAT_ID;

function getDaysLeft() {
    const birthYear = 2004;  // Your birth year
    const birthMonth = 11;    // Your birth month
    const birthDay = 11;     // Your birth day

    const today = new Date();
    const targetDate = new Date(birthYear + 25, birthMonth - 1, birthDay);

    const timeDiff = targetDate - today;
    return Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
}

function sendTelegramReminder() {
    const daysLeft = getDaysLeft();
    const message = `🚀 Reminder: You have ${daysLeft} days left until you turn 25! 🎂`;

    axios.get(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        params: { chat_id: CHAT_ID, text: message }
    })
    .then(() => console.log("Reminder sent!"))
    .catch(err => console.error(err));
}

// Schedule daily reminder at 9 AM
cron.schedule("0 9 * * *", sendTelegramReminder);

console.log("Telegram reminder service running...");
