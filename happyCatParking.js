function happyCatParking(input) {
    let numDays = Number(input.shift());
    let numHours = Number(input.shift());
    let totalSum = 0;
    let pricePerDay = 0;
    let sumFOrTheDay = 0;

    for (let i = 1; i <= numDays; i++) {
        for (let n = 1; n <= numHours; n++) {
            if (i % 2 === 0 && n % 2 !== 0) {
                pricePerDay = 2.5;
                //console.log(`Day: ${i} - ${pricePerDay}`);
            } else if (i % 2 !== 0 && n % 2 === 0) {
                pricePerDay = 1.25;
                //console.log(`Day: ${i} - ${pricePerDay}`);
            } else {
                pricePerDay = 1;
                //console.log(`Day: ${i} - ${pricePerDay}`);
            }
            sumFOrTheDay+=pricePerDay;
            totalSum += pricePerDay;
        }
        console.log(`Day: ${i} - ${sumFOrTheDay.toFixed(2)} leva`);
        sumFOrTheDay = 0;
    }
    console.log(`Total: ${totalSum.toFixed(2)} leva`);
}
happyCatParking(["5", "2"])