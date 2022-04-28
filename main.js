//Ask age
const age = prompt("Quanti anni hai?")
//Ask how km
const km = Number(prompt("Quanti km vuoi percorrere?"))
//Sale over 65
const price = 0.21
let sumprice = km * price
if (age > 18){
    sumprice = sumprice - (sumprice % 100 * 20)
}
else if (age <= 65){
    sumprice = sumprice - (sumprice % 100 * 40)
}
else {
    sumprice = sumprice
}

console.log(sumprice)