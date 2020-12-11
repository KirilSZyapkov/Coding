function bills(input) {
    let index = 0;
    let numMonth = Number(input[index]);
    index++;
    let priceForElectricity = 0;
    let priceElectricity = 0;
    let priceWater = 0;
    let priceInternet = 0;
    let priceOther = 0;
    let averageSum = 0;
    let totalBills = 0;

    for (let i = 0; i < numMonth; i++) {
        priceForElectricity = Number(input[index]);
        index++
        priceElectricity += priceForElectricity;
        priceOther += (priceForElectricity + 20 + 15) * 1.2;
       
    }
    priceWater = 20 * numMonth;
    priceInternet = 15 * numMonth;
    totalBills = priceWater + priceInternet + priceOther + priceElectricity;
    averageSum = totalBills / numMonth;

    console.log(`Electricity: ${priceElectricity.toFixed(2)} lv`);
    console.log(`Water: ${priceWater.toFixed(2)} lv`);
    console.log(`Internet: ${priceInternet.toFixed(2)} lv`);
    console.log(`Other: ${priceOther.toFixed(2)} lv`);
    console.log(`Average: ${averageSum.toFixed(2)} lv`);
}
bills(['5', '68.63', '89.25', '132.53', '93.53', '63.22'])