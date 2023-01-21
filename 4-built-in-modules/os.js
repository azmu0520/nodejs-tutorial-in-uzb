const os = require('os');
// OS - Operatsiyon sistema uchun tayor module-lar

// userInfo()  - foydalanuvchi haqida malumot
// uptime()    - sistemaning ishlash vaqtini soniyalarda ko'rsatadi
// type()      - sistemaning nomini bildiradi
// totalMem()  - Tizim xotirasining umumiy hajmini baytda butun son sifatida qaytaradi.
// freemem()   - Butun son sifatida baytlardagi bo'sh tizim xotirasi miqdorini qaytaradi.

let soat = parseInt(os.uptime() / 3600);
let minut = parseInt((os.uptime() - soat * 3600) / 60);
let sec = os.uptime() - (soat * 3600 + minut * 60);

console.log(`Tizimning ishlash vaqti ${soat} soat ${minut} ${sec} sekund`);
