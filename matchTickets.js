function matchTickets(arg1, arg2, arg3) {
    let budget = Number(arg1);
    let categoryOfTheTicket = arg2;
    let numPersons = Number(arg3);
    let priceForTranport = 0;
    let moneyForTickets = 0;
   
    if (numPersons >= 1 && numPersons <= 4) {
        priceForTranport = budget * 0.75;
    } else if (numPersons >= 5 && numPersons <= 9) {
        priceForTranport = budget * 0.6;
    } else if (numPersons >= 10 && numPersons <= 24) {
        priceForTranport = budget * 0.5;
    } else if (numPersons >= 25 && numPersons <= 49) {
        priceForTranport = budget * 0.4;
    } else if (numPersons >= 50) {
        priceForTranport = budget * 0.25;
    }

    if (categoryOfTheTicket === "VIP") {
        moneyForTickets = numPersons * 499.99;
    } else if (categoryOfTheTicket === "Normal") {
        moneyForTickets = numPersons * 249.99;
    }

    let totalNeededMoney = priceForTranport + moneyForTickets;
    let dif = Math.abs(totalNeededMoney - budget);
    if (totalNeededMoney <= budget) {
        console.log(`Yes! You have ${dif.toFixed(2)} leva left.`);
    } else if (totalNeededMoney > budget) {
        console.log(`Not enough money! You need ${dif.toFixed(2)} leva.`);
    }
}
matchTickets("30000", "VIP", "49")