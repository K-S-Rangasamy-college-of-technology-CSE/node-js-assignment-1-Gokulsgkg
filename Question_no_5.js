// const net = require("net");

// // Create TCP server
// const server = net.createServer((socket) => {
//   console.log("Client connected");

//   // When data is received
//   socket.on("data", (data) => {
//     console.log(`Received: ${data}`);
//     socket.write("Message received.");
//   });

//   // When the client disconnects
//   socket.on("end", () => {
//     console.log("Client disconnected");
//   });
// });

// server.listen(8080, () => {
//   console.log("Server listening on port 8080");
// });



const net = require("net");

// Create a TCP client and connect to the server
const client = net.createConnection({ port: 8080 }, () => {
  console.log("Connected to server");
  client.write("Hello, server!");
});

// When data is received from the server
client.on("data", (data) => {
  console.log(`Received: ${data}`);
  client.end();
});

// When the client disconnects
client.on("end", () => {
  console.log("Disconnected from server");
});
