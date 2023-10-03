import Markup from './node_modules/telegraf/lib/markup.js';

export function getMainMenu() {
    return Markup.keyboard([
        ['Мои сметы', 'Создать смету'],
        ['Контакты']
    ]).resize();
};