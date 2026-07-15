const prompt = require("prompt-sync")();

function parOUimpar(num){
    if (num % 2 === 0) {
        console.log("Par")
    } else {
        console.log("Impar")
    }
}
let num = prompt("Digite um numero: ")
parOUimpar(num)