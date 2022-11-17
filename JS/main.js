//L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
//Ogni cella ha un numero progressivo, da 1 a 100.
//Ci saranno quindi 10 caselle per ognuna delle 10 righe.
//Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

// creare contenitore 
const contenitore = document.getElementById("container");

console.log(contenitore);


// creare bottone
const button = document.getElementById("button");

button.addEventListener ("click",

    function() {
        contenitore.innerHTML = '';
        console.clear();
        for (let i = 1; i <= 100; i++ ){
            let myElement = createSquare(i);
            myElement.addEventListener("click",
                function() {
                    this.classList.add("clicked");
                    console.log('Hai cliccato la cella:', i);
                }
            )
            contenitore.appendChild(myElement);
        }
    }
)

function createSquare (i){

    const element = document.createElement("div");
    element.classList.add("box");
    element.innerHTML = i;

    return element;

}


function numRandom (min, max){
    return (Math.floor(Math.random() * ((max + 1) - min) + min));
}



