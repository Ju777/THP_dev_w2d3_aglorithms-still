const fs = require('fs');
const prompt = require("prompt-sync")({ sigint: true });
var nbComparisons = 0;

function enter() {
    return prompt("[ENTER]");
}

function sumCheck_v1(object) {
    for(let i = 0 ; i < object.array.length - 1 ; i++){
        for(let j = i+1 ; j < object.array.length ; j++) {
            nbComparisons++;
            if (object.array[i] + object.array[j] === object.sum) {
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

    let sum = prompt("Quelle somme doit-on tester ? > ");
    while(parseInt(sum) != sum || parseInt(sum) <= 0) {
        sum = prompt("Erreur : veuillez entrez un entier positif > ");
    }

    let size = prompt("Quelle taille du tableau de recherche ? > ");
    while(parseInt(size) != size || parseInt(size) <= 0) {
        size = prompt("Erreur : veuillez entrez un entier positif > ");
    }
    
    let objectToTest = {
        array: Array.from({length: size}, () => Math.floor(Math.random() * 100)),
        sum: parseInt(sum)
    };

    //Log de vérif
    console.log("\nVos données vont apparaître :");
    enter();
    console.log(`\n${objectToTest.sum} est la somme recherchée parmi ${size} valeurs aléatoires :\n\n${objectToTest.array}\n`);
    enter();

    return objectToTest;
}

function perform() {
    console.log("\n" + "~".repeat(50));
    console.log("\tEXERCICES D'ALGORITHMIES");
    console.log("~".repeat(50) + "\n\n");

    // Initialisation des données
    let objectToTest = initialize();

    // Fonction de la question 2.3.1
    let search = sumCheck_v1(objectToTest);
    if (search.answer) {
        console.log("\n" + search.numbers);
    } else {
        console.log(`Aucune possibilité n'a été trouvée pour obtenir ${objectToTest.sum}`);
    }

    console.log(`nbComparisons => ${nbComparisons}`);
}

perform();