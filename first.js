const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const variables = [];

rl.on("line", (input) => {
  variables.push(input);
});

rl.on("close", () => {
  for (let i = 2; i < variables.length; i += 2) {
    console.log(encontrartresn(variables[i]));
  }
});

const encontrartresn = (sistemas) => {
  const sistema = sistemas.split(" ");
  let arr = [];
  for (let i = 0; i < sistema.length; i++) {
    for (let j = 1; j <= sistema[i]; j++) {
      if (parseInt(sistema[i]) % j == 0) {
        arr.push(j);
      }
    }
  }
  let res = [];
  let seen = {};
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    if (seen[num]) {
      res.push(num);
    } else {
      seen[num] = true;
    }
  }
  return res.length;
};
