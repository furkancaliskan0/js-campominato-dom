//L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
//Ogni cella ha un numero progressivo, da 1 a 100.
//Ci saranno quindi 10 caselle per ognuna delle 10 righe.
//Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.


const playButton = document.getElementById('play-button');
playButton.addEventListener('click' , 
function(){

    let difficultyOption = document.getElementById('difficulty');
    console.log(difficultyOption.value);

    const gridElement = document.getElementById('container');
    gridElement.innerHTML ='';
    let boxNumber = 0;

    if(difficultyOption.value == 'facile'){
        boxNumber = 100;
        console.log(boxNumber);
    }else if (difficultyOption.value == 'medio'){
        boxNumber = 81;
        console.log(boxNumber);
    }else{
        boxNumber = 49;
        console.log(boxNumber);
    }

    const bombsNumber = bombs(16, boxNumber);
    console.log(bombsNumber);

    let points = 0;
    
    for(let i = 0; i < boxNumber; i++){
        const gridBox = document.createElement('div');
        
        gridBox.addEventListener('click' , 
        function(){

            if(bombsNumber.includes(i)){
                gridBox.classList.add('checked-bombs')
                writeInElementById('score', `Hai perso il tuo punteggio è: ${points + 1}`);
            }else{
                writeInElementById('score', `il tuo punteggio è: ${points + 1}`);
                points++;
                gridBox.classList.add('checked');
            }
            
        })
            if(difficultyOption.value == 'facile'){
                gridBox.classList.add('box-facile');
                gridBox.innerHTML += i + 1;
            }else if (difficultyOption.value == 'medio'){
                gridBox.classList.add('box-medio');
                gridBox.innerHTML += i + 1;
            }else{
                gridBox.classList.add('box-difficile');
                gridBox.innerHTML += i + 1;
            }
            
            gridElement.appendChild(gridBox);
    }
    
});


    function bombs (numberBombs, Cells){
        const arrayBombs = [];
        for(let i = 0; i < numberBombs; i++){
            arrayBombs.push(generateUniqueRandomNumber(arrayBombs, 1, Cells ));
        }
        return arrayBombs;
    }

    function generateUniqueRandomNumber (numbArray, min ,max){
        let check = false;
        let random;

        while(!check){
            random = Math.floor(Math.random() * ((max + 1 ) - min) + min);
            if( !numbArray.includes(random)){
                check = true;
            }
        }
        return random;
    }

    function writeInElementById(elementId, string){
        document.getElementById(elementId).innerHTML = string;
    }