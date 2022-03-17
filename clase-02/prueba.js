function sumar(n1,n2){
    return n1 + n2
}

console.log(sumar(6,5))

function cuentaDoble(n1,n2,op){
    const res1=op(n1,n2)
    const res2=op(n1,n2)
    return res1 + res2
}

console.log(cuentaDoble(3,3,sumar))


function generarSaludo(nombre){
    return 'hola' + nombre
}

function generarSaludoTriste(nombre){
    return 'hola' + nombre + "..."
}

function generarSaludoEfusivo(nombre){
    return 'hola' + nombre + "!!!"
}


