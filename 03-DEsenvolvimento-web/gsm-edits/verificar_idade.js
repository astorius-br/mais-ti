const prompt = require("prompt-sync")();

function verificaridade(idade){
    if (idade >= 60){
        console.log("idoso")
    }
    else if (idade >= 18){
        console.log("Maior idade")
    }
    else{
        console.log("Menor de Idade")
    }
}

let idade = prompt("Digite a sua idade")

verificaridade(idade)