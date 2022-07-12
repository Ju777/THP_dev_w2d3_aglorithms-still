const fs = require('fs');
const prompt = require("prompt-sync")({ sigint: true });

function enter() {
    return prompt("[ENTER]");
}

function sumCheck_v2(object) {
    array = object.array;
    console.log(`${array} / ${object.sum}`);
    enter();

    array.forEach(number => {
        console.log("Number = " + number);
        let subArray = array.slice(array.indexOf(number), array.length);
        console.log(subArray);
        enter();

        // if (subArray.includes(object.sum - number)) {
        //     console.log(`Gagné : ${number} + ${subArray[subArray.indexOf(object.sum - number)]}.`);
        //     return true;
        // }
    });

}

function initialize() {
    let size = prompt("Quelle taille du tableau pour la recherche ? ");
    let sum = prompt("Quelle somme d'entiers tester ? ");
    let objectToTest = {
        array: Array.from({length: size}, () => Math.floor(Math.random() * 100)),
        sum: parseInt(sum)
    };
    // log de vérif
    // console.log(objectToTest);
    // enter();
    return objectToTest;
}

function perform() {
    console.log("\n" + "~".repeat(50));
    console.log("\tEXERCICES D'ALGORITHMIES");
    console.log("~".repeat(50) + "\n\n");

    // Initialisation des données
    let objectToTest = initialize();
    // log de vérif
    console.log(`Initialisation = ${objectToTest.array} / SOMME RECHERCHÉE = ${objectToTest.sum}`);
    enter();

    // Fonction de la question 2.3.3
    let search = sumCheck_v2(objectToTest);
    // if (search.answer) {
    //     console.log("\n" + search.numbers);
    // } else {
    //     console.log(`Aucune possibilité n'a été trouvée pour obtenir ${objectToTest.sum}`);
    // }
}

perform();