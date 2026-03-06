let pairs = [
    [0, ""],
    [0, "0"],
    [0,false],
    ["", false],
    [null, undefined],
    [null, false],
    [NaN, NaN],
    [1, "1"],
    [" \t\n ", 0]
];

let count = 0;

for (let i = 0; i < pairs.length; i++) {
    let a = pairs[i][0];
    let b = pairs[i][1];

    let displayA;
    if (a === "") {
        displayA = '""';
    } else {
        displayA = String(a);
    }

    let displayB;
    if (b === "") {
        displayB = '""';
    } else {
        displayB = String(b);
    }

    let looseEqual = (a == b);
    let strictEqual = (a === b);

    console.log(displayA + " == " + displayB + " -> " + looseEqual +
                " | " + displayA + " === " + displayB + " -> " + strictEqual);

    if (looseEqual && !strictEqual) {
        count++;
    }
}

console.log("---");
console.log(count + " paire(s) où == et === donnent des résultats différents");