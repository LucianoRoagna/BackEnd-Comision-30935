function dividir(dividendo,divisor){
    if(divisor == 0){
        throw new Error('no se puede dividir por 0')
    }
    return dividendo / divisor
}

const resultado = dividir(6,3)
const resultado2 = dividir(7,2)
/* const resultado3 = dividir(0,0) */


console.log(resultado)
console.log(resultado2)
/* console.log(resultado3) */