const { readFileSync, writeFileSync, readdirSync } = require('fs');

// readFileSync(path,option)       -  faylni o'qish va uning mazmunini qaytarish uchun ishlatiladi.
// writeFileSync(file,data,option) -  ko'rsatilgan fayl mavjud bo'lmasa, yangi fayl yaratadi.

// Bitta fayilning malumotlarini o'qish

const content = readFileSync('./files/1text.txt', 'utf-8');
console.log(content); // here is 1

// Bir necha fayillarni bittada oqish
const files = readdirSync('./files');

for (const iterator of files) {
  let eachFile = readFileSync(`./files/${iterator}`, 'utf-8');
  console.log(eachFile);
}

// FS module orqali fayil yaratish

writeFileSync('./files/6text.txt', 'here is 6');
