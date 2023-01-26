const path = require('path');

// 1.path.sep              - Platformaga xos fayl ajratuvchi. '\\' yoki '/'.

// 2.path.join(...paths) - yo'llarni ketma ketlikda qo'shishlik uchun ishlatiladi
let pathes = ['/pathes', 'subPath', 'text.txt'];
const joinedPaths = path.join(...pathes);
console.log(joinedPaths);

// 3.path.basename(path,suffix) - yo'lning oxirgi qismini qaytaradi, suffix orqali istalgan qiymatni olib tashlaymiz
console.log(path.basename(joinedPaths)); // text.txt
console.log(path.basename(joinedPaths, '.txt')); // text

// Yuqoridagi misollar path-ning bir necha turlari hisoblanadi, ularni to'liq qismini korish uchun
// mana shu link-ga kirigin  https://nodejs.org/api/path.html
