const sumar = (n1, n2) => n1 + n2;
const restar = (n1, n2) => n1 - n2;
const multiplicar = (n1, n2) => n1 * n2;
/*
function dividir(n1, n2, callback) {
  if (n2 !== 0) {
    return callback(null, n1 / 2);
  } else {
    return callback("n2 es cero");
  }
}
*/

function dividir(n1, n2) {
  return new Promise((exito, fracaso) => {
    if (n2 !== 0) {
      exito(n1 / n2);
    } else {
            fracaso("N2 es cero");
    }
  });
}

function calcular(n1, n2, operacionRealizar) {
  const resultadoDeLaOperacion = operacionRealizar(n1, n2);
  return resultadoDeLaOperacion;
}

function verificarDivision(error, exito) {
  if (error) {
    console.log("ocurrio un error");
    console.log("El error es: " + error);
    return error;
  } else {
    return exito;
  }
}

const res1 = calcular(20, 10, sumar);
console.log(res1);
const res2 = restar(20, 10, restar);
console.log(res2);
console.log(calcular(10, 2, multiplicar));

calcular(10, 2, dividir)
.then((respuesta)=>console.log(respuesta))
.catch((error)=>console.log(error))
calcular(10, 0, dividir)
.then((respuesta)=>console.log(respuesta))
.catch((error)=>console.log(error))
//clase 03_async min 1.10hrs
