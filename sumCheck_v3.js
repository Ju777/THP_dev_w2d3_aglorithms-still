const fs = require('fs');
const prompt = require("prompt-sync")({ sigint: true });
var nbComparisons = 0;

function enter() {
    return prompt("[ENTER]");
}

function dataToObject() {
    let sum = prompt("Quelle somme doit-on tester ? > ");
    while(parseInt(sum) != sum || parseInt(sum) < 0) {
        sum = prompt("Erreur : veuillez entrez un entier positif > ");
    }

    let size = prompt("Quelle taille du tableau de recherche ? > ");
    while(parseInt(size) != size || parseInt(size) < 0) {
        size = prompt("Erreur : veuillez entrez un entier positif > ");
    }

    objectToTest = {
        array: Array.from({length: size}, () => Math.floor(Math.random() * 100)),
        // array: [ 31, 59, 80, 44, 8, 20, 38, 40, 25, 36, 88, 13, 9, 33, 81, 27, 33, 91, 1, 62 ],
        sum: parseInt(sum)
        // pairs: []
    };

    //Log de vérif
    console.log("\nVos données vont apparaître :");
    enter();
    console.log(`\n${objectToTest.sum} est la somme recherchée parmi ${size} valeurs aléatoires :\n\n${objectToTest.array}\n`);
    enter();

    return objectToTest;
}

function  sumCheck_v3(object) {
    let array = object.array;
    
    for(let i = 0 ; i < array.length ; i++) {
        let subArray = array.slice(i, array.length);
        nbComparisons++;
        // console.log(subArray);
        if(subArray.includes(object.sum - array[i])) {
            console.log(`Victoire ! ${array[i]} + ${array[array.indexOf(object.sum - array[i])]}`);
            enter();
            return true;
        } 
    }

    return false;
        
}

function perform() {
    console.log("\n" + "~".repeat(50));
    console.log("\tEXERCICES D'ALGORITHMIES");
    console.log("~".repeat(50) + "\n\n");

    // Initialisation des données
    var objectToTest = dataToObject();

    let search =  sumCheck_v3(objectToTest);
    console.log(search);
    console.log(`nbComparisons => ${nbComparisons}`);
}

perform();