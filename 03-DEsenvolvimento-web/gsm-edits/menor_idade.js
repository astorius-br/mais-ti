const prompt = require("prompt-sync")();

function menoridade(idade){
    if (idade>=18){
        console.log("Maior de idade")
    }
    else{
        console.log("Menor de idade")
    }
}

let idade = prompt("Digite sua idade: ")
menoridade(idade)