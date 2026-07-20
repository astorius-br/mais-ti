const prompt = require("prompt-sync")();
const pp = prompt;
/*
let nome = String(pp('Digite seu nome: '));
let idade = Number(pp('Digite sua idade: '));

console.log('Olá! Meu nome é',nome,'e tenho',idade,'anos.');

 // ---------------------------------------------------

// Função nome/idade
function apresentarPessoa(nome,idade){
    let name = String(pp('Digite seu nome: '));
    let age = Number(pp('Digite sua idade: '));
    console.log('Olá! Meu nome é',name,'e tenho',age,'anos.');
    //console.log('Olá! Meu nome é',nome,'e tenho',idade,'anos.');
}

apresentarPessoa();


// ---------------------------------------------------

// Função nome/idade coletando array
function apresentarPessoa(nome,idade){
    console.log('---- LISTA ----\nPressione Enter para continuar. Para encerrar, digite 0.')
    let c = 1, lista = [];
    while (c !== '0'){
        let name = String(pp('Nome: '));
        let age = Number(pp('Idade: '));

        
        lista.push(name,age)

        c = pp('Continuar? '); // possível problema de lógica. condição inerp
    }
    console.log(lista);
}

apresentarPessoa();


function listarPessoas(){
    nomes = ['Ana','Bruno', 'Carlos', 'Daniela', 'Eduardo'];
    for (i=0;i<nomes.length;i++){
        console.log(nomes[i]);
    }
}

listarPessoas();

----------------------------

function calcularMedia(notas){
    let calc = 0;
    notas = [4, 10, 6, 9, 8];
    for (i=0;i<notas.length;i++){
        calc+= notas[i];
        console.log(calc)
    }
    console.log('Notas',notas,'\nMédia:',calc/Number(notas.length))
}

calcularMedia();

----------------------------



function ordenarNotas(notas){
    notas = [4, 10, 6, 9, 8];
    console.log(notas)
    notas2 = [4, 10, 6, 9, 8];
    notas2.sort();
    console.log(notas,notas2)
}

ordenarNotas()
*/
function ordenarNotas(notas){
    notas = [4, 10, 6, 9, 8];
    notas2 = [];
    
    for (i=0; i<notas.length;i++){
        for (j=0; j < notas.length; j++){
            if (notas[j] < notas[i]){
                notas.unshift()
            }
        }
    }
    
    console.log(notas)
}

ordenarNotas()