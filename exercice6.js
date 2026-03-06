let nom = null;
let age = 0;
let ville = "";
let score = undefined;
let actif = false;

let variables = [
    ["nom", nom],
    ["age", age],
    ["ville", ville],
    ["score", score],
    ["actif", actif]
];

for (let i = 0; i < variables.length; i++) {

    let name = variables[i][0];
    let value = variables[i][1];

    console.log(name + " ?? -> " + (value ?? "valeur par défaut"));
    console.log(name + " || -> " + (value || "valeur par défaut"));
    if ((value ?? "valeur") === (value || "valeur")) {
        console.log(name + " : ?? et || -> même résultat");
    } else {
        console.log(name + " : ?? et || -> résultat différent");
    }

    console.log("-----------");
}