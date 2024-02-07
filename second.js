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
  const a = parseInt(variables[0]);
  const b = parseInt(variables[1]);
  const c = variables[2];
  console.log(validarMelodia(a, b, c));
});
const validarMelodia = (tolerancia, tiemposPorCompas, melodia) => {
  const compases = melodia.split(" ");
  let compasesIncorrectos = 0;
  let res = "";
  for (const compas of compases) {
    const notas = compas.match(/\d+/g);
    let tiempoCompas = 0;
    if (notas) {
      for (const nota of notas) {
        if (nota == 0) {
          tiempoCompas += 0.5;
        } else {
          tiempoCompas += parseInt(nota);
        }
      }
    }
    if (tiempoCompas != tiemposPorCompas) {
      compasesIncorrectos++;
    }
  }
  if (compasesIncorrectos <= tolerancia) {
    res = "ve por ella tigre!";
  } else {
    res = "circulando muchacho :(";
  }
  return res;
};
