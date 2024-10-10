const dns = require("dns");

// Resolve the IP address for a domain
dns.lookup("example.com", (err, address, family) => {
  if (err) throw err;
  console.log(`Address: ${address}`);
  console.log(`Family: IPv${family}`);
});
