
const cinema = document.getElementById("cinema")

var numero = 0;

for (let i = 0; i < 10; i++) {
    
    const fileiraAssentos = document.createElement("div");
    fileiraAssentos.classList.add("fileira");
    

    if(i==0){
        for (let j = 0; j < 13; j++) {
            numero = numero + 1 ;
            const assento = document.createElement("div");

            assento.addEventListener("click", ()=>{

                if(assento.style.backgroundColor === "lightgreen"){
                    alert("Assento ocupado!")
                }else{
                     assento.style.backgroundColor = "lightgreen"
                }


            })

            assento.classList.add("assentos");
            assento.innerHTML = numero;
            fileiraAssentos.appendChild(assento);
        }
    }else{
        for (let j = 0; j < 15; j++) {
            numero = numero + 1 ;
            const assento = document.createElement("div");

            assento.addEventListener("click", ()=>{
                if(assento.style.backgroundColor === "lightgreen"){
                    alert("Assento ocupado!")
                }else{
                     assento.style.backgroundColor = "lightgreen"
                }
            })


            assento.classList.add("assentos");
            assento.innerHTML = numero;
            fileiraAssentos.appendChild(assento);
        }
    }

cinema.appendChild(fileiraAssentos); 
    
}



