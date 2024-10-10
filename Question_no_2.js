const fs = require("fs");

// Writing to a file
fs.writeFile("example.txt", "Hello, World!", (err) => {
  if (err) throw err;
  console.log("File created and written to.");

  // Reading from the file
  fs.readFile("example.txt", "utf8", (err, data) => {
    if (err) throw err;
    console.log("File content: " + data);

    // Deleting the file
    fs.unlink("example.txt", (err) => {
      if (err) throw err;
      console.log("File deleted.");
    });
  });
});
