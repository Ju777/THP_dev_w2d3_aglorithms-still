const fs = require('fs');
const prompt = require("prompt-sync")({ sigint: true });
var nbComparisons = 0;

function enter() {
    return prompt("[ENTER]");
}

function initialize() {
    let size = prompt("Quelle taille de tableau pour la recherche ? ");
    let objectToTest = {
        array: Array.from({length: size}, () => Math.floor(Math.random() * 100)),
        // westViews: 0,
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
    // console.log(`Lancement de sunsetSide_v3(object), le tableau transmis est = ${object.array}`);
    // enter();

    // Premier cas de base : le tableau transmis a une taille de 1
    if (object.array.length === 1) {
        object.niceBuildings.add(object.array[0]);
        // console.log("Il s'agit d'un tableau à une case, on l'ajoute ! Et l'objet devient :");
        // console.log(object)
        // enter();

        return object;
    }

    // On détermine la maximum du tableau, et on l'isole.
    let max = Math.max(...object.array);
    nbComparisons++;
    // console.log(`Le max trouvé est ${max}`);
    // enter();
    object.niceBuildings.add(max);
    // console.log(`On l'isole dans object.niceBuildings => ${object.niceBuildings}`);
    // enter();

    // On conserve la partie du tableau qui suit le max et on recommence l'opération précédente
    // Deuxième cas de base : le max trouvé était le dernier élément du tableau de recherche
    if(object.array.indexOf(max) === object.array.length - 1 ) {
        // console.log("Il s'agit du dernier élément du tableau de recherche, On sort de la fonction :");
        // console.log(object)
        // enter();
        return object;
    } else {
        object.array = object.array.slice(object.array.indexOf(max) + 1, object.array.length);
        // console.log(`Le tableau devient = ${object.array}, et l'objet est : `);
        // console.log(object);
        // enter();
        
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
    // log de vérif
    // console.log(`Liste de buildings = ${objectToTest.array}`);
    // enter();

    // Fonction de la question 2.3.2
    let search = sunsetSide_v3(objectToTest);
    console.log(`\nIl y a ${search.niceBuildings.size} bâtiments avec vue sur l'ouest`);
    console.log(search.niceBuildings);
    console.log(`nbComparisons => ${nbComparisons}`);

    // console.log("Affichage de la variable search :");
    // console.log(search);

}

perform();