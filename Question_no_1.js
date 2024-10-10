const fs = require("fs");

// Blocking code (synchronous)
const data = fs.readFileSync("file.txt", "utf8");
console.log("Blocking code:");
console.log(data);
console.log("This code runs only after the file is read.");



const fs = require("fs");

// Non-blocking code (asynchronous)
fs.readFile("file.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log("Non-blocking code:");
  console.log(data);
});
console.log("This code runs immediately after calling readFile.");
