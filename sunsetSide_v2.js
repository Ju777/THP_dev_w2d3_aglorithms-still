const fs = require('fs');
const prompt = require("prompt-sync")({ sigint: true });
// var nbComparisons = 0;

function enter() {
    return prompt("[ENTER]");
}

function initialize() {
    let size = prompt("Quelle taille du tableau de recherche ? > ");
    while(parseInt(size) != size || parseInt(size) <= 0) {
        size = prompt("Erreur : veuillez entrez un entier positif > ");
    }

    let objectToTest = {
        array: Array.from({length: size}, () => Math.floor(Math.random() * 100)),
        niceBuildings: []
    };

    // Log de vérif
    console.log("\nVos données vont apparaître :");
    enter();
    console.log(`\nVoici la liste de buildings : ${objectToTest.array}.\n`);
    enter();

    return objectToTest;
}

function sunsetSide_v2(object) {
    array = object.array;

    for(let i = 0 ; i < array.length ; i++) {

        let subArray = array.slice(i+1, array.length);

        if (subArray.every(item => item < array[i])){
            object.niceBuildings.push(array[i]);
        }
    }

    return object;
    
}

function perform() {
    console.log("\n" + "~".repeat(50));
    console.log("\tEXERCICES D'ALGORITHMIES");
    console.log("~".repeat(50) + "\n\n");

    // Initialisation des données
    let objectToTest = initialize();

    let search = sunsetSide_v2(objectToTest);
    console.log(`\nIl y a ${search.niceBuildings.length} bâtiments avec vue sur l'ouest => ${search.niceBuildings}.`);

}

perform();