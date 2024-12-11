
let nome = "Rafael";

const nomes = ["rafael","Cinthia", 12, 35.90, null, true, false]


const numeros = [12,13,14,15,16,17,25,26,88,99,63,15,78]


//console.log(numeros);

const parImpar = (num) =>{

    if(num % 2 === 0){
        console.log("O numero é par")
    }else{
        console.log("O numero é impar")
    }
    
}


function ciclo(array){

    let i = 0;

    for (i; i < array.length; i++) {

        console.log("+++++++++++++++++++++++++++++++");
        console.log(`Valor da posição ${i} no array: numeros é ${array[i]}`);
        parImpar(array[i])
        console.log("##############################");
        
    }
    
}


//ciclo(numeros);

let Cinthia = {
    nome: "Cinthia",
    idade: 28,
    profissao:"estudante",
    livrosQelaGosta : ["Adoleta"]
};



console.log(Cinthia.telefone);








//parImpar(324153)


// 50 / 2 = 25 resto = 0
// 10 % 2 = 5 resto = 0
// 11 % 2 = 5 resto = 1


// 51 % 2 = 25   resto = 1

// 5 % 3 = 1 resto = 2

// 2 % 3 = 0 resto 2  
