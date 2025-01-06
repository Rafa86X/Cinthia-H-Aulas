
// Pegar o elemento

const matriz = document.getElementById("matriz");
const inputNum = document.getElementById("input-dados");
const botao = document.getElementById("botao")



function criaMatriz(repet){
    //zera a matriz
    matriz.innerHTML = "";

    for (let i = 0; i < repet; i++) {

        const linha = document.createElement('div');
        linha.classList.add("linha");
    
            for(let j=0; j<repet; j=j+1){
    
            
                // Criar uma caixinha dinamicamente
                const caixinha = document.createElement('div');
                //dando a classe "caixinha" para o elemento criado chamado caiixinha
                caixinha.classList.add("quadradinho");
    
            
                
                // adicionar ela dentro da linha
                linha.appendChild(caixinha)
            }
    
    
    matriz.appendChild(linha)
    
    }
}


botao.addEventListener("click",()=>{
    const repet = inputNum.value
    criaMatriz(repet)

})