const fs = require('fs');
const prompt = require("prompt-sync")({ sigint: true });

function enter() {
    return prompt("[ENTER]");
}

function sumCheck_v1(object) {
    for(let i = 0 ; i < object.array.length - 1 ; i++){
        // console.log("\n" + "~".repeat(50));
        // console.log("GRANDE ITERATION N°" + i);
        // console.log("-".repeat(50));
        for(let j = i+1 ; j < object.array.length ; j++) {
            // console.log("\n\tPETITE ITERATION N°" + j);
            // console.log(`object.array[${i}] + object.array[${j}] =>  ${object.array[i]} + ${object.array[j]} = ${object.array[i] + object.array[j]} alors que object.sum = ${object.sum}`);
            // enter();

            if (object.array[i] + object.array[j] === object.sum) {
                // console.log("ON EST DANS LE IF A ");
                // enter();
                let result = {
                    answer: true,
                    numbers: `Les nombres gagnants sont ${object.array[i]} + ${object.array[j]} = ${object.sum}`
                }
                return result;
            }
        }
    }

    return false;
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

    // Fonction de la question 2.3.1
    let search = sumCheck_v1(objectToTest);
    if (search.answer) {
        console.log("\n" + search.numbers);
    } else {
        console.log(`Aucune possibilité n'a été trouvée pour obtenir ${objectToTest.sum}`);
    }
}

perform();