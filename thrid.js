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
  const aux = variables[0].split(" ");
  const a = parseInt(aux[0]);
  const b = parseInt(aux[1]);
  const c = variables[1].split(" ");
  console.log(res(a, b, c));
});

const res = (rango, dhrs, years) => {
  const arra = [];
  for (let i = 0; i < dhrs; i++) {
    let arrb = [];
    for (let j = i; j < dhrs; j++) {
      if (parseInt(years[j]) - parseInt(years[i]) < rango) {
        arrb.push(years[j]);
      }
    }
    arra.push(arrb);
  }
  const largestArray = arra.reduce((acc, curr) => {
    return curr.length > acc.length ? curr : acc;
  }, []);
  return (
    largestArray.length +
    " " +
    largestArray[0] +
    " " +
    largestArray[largestArray.length - 1]
  );
};
