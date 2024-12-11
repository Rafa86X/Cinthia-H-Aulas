
// const nome = "Rafael";


// console.log(nome)


// const dixnomePluss =  (n) => { return n+n }

// console.log( dixnomePluss )


// function desvio(a,b){

//     if(a==b){
//         console.log("A e B são iguais")
//     }
//     else if (a>b) {
//         console.log("A é maior q B");
//     }
//     else {
//         console.log("A é menor q B");     
//     }
// }
// desvio(10,"4")

// const desvio2 = (a,b) =>{
//     if(a==b){
//         console.log("A e B são iguais %")
//     }
//     else if (a>b) {
//         console.log("A é maior q B %");
//     }
//     else {
//         console.log("A é menor q B %");     
//     }
// }

// desvio2(3,5)


function ciclo(frase){

 return frase
}

console.log(   ciclo("Tatu")   );


//ciclo("Bora Aprender JS")

const ciclo2 = (frase,vezes) =>{

    for (let a = 0; a <= vezes; a++) {
        console.log("indice " + a + "");
        console.log(frase)
        
    }
    console.log(" +++++++++++ acabou ++++++++");
}

ciclo2("Bananas",4)

function cicloWhile(frase,vezes) {
    
    let i = 0;
    
    while (i < 5) {
        console.log(frase + i)
        i=i+1
    }
    console.log("++++ FIM DO LOOP ++++++");
}

cicloWhile("Nada Naão", 54654)



 