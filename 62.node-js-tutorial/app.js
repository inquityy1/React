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

// const events = require("events");
// const util = require("util");

// const teams = function (name) {
//   this.name = name;
// };

// util.inherits(teams, events.EventEmitter);

// const Arsenal = new teams("Arsenal");
// const Juventus = new teams("Juventus");
// const Galatasaray = new teams("Galatasaray");

// const teamArray = [Arsenal, Juventus, Galatasaray];

// teamArray.forEach((team) => {
//   team.on("nation", function (nation) {
//     console.log(team.name + " is " + nation + " football club");
//   });
// });

// Arsenal.emit("nation", "English");
// Juventus.emit("nation", "Italian");
// Galatasaray.emit("nation", "Turkish");

const fs = require("fs");

fs.readFile("read-me.txt", "utf-8", function (error, data) {
  fs.writeFile("write.txt", data, function (error) {
    if (error) {
      console.log(error);
    }
  });
});

// fs.writeFileSync("write.txt", text);
