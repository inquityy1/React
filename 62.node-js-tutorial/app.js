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

// const fs = require("fs");

// fs.readFile("read-me.txt", "utf-8", function (error, data) {
//   fs.writeFile("write.txt", data, function (error) {
//     if (error) {
//       console.log(error);
//     }
//   });
// });

// fs.writeFileSync("write.txt", text);

// const fs = require("fs");

// fs.unlink("write.txt", (error) => {
//   console.log(error);
// });

// const fs = require("fs");

// fs.mkdir("my-folder", () => {
//   fs.readFile("read-me.txt", "utf-8", (error, data) => {
//     fs.writeFile("./my-folder/write-me.txt", data, () => {});
//   });
// });

// const fs = require("fs");

// fs.unlink("./my-folder/write-me.txt", () => {
//   fs.rmdir("my-folder", (error) => {
//     console.log(error);
//   });
// });

// const http = require("http");

// const server = http.createServer((req, res) => {
//   console.log(req.url);
//   res.writeHead(200, { "Content-Type": "text/plain" });
//   res.end("hello world");
// });

// console.log("port 3000");
// server.listen(3000, "127.0.0.1");

const http = require("http");
const fs = require("fs");

const readStream = fs.createReadStream(__dirname + "/read-me.txt", "utf-8");
const writeStream = fs.createWriteStream(__dirname + "/write-me.txt");

readStream.on("data", (chunk) => {
  console.log("new data received");
  console.log(chunk);
  writeStream.write(chunk);
});
