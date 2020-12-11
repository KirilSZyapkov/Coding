function backToThePast(input) {
    let heritage = Number(input.shift());
    let endYear = Number(input.shift());
    let sum = 0;
    let curentYear = 18;

    for (let i = 1800; i <= endYear; i++) {
        if (i % 2 === 0) {
            sum += 12000;
        } else {
            sum += 12000 + 50 * curentYear;
        }
        curentYear++;
    }
    let dif = Math.abs(sum - heritage);
    if (heritage >= sum) {
        console.log(`Yes! He will live a carefree life and will have ${dif.toFixed(2)} dollars left.`);
    } else {
        console.log(`He will need ${dif.toFixed(2)} dollars to survive.`);
    }
}
backToThePast(["100000.15", "1808"])