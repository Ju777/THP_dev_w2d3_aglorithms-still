const fs = require('fs');
const prompt = require("prompt-sync")({ sigint: true });

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
        sum: parseInt(sum),
        pairs: []
    };

    //Log de vérif
    console.log("\n Vos données sont :");
    console.log(objectToTest);
    console.log("\n");
    enter();

    return objectToTest;
}

function mergeSort(array) { // Using recursion
   
    // Base case : si le tableau array contient 1 élélent ou moins, on le retourne.
    if (array.length < 2) {
        // console.log(`Récursion terminés pour ${array}.`)
        // prompt("[ENTER]");
        return array;
    }
    
    else {

        // Le départ est de séparer le tableau en 2 moitiés
        let left = array.slice(0, array.length/2);
        let right = array.slice(array.length/2, array.length);

        mergeSort(left);
        mergeSort(right);

        return merging(left, right, array);
    }
    
}

function merging(left, right, array) {
    let i = 0;
    let j = 0;
    let k = 0;

    while(i < left.length && j < right.length) {
        
        if(left[i] < right[j]) {
            this.nbComparisons++;
            array[k] = left[i];
            i++;
            k++;
        } else {
            array[k] = right[j];
            j++;
            k++;
        }
    }

    while(i < left.length) {
        array[k] = left[i];
        i++;
        k++;
    }

    while(j < right.length) {
        array[k] = right[j];
        j++;
        k++;
    }
    return array;
}

function sumCheck_v3(object) {
    // First we sort the array.
    let array = object.array;
    mergeSort(array, 0, array.length-1);
    //Log de vérif
    // console.log(object);
    // enter();

    // The we check the sum through the "two-ponters" method (https://www.geeksforgeeks.org/given-an-array-a-and-a-number-x-check-for-pair-in-a-with-sum-as-x/)
    let l = 0;
    let r = array.length -1 ;
    while(l !== r) {
        if (array[l] + array[r] > object.sum) {
            // console.log("CP A");
            // console.log(`On a ${array[l]} + ${array[r]} PLUS GRAND QUE`);
            // enter();
            r--;
            // console.log(`On va donc tester avec ${array[l]} + ${array[r]} ?`);
            // enter();
        }

        if (array[l] + array[r] < object.sum) {
            // console.log("CP B");
            // console.log(`On a ${array[l]} + ${array[r]} PLUS PETIT QUE`);
            // enter();
            l++;
            // console.log(`On va donc tester avec ${array[l]} + ${array[r]} ?`);
            // enter();
        }

        if (array[l] + array[r] === object.sum) {
            // console.log("CP C => SOMME TROUVÉE");
            // enter();
            let result = {
                answer: true,
                foundPair: `${array[l]} + ${array[r]}`
            }
            return result;
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

    // Fonction de la question 2.3.3 v2
    // let search = sumCheck_v2(objectToTest);

    // if (search) {
    //     console.log("\n" + "~".repeat(30));
    //     console.log(`Voici les paires trouvées avec sumCheck_v2 pour ${objectToTest.sum} :`);
    //     console.log(objectToTest.pairs);
    //     console.log("~".repeat(30));
    // } else {
    //     console.log("\nPas de paires additionnables trouvées.")
    // }
    // enter();

    let search = sumCheck_v3(objectToTest);
    if (search) {
        console.log(`${search.answer} => ${search.foundPair}`);
    } else {
        console.log(`${search} => pas de solution trouvée.`);
    }
    
}

perform();