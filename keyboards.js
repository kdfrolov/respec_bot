import Markup from './node_modules/telegraf/lib/markup.js';

export function getMainMenu() {
    return Markup.keyboard([
        ['Мои сметы', 'Создать смету'],
        ['Контакты']
    ]).resize();
};

export function getMakeTableStep1() {
    return Markup.keyboard([
        ['Шаг 1', 'Отмена']
    ]).resize();
};