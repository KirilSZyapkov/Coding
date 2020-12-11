function bikeRace(arg1, arg2, arg3) {
    let numJuniorsBikers = Number(arg1);
    let numSeniorsBikers = Number(arg2)
    let roadType = arg3;
    let numParticipants = numJuniorsBikers + numSeniorsBikers;
    let moneyForCharity = 0;
    let colectedMoneyFromJuniors = 0;
    let colectedMoneyFromSeniors = 0;

    switch (roadType) {
        case "trail":
            colectedMoneyFromJuniors = numJuniorsBikers * 5.5;
            colectedMoneyFromSeniors = numSeniorsBikers * 7;
            break;
        case "cross-country":
            if (numParticipants >= 50) {
                colectedMoneyFromJuniors = numJuniorsBikers * (8 * 0.75);
                colectedMoneyFromSeniors = numSeniorsBikers * (9.5 * 0.75);
            } else {
                colectedMoneyFromJuniors = numJuniorsBikers * 8;
                colectedMoneyFromSeniors = numSeniorsBikers * 9.5;
            }
            break;
        case "downhill":
            colectedMoneyFromJuniors = numJuniorsBikers * 12.25;
            colectedMoneyFromSeniors = numSeniorsBikers * 13.75;
            break;
        case "road":
            colectedMoneyFromJuniors = numJuniorsBikers * 20;
            colectedMoneyFromSeniors = numSeniorsBikers * 21.50;
            break;
        default: break;
    }
    moneyForCharity = (colectedMoneyFromJuniors + colectedMoneyFromSeniors) * 0.95;
console.log(moneyForCharity.toFixed(2));
}
bikeRace("20", "25", "cross-country")