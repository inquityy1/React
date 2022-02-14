///////////////////// basic nodejs code

// console.log("hello world");

// let count = 0;

// const timer = setInterval(() => {
//   count = count + 2;
//   console.log(`${count} seconds have passed`);
//   if (count > 6) {
//     clearInterval(timer);
//   }
// }, 2000);

// console.log(__dirname);
// console.log(__filename);

///////////////////////// function

// function orange() {
//   console.log("hello world");
// }

// orange();

//////////////////// passing the function through another one

// function callbackFunc(func) {
//   func();
// }

// let red = function () {
//   console.log("hi there");
// };

// callbackFunc(red);

const events = require("events");

const myEmitter = new events.EventEmitter();

myEmitter.on("test", function (arg) {
  console.log(arg);
});

myEmitter.emit("test", "hello world");
