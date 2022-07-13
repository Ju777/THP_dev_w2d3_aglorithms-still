const fs = require('fs');
const prompt = require("prompt-sync")({ sigint: true });

let set = new Set();
console.log(set);
set.add(10);
console.log(set);
set.add(20);
console.log(set);
set.add(10);
console.log(set);