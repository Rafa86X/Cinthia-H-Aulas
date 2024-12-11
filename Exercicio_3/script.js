


// function OlaPrimeiroCodigo (){
//     return "Ola mundo!"
// }

// let coisa =  OlaPrimeiroCodigo();  



// console.log("Ola mundo! direto");
// console.log(OlaPrimeiroCodigo()+" veio por função")
// console.log(coisa + " veio de uma variavel");

////////////// funçao soma /////////////////////

// let a = 10;
// let b = 7;

// function soma( num1, num2, num3){
//     return num1 + num2 + num3 - 10
// }

// console.log(soma(a,b,58));

////////////// funçao Dobro /////////////////////


const resposta = document.getElementById("result");


function geraSomaSeMaiorApB(a,b) {
    
    if(a>b){
        return a+b
    }
    else{
        return "A não eh maior que B"
    }
}


let conta = geraSomaSeMaiorApB(52,55)


resposta.innerHTML = "O resultado agora no html é : " + geraSomaSeMaiorApB(52,55)





 