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
        // westViews: 0,
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
    // let condition = value => array[i] > value; 

    for(let i = 0 ; i < array.length ; i++) {
        // console.log("\nBOUCLE FOR : ITERATION N° " + i);
        // enter();

        let subArray = array.slice(i+1, array.length);
        // console.log(`Test de ${array[i]} dans le subArray ${subArray}`);
        // enter();

        let temp = 50;

        if (subArray.every(item => item < array[i])){
            // console.log(`TOUS INFERIEURS A ${array[i]}`);
            // enter();
            object.niceBuildings.push(array[i]);
            // nbComparisons++;
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
    // log de vérif
    // console.log(`Liste de buildings = ${objectToTest.array}`);
    // enter();

    // Fonction de la question 2.3.2
    let search = sunsetSide_v2(objectToTest);
    console.log(`\nIl y a ${search.niceBuildings.length} bâtiments avec vue sur l'ouest => ${search.niceBuildings}.`);
    // console.log(`nbComparisons => ${nbComparisons}`);

}

perform();