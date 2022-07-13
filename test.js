const fs = require('fs');
const prompt = require("prompt-sync")({ sigint: true });

function perform() {
     // Initialisation des données
    let size = prompt("Taille du tableau souhaité ? ");
    let array = Array.from({length: size}, () => Math.floor(Math.random() * 100));

    // log de vérif
    console.log(`Tableau généré = ${array}`);
    prompt("[ENTER TO CONTINUE]");

    //Test sur slice    

    //Test sur slice    
    console.log(array);
    let subArray = array.slice(1, array.length);
    console.log(subArray);
    subArray = array.slice(2, array.length);
    console.log(subArray);
    subArray = array.slice(3, array.length);
    console.log(subArray);
    
}

perform();
