import { random } from './utils'

function verifyAdd (num, den, res, forma, callback) {
    const r = num + den;
    if (r === res) {
        swal("Buen trabajo", `El resultado es Correcto ${num} + ${den} = ${r}`, "success");
    } else {
        swal("Error", `El resultado es Correcto ${num} + ${den} = ${r}, tú isiste ${num} + ${den} = ${res}`, "error");
    }
    callback({
        numerador: random(1, 7),
        denominador: random(1, 7),
        result: 0,
        forma: forma
    })
}
  
function verifySubtract (num, den, res, forma, callback) {
    const r = num - den;
    if (r === res) {
        swal("Buen trabajo", `El resultado es Correcto ${num} - ${den} = ${r}`, "success");
    } else {
        swal("Error", `El resultado es Correcto ${num} - ${den} = ${r}, tú isiste ${num} - ${den} = ${res}`, "error");
    }
    callback({
        numerador: random(7, 14),
        denominador: random(1, 7),
        result: 0,
        forma: forma
    })
}

export { verifyAdd,  verifySubtract };