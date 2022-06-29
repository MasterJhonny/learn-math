import { random } from './utils'

function verifyAdd (num, den, res, forma, progress, callback) {

    const r = num + den;
    if (r === res) {
        if (progress === 9) {
            swal("Felicidades 🎉🥳", "has pasado de nivel!", "success");
        } else {
            swal("Buen trabajo", `El resultado es Correcto ${num} + ${den} = ${r}`, "success");
        }
    } else {
        swal("Error", `El resultado es Correcto ${num} + ${den} = ${r}, tú isiste ${num} + ${den} = ${res}`, "error");
    }
    
    callback({
        numerador: random(1, 7),
        denominador: random(1, 7),
        result: 0,
        forma: forma,
        progress: progress === 9 ? 0 : r === res ? progress + 1 : progress,
    })

}
  
function verifySubtract (num, den, res, forma, progress, callback) {
    const r = num - den;
    if (r === res) {
        if (progress === 9) {
            swal("Felicidades 🎉🥳", "has pasado de nivel!", "success");
        } else {
            swal("Buen trabajo", `El resultado es Correcto ${num} - ${den} = ${r}`, "success");
        }
    } else {
        swal("Error", `El resultado es Correcto ${num} - ${den} = ${r}, tú isiste ${num} - ${den} = ${res}`, "error");
    }
    
    callback({
        numerador: random(7, 14),
        denominador: random(1, 7),
        result: 0,
        forma: forma, 
        progress: progress === 9 ? 0 : r === res ? progress + 1 : progress,
    })
}

export { verifyAdd,  verifySubtract };