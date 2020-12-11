function Akvarium (daljina, shirina, visochina, zaetProcent) {
    let sideA = Number(daljina);
    let sideB = Number(shirina);
    let sideC = Number(visochina);
    let procent = Number(zaetProcent);
    let obem = sideA * sideB * sideC;
    let lVoda = obem * 0.001;
    let realniLitri = lVoda - (lVoda * (procent/100)).toFixed(3);

    var readline = require('readline');
    const { exit } = require('process');
    var rl = readline.createInterface(process.stdin, process.stdout);
    //rl.setPrompt('');
    rl.prompt();
    rl.on('line', function (line) {
        if (line === "") rl.close();
        rl.prompt();
    }).on('close', function () {
        process.exit(0);
    });

    console.log(realniLitri);

}

Akvarium("85", "75", "47", "17")

