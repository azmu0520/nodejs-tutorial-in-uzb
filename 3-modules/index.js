// Modules - barcha nodejs fayillari `module` hisoblanadi (dastlabgi holati)

const { names } = require('./names');
const { sayHello } = require('./function');

names.map((name) => {
  sayHello(name);
});

// let names = ['Dilshodbek', 'Sardorbek', 'Azizbek'];

// function sayHello(name) {
//   console.log(`Hello ${name}`);
// }

// names.map((name) => {
//   sayHello(name);
// });
