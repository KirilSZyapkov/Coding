function AlcoholExchange(priceWiskyLiter, quantityBeer, quantityWine, quantityRakiya, quantityWisky) {
    // цената на ракията е на половина по-ниска от тази на уискито;
    // цената на виното е с 40% по-ниска от цената на ракията;
    // цената на бирата е с 80% по-ниска от цената на ракията.

    let priceWisky = Number(priceWiskyLiter);
    let priceRakiya = Number(priceWisky) / 2;
    let priceWine = Number(priceRakiya) * 0.6;
    let priceBeer = Number(priceRakiya) * 0.2;

    let wisky = priceWisky * quantityWisky;
    let rakiya = priceRakiya * quantityRakiya;
    let wine = priceWine * quantityWine;
    let beer = priceBeer * quantityBeer;

    let sum = (wisky + rakiya + wine + beer).toFixed(2);

    console.log(sum);
    
}
AlcoholExchange("63.44", "3.57", "6.35", "8.15", "2.5")