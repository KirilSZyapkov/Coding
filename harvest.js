function harvest(arg1, arg2, arg3, arg4) {
    let areaVineyard = Number(arg1);
    let grapesForKilogram = Number(arg2);
    let needeLitersWine = Number(arg3);
    let numWorkers = Number(arg4);

    let quantityGrapesUsed = areaVineyard * 0.4;
    let kilogramsGrapes = quantityGrapesUsed * grapesForKilogram;
    let litersWine = kilogramsGrapes / 2.5;

    let dif = Math.abs(litersWine - needeLitersWine);
    let literPerPerson = dif / numWorkers;


    if (litersWine < needeLitersWine) {
        console.log(`It will be a tough winter! More ${Math.floor(dif)} liters wine needed.`)
    } else if (litersWine >= needeLitersWine) {
        console.log(`Good harvest this year! Total wine: ${Math.ceil(litersWine)} liters.`);
        console.log(`${Math.ceil(dif)} liters left -> ${Math.ceil(literPerPerson)} liters per person.`);
    }
}
harvest("650",
    "2",
    "175",
    "3")