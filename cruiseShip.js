function cruiseShip(input) {
    let cruisType = input[0];
    let cabinType = input[1];
    let numberOfNihts = input[2];
    let totalPrice = 0;

    if (cruisType === "Mediterranean") {
        switch (cabinType) {
            case "standard cabin": totalPrice = numberOfNihts * 4 * 27.50; break;
            case "cabin with balcony": totalPrice = numberOfNihts * 4 * 30.20; break;
            case "apartment": totalPrice = numberOfNihts * 4 * 40.50; break;
            default: break;
        }
    } else if (cruisType === "Adriatic") {
        switch (cabinType) {
            case "standard cabin": totalPrice = numberOfNihts * 4 * 22.99; break;
            case "cabin with balcony": totalPrice = numberOfNihts * 4 * 25.00; break;
            case "apartment": totalPrice = numberOfNihts * 4 * 34.99; break;
            default: break;
        }
    } else if (cruisType === "Aegean") {
        switch (cabinType) {
            case "standard cabin": totalPrice = numberOfNihts * 4 * 23.00; break;
            case "cabin with balcony": totalPrice = numberOfNihts * 4 * 26.60; break;
            case "apartment": totalPrice = numberOfNihts * 4 * 39.80; break;
            default: break;
        }
    }
    if (numberOfNihts > 7) {
        totalPrice = totalPrice * 0.75;
        console.log(`Annie's holiday in the ${cruisType} sea costs ${totalPrice.toFixed(2)} lv.`);
    } else {
        console.log(`Annie's holiday in the ${cruisType} sea costs ${totalPrice.toFixed(2)} lv.`);
    }

}
cruiseShip([ 'Adriatic', 'apartment', '5'])