function kvartalnoMagazinche(arg, arg1, arg2) {
    let order = arg;
    let town = arg1;
    let quantity = Number(arg2)

    if (town.toLocaleLowerCase() === "Sofia".toLocaleLowerCase()) {
        switch (order) {
            case "coffee": console.log(quantity * 0.5); break;
            case "water": console.log(quantity * 0.8); break;
            case "beer": console.log(quantity * 1.2); break;
            case "sweets": console.log(quantity * 1.45); break;
            case "peanuts": console.log(quantity * 1.6); break;
        }
    } else if (town.toLocaleLowerCase() === "Plovdiv".toLocaleLowerCase()) {
        switch (order) {
            case "coffee": console.log(quantity * 0.4); break;
            case "water": console.log(quantity * 0.7); break;
            case "beer": console.log(quantity * 1.15); break;
            case "sweets": console.log(quantity * 1.30); break;
            case "peanuts": console.log(quantity * 1.5); break;
        }
    } else if (town.toLocaleLowerCase() === "Varna".toLocaleLowerCase()){
        switch (order) {
            case "coffee": console.log(quantity * 0.45); break;
            case "water": console.log(quantity * 0.7); break;
            case "beer": console.log(quantity * 1.10); break;
            case "sweets": console.log(quantity * 1.35); break;
            case "peanuts": console.log(quantity * 1.55); break;
        }
    }
}
kvartalnoMagazinche("coffee", "varna", "2")