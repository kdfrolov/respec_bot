import express from 'express';
import { PORT, TOKEN } from './config.js';
import { getMainMenu } from './keyboards.js';
import { getMakeTableStep1 } from './keyboards.js';
import { Telegraf } from 'telegraf';
import session from './node_modules/telegraf/lib/session.js';

const app = express();
const bot = new Telegraf(TOKEN);

bot.start(ctx => {
    ctx.replyWithHTML('Вас приветсвует <b>Telegram Bot</b> компании <b>Respec</b>', getMainMenu())
});

bot.hears("Контакты", ctx => {
    ctx.replyWithHTML('<b>Свяжитесь с нами:</b>\n\n'+
    'Номер телефона/WhatsApp: +79162881544\n\n'+
    'Telegram: @respec80\n\n'+
    'Telegram-канал: @respec554\n\n'+
    'VK: https://vk.com/respec554\n\n',
    getMainMenu())
});

bot.hears("Мои сметы", ctx => {
    let id = ctx.from.id;
    ctx.replyWithHTML(`${id}`)
});

bot.hears("Создать смету", ctx => {
    let id = ctx.from.id;
    ctx.replyWithHTML(`Для создания сметы нам необходимо задать вам несколько вопросов, для этого нажмите <b>Шаг 1</b>`,
    getMakeTableStep1())
});

bot.hears("Отмена", ctx => {
    ctx.replyWithHTML('Выход в главное меню', 
    getMainMenu())
});

bot.on('text', ctx => {
    ctx.reply('Я не знаю такой команды')
});

bot.launch();
app.listen(PORT, () => console.log(`My server is running on port ${PORT}`));