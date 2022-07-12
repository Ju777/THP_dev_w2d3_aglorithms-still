const fs = require('fs');
const prompt = require("prompt-sync")({ sigint: true });

// Les 3 fonctions qui suivent valident et formattent les données du fichier list.txt en un tableau
function validateInputFile(argument) {
    if (argument === "list_even.txt" || argument === "list_odd.txt" || argument === "list.txt") {
        return true;
    }
    else {
        console.log("Erreur, veuillez saisir :\n-> node sorting.js list.txt <-");
        return false;
    }
}

function getDataFromFile(fileName) {
    var data;
    try {
        data = fs.readFileSync(fileName, 'utf8');
    } catch (error) {
        console.error(error.message);
    }
    return data;
}

function dataToObject(data) {
    let array = data.split(' ');
    array = array.map(string => string = parseInt(string));

    objectToTest = {
        array: array,
        sum: 33,
        pairs: []
    };
    return objectToTest;
}
// Fin des 3 fonctions de validation et formatage des données de list.txt en un tableau

// La fonction suivante ré-intialise le tableau de données à trier, à partir de list.txt.
function dataReset(){
    if (validateInputFile(process.argv[2])) {
        const data = getDataFromFile(process.argv[2]);
        const dataObject = dataToObject(data);
        return dataObject;
    } else {
        return false;
    }
}

function enter() {
    return prompt("[ENTER]");
}

function sumCheck_v2(object) {
    array = object.array;
    //Log de vérif
    console.log(`La somme recherchée est ${object.sum}, à travers le tableau suivant ${array}.`);
    enter();

    let count = 0;
    array.forEach(number => {
        // console.log(`INDEX : ${array.indexOf(number)}\t -> VALEUR : ${number}`);
        let subArray = array.slice(array.indexOf(number), array.length);
        // console.log(subArray);
        // enter();
        if (subArray.includes(object.sum - number)) {
            // console.log("\n" + "~".repeat(100));
            // console.log(`\tIl y a complémentaire à ${number} ! Il est à l'indice ${array.indexOf(object.sum - number)}, c'est le nombre ${array[array.indexOf(object.sum - number)]}.`);
            // console.log(`\t[VÉRIF] => ${number} + ${array[array.indexOf(object.sum - number)]} = ? (le résultat devrait être ${object.sum})`);
            // console.log("~".repeat(100));
            object.pairs.push(`${number} + ${array[array.indexOf(object.sum - number)]}`);
            count++;
        }
    });

    return count > 0 ? true : false;
}

function perform() {
    console.log("\n" + "~".repeat(50));
    console.log("\tEXERCICES D'ALGORITHMIES");
    console.log("~".repeat(50) + "\n\n");

    // Initialisation des données
    var objectToTest = dataReset();
    
    if (objectToTest !== false) {

        // log de vérif
        // console.log(`Tableau de départ = ${objectToTest.array} <=> La somme recherchée est X + Y = ${objectToTest.sum}`);
        // enter();

        // Fonction de la question 2.3.3
        let search = sumCheck_v2(objectToTest);
        if (search) {
            console.log("\n" + "~".repeat(30));
            console.log(`Voici les paires trouvées pour ${objectToTest.sum} :`);
            console.log(objectToTest.pairs);
            console.log("~".repeat(30));
        } else {
            console.log("\nPas de paires additionnables trouvées.")
        }

    }
}

perform();