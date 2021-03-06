const fs = require('fs');
const prompt = require("prompt-sync")({ sigint: true });
var nbComparisons = 0;

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
        niceBuildings: new Set()
    };

    // Log de vérif
    console.log("\nVos données vont apparaître :");
    enter();
    console.log(`\nVoici la liste de buildings : ${objectToTest.array}.\n`);
    enter();

    return objectToTest;
}

function sunsetSide_v3(object) {

    // Premier cas de base : le tableau transmis a une taille de 1
    if (object.array.length === 1) {
        object.niceBuildings.add(object.array[0]);
        return object;
    }

    // On détermine la maximum du tableau, et on l'isole.
    let max = Math.max(...object.array);
    nbComparisons++;

    object.niceBuildings.add(max);

    // On conserve la partie du tableau qui suit le max et on recommence l'opération précédente
    // Deuxième cas de base : le max trouvé était le dernier élément du tableau de recherche
    if(object.array.indexOf(max) === object.array.length - 1 ) {
        return object;
    } else {
        object.array = object.array.slice(object.array.indexOf(max) + 1, object.array.length);     
        sunsetSide_v3(object);
        return object;
    }
}

function perform() {
    console.log("\n" + "~".repeat(50));
    console.log("\tEXERCICES D'ALGORITHMIES");
    console.log("~".repeat(50) + "\n\n");

    // Initialisation des données
    let objectToTest = initialize();

    let search = sunsetSide_v3(objectToTest);
    console.log(`\nIl y a ${search.niceBuildings.size} bâtiments avec vue sur l'ouest.`);
    console.log(search.niceBuildings);
    console.log(`nbComparisons => ${nbComparisons}`);

}

perform();