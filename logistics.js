function logistics(input) {
    let index = 0;
    let numCargoes = Number(input[index]);
    index++;
    let weightOfTheCargo = 0;

    let averagePriceFotTon = 0;
    let percentageTonForMiniBus = 0;
    let percentageTonForTruck = 0;
    let percentageTonForTrain = 0;
    let totalTons = 0;
    let totalTonForMiniBus = 0;
    let totalTonForTruck = 0;
    let totalTonForTrain = 0;
    let priceForMiniBus = 0;
    let priceForTruck = 0;
    let priceFotTrain = 0;
    let totalPrice = 0;

    for (let i = 0; i < numCargoes; i++) {
        weightOfTheCargo = Number(input[index]);
        index++;
        totalTons += weightOfTheCargo;
        if (weightOfTheCargo <= 3) {
            totalTonForMiniBus += weightOfTheCargo;
            priceForMiniBus += weightOfTheCargo * 200;
            totalPrice += priceForMiniBus;
            priceForMiniBus = 0;
        } else if (weightOfTheCargo >= 4 && weightOfTheCargo <= 11) {
            totalTonForTruck += weightOfTheCargo;
            priceForTruck += weightOfTheCargo * 175;
            totalPrice += priceForTruck;
            priceForTruck = 0;
        } else if (weightOfTheCargo >= 12) {
            totalTonForTrain += weightOfTheCargo
            priceFotTrain += weightOfTheCargo * 120;
            totalPrice += priceFotTrain;
            priceFotTrain = 0;
        }

    }
    averagePriceFotTon = totalPrice / totalTons;
    percentageTonForMiniBus = totalTonForMiniBus / totalTons * 100;
    percentageTonForTruck = totalTonForTruck / totalTons * 100;
    percentageTonForTrain = totalTonForTrain / totalTons * 100;

    console.log(averagePriceFotTon.toFixed(2));
    console.log(`${percentageTonForMiniBus.toFixed(2)}%`);
    console.log(`${percentageTonForTruck.toFixed(2)}%`);
    console.log(`${percentageTonForTrain.toFixed(2)}%`);
}
logistics(['5', '2', '10', '20', '1', '7'])