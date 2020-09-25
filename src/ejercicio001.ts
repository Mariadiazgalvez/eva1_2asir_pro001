console.log('Hola mundo')

function sumar (a: number, b: number) {
    return a + b
}

console.log(sumar (3, 4))

let restar = (a: number, b: number) => a - b
console.log(restar (3, 4))

let multiplicaRaro = (a: number, b: number): number => {
    let r = 4
    let r2 = a * b + r
    return r2
}
console.log(multiplicaRaro (3, 4))

//funciones con datos primitivos (string, number, boolean), (if, bucles, for)

//funcion que le pase el nombre y me devuelve Hola pepe como estas 
//funcion que le paso la edad y me devulve si soy mayor de edad o no

function edad (a:number){
    return a > 18
}
console.log(edad(5))