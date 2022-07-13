const fs = require('fs');
const prompt = require("prompt-sync")({ sigint: true });
var nbComparisons = 0;

function enter() {
    return prompt("[ENTER]");
}

function sunsetSide_v1(object) {
    array = object.array;
    for(let i = 0 ; i < array.length ; i++) {
        // console.log("\n" + "~".repeat(50));
        // console.log(`GRANDE BOUCLE : ITERATION N° ${i}. westViews trouvées => ${object.westViews}.`);
        // enter();

        let count = i+1;
        for(let j = i+1 ; j < array.length ; j++) {
            
            // Ce que l'on cherche à vérifier ici : que tous les nombers qui suivent array[i] lui sont inférieurs.
            if(array[i] > array[j]) {
                count++;
                nbComparisons++;
                // console.log(`${array[i]} > ${array[j]} => count ++ : ${count}`);
                // enter();
            }
        }
        if (count === array.length) {
            // object.westViews++;
            object.niceBuildings.push(array[i]);
            // console.log(`Ce batiment a ${array[i]} étages a une vue sur l'ouest : object.westViews vaut désormais ${object.westViews}`);
            // enter();
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
        // westViews: 0,
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
    // log de vérif
    // console.log(`Liste de buildings = ${objectToTest.array}`);
    // enter();

    // Fonction de la question 2.3.2
    let search = sunsetSide_v1(objectToTest);
    console.log(`\nIl y a ${search.niceBuildings.length} bâtiments avec vue sur l'ouest => ${search.niceBuildings}.`);
    console.log(`nbComparisons => ${nbComparisons}`);

}

perform();