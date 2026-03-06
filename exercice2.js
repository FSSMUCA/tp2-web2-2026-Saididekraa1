let valeurs = [0, 1, "", "0", null, undefined, NaN, false, [], {}];
for ( let i = 0 ; i< 10 ; i++) {
    let v = valeurs[i]
    let display ;
    if (v === "" ) {
        display = "(chaine vide)";
    }
    else {
        display = String(v);
    }
    if (v) {
        console.log(display + " -> truthy")
    }
    else {
        console.log(display + " -> falsy")
    }
}
