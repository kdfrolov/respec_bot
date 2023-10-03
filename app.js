import express from 'express';
import { PORT, TOKEN } from './config.js';
import { getMainMenu } from './keyboards.js';
import { Telegraf } from 'telegraf';

const app = express();
const bot = new Telegraf(TOKEN);

bot.start(ctx => {
    ctx.reply('Вас приветсвует Telegram Bot компании Respec', getMainMenu())
});

bot.on('text', ctx => {
    ctx.reply('just text')
});

bot.launch();
app.listen(PORT, () => console.log(`My server is running on port ${PORT}`));