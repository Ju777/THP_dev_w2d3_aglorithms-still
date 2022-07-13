const fs = require('fs');
const prompt = require("prompt-sync")({ sigint: true });
var nbComparisons = 0;

function enter() {
    return prompt("[ENTER]");
}

function sunsetSide_v1(object) {
    array = object.array;
    for(let i = 0 ; i < array.length ; i++) {

        let count = i+1;
        for(let j = i+1 ; j < array.length ; j++) {
            
            // Ce que l'on cherche à vérifier ici : que tous les nombers qui suivent array[i] lui sont inférieurs.
            if(array[i] > array[j]) {
                count++;
                nbComparisons++;
            }
        }
        if (count === array.length) {
            object.niceBuildings.push(array[i]);
        }
    }
    return object;
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
    console.log(objectToTest);
    console.log("\n");
    enter();

    return objectToTest;
}

function perform() {
    console.log("\n" + "~".repeat(50));
    console.log("\tEXERCICES D'ALGORITHMIES");
    console.log("~".repeat(50) + "\n\n");

    // Initialisation des données
    let objectToTest = initialize();
    
    let search = sunsetSide_v1(objectToTest);
    console.log(`\nIl y a ${search.niceBuildings.length} bâtiments avec vue sur l'ouest => ${search.niceBuildings}.`);
    console.log(`nbComparisons => ${nbComparisons}`);

}

perform();