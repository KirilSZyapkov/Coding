function charityCampaign (durationCharity, numberConfectioner, quantityCakes, quantityWaffles, quantityPancakes) {
    let Cake = 45;
    let Waffles = 5.80;
    let Pancakes = 3.20;
    
    let numCakes = Number(quantityCakes) * Number(numberConfectioner);
    let numWaffles = Number(quantityWaffles) * Number(numberConfectioner);
    let numPancakes = Number(quantityPancakes) * Number(numberConfectioner);

    let incomeCake = numCakes * Cake;
    let incomeWaffles = numWaffles * Waffles;
    let incomePancakes = numPancakes * Pancakes;

    let sumIncome = (incomeCake * 20) + (incomeWaffles * 20) + (incomePancakes * 20);
    let profit = (sumIncome - sumIncome / 8).toFixed(2);

    console.log(`${profit} lv`);
    
}

charityCampaign("23", "8", "14", "30", "16")