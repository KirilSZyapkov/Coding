function test(input) {
    let budget = Number(input[0]);
    let priceTowel = Number(input[1]);
    let discount = Number(input[2]) / 100;

    let sumTowel = priceTowel;
    let sumUmbrela = priceTowel * (2 / 3);
    let sumFlipFlops = sumUmbrela * 0.75;
    let sumBag = 1 / 3 * (sumFlipFlops + sumTowel);
    let cost = sumTowel + sumUmbrela + sumFlipFlops + sumBag;
    let needetMoney = cost - cost * discount;
    if (needetMoney <= budget) {
        lefts = Math.abs(needetMoney - budget);
        console.log(`Annie's sum is ${needetMoney.toFixed(2)} lv. She has ${lefts.toFixed(2)} lv. left.`);
    } else {
        lefts = Math.abs(needetMoney - budget);
        console.log(`Annie's sum is ${needetMoney.toFixed(2)} lv. She needs ${lefts.toFixed(2)} lv. more.`);
    }
}
test([`50`, `6`, `5`]);