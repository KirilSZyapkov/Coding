function bakingCompetition(input) {
    let index = 0;
    let numParticipants = Number(input[index]);
    index++;
    let participant = input[index];
    index++;
    let kindOfCake = input[index];
    index++;
    let quantityBaked = 0;

    let counter = 1;

    let moneyFromCookies = 0;
    let moneyFromCakes = 0;
    let moneyFromWaffles = 0;
    let totalMoney = 0;
    let totalBakerySold = 0;
    let money=0;

    let quantityCookies = 0;
    let quantityCakes = 0;
    let quantityWaffles = 0;

    while (counter <= numParticipants) {
        while (kindOfCake !== "Stop baking!") {
            quantityBaked = Number(input[index]);
            index++;
            switch (kindOfCake) {
                case "cookies":
                    quantityCookies += quantityBaked;
                    kindOfCake = input[index];
                    index++;
                    break;
                case "cakes":
                    quantityCakes += quantityBaked;
                    kindOfCake = input[index];
                    index++;
                    break;
                case "waffles":
                    quantityWaffles += quantityBaked;
                    kindOfCake = input[index];
                    index++;
                    break;
                default: break;
            }
        }

        console.log(`${participant} baked ${quantityCookies} cookies, ${quantityCakes} cakes and ${quantityWaffles} waffles.`);
        participant = input[index];
        index++;
        kindOfCake = input[index];
        index++;
        counter++;

        moneyFromCookies += quantityCookies * 1.5;
        moneyFromCakes += quantityCakes * 7.80;
        moneyFromWaffles += quantityWaffles * 2.3;

        money += moneyFromCookies + moneyFromCakes + moneyFromWaffles;
        totalBakerySold += quantityCookies + quantityCakes + quantityWaffles;
        totalMoney = money;
        money=0;

        quantityCookies = 0;
        quantityCakes = 0;
        quantityWaffles = 0;
    }
    console.log(`All bakery sold: ${totalBakerySold}`);
    console.log(`Total sum for charity: ${totalMoney.toFixed(2)} lv.`);
}
bakingCompetition([
    '2',            'Annie',
    'cakes',        '3',
    'waffles',      '6',
    'cookies',      '2',
    'Stop baking!', 'Petya',
    'waffles',      '8',
    'Stop baking!'
  ])