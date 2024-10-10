const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const checkOddEven = () => {
  rl.question("Enter a number: ", (number) => {
    const num = parseInt(number);
    if (isNaN(num)) {
      console.log("Please enter a valid number.");
    } else {
      const result = num % 2 === 0 ? "even" : "odd";
      console.log(`The number ${num} is ${result}.`);
    }
    checkOddEven();
  });
};

checkOddEven();
