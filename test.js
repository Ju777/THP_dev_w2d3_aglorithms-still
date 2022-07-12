const fs = require('fs');
const prompt = require("prompt-sync")({ sigint: true });

function perform() {
     // Initialisation des données
    let size = prompt("Taille du tableau souhaité ? ");
    let randomArray = Array.from({length: size}, () => Math.floor(Math.random() * 100));

    // log de vérif
    console.log(`Tableau généré = ${randomArray}`);
    prompt("[ENTER TO CONTINUE]");

    console.log(`\nAffichage des index croissants via un forEach :`);
    console.log("INDEX \t-> VALEUR");
    randomArray.map(item => {
        let subArray = randomArray.slice(randomArray.indexOf(item), randomArray.length);
        console.log(`${subArray}`);
    });
}

perform();
