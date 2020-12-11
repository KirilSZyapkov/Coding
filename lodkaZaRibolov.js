function lodkaZaRibolov(arg1, arg2, arg3) {
    let budget = Number(arg1);
    let season = arg2;
    let quantitySailors = Math.round(arg3);
    let total = 0;

    switch (season) {
        case "Spring":
            if (quantitySailors <= 6) {
                total = 3000 * 0.90;
            } else if (quantitySailors >= 7 && quantitySailors <= 11) {
                total = 3000 * 0.85;
            } else if (quantitySailors >= 12) {
                total = 3000 * 0.75;
            }
            break;
        case "Summer":
            if (quantitySailors <= 6) {
                total = 4200 * 0.90;
            } else if (quantitySailors >= 7 && quantitySailors <= 11) {
                total = 4200 * 0.85;
            } else if (quantitySailors >= 12) {
                total = 4200 * 0.75;
            }
            break;
        case "Autumn":
            if (quantitySailors <= 6) {
                total = 4200 * 0.90;
            } else if (quantitySailors >= 7 && quantitySailors <= 11) {
                total = 4200 * 0.85;
            } else if (quantitySailors >= 12) {
                total = 4200 * 0.75;
            }
            break;
        case "Winter":
            if (quantitySailors <= 6) {
                total = 2600 * 0.90;
            } else if (quantitySailors >= 7 && quantitySailors <= 11) {
                total = 2600 * 0.85;
            } else if (quantitySailors >= 12) {
                total = 2600 * 0.75;
            }
            break;
        default: break;
    }
    if (quantitySailors % 2 === 0 && season !== "Autumn") {
        total = total * 0.95;
    }
    let dif = Math.abs(total - budget);
    if (total < budget) {
        console.log(`Yes! You have ${dif.toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${dif.toFixed(2)} leva.`);
    }
}
lodkaZaRibolov("2000", "Winter", "13")