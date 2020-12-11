function nevalidnoChislo(input) {
    let num = parseInt(input);
    if (num >= 100 && num <= 200 || num === 0) {
    } else {
        console.log("invalid");
    }
}
nevalidnoChislo("220");