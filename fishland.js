function fishland(arg, arg1, arg2, arg3, arg4) {
    let priceMackerelPerKg = Number(arg);
    let priceSpratsPerKg = Number(arg1);
    let bonitoKg = Number(arg2);
    let horseMackerelKg = Number(arg3);
    let clamKg = Number(arg4);

    // Паламуд – 60 % по - скъп от скумрията
    // Сафрид – 80 % по - скъп от цацата
    // Миди – 7.50 лв.за килограм

    let priceBonitoPerKg = priceMackerelPerKg * 1.6;
    let priceHorseMackerelPerKg = priceSpratsPerKg * 1.8;
    let priceClamPerKg = clamKg * 7.5;

    let neededMoney = priceClamPerKg + (bonitoKg * priceBonitoPerKg) + (horseMackerelKg * priceHorseMackerelPerKg);

    console.log(neededMoney.toFixed(2));

}
fishland("6.90",
    "4.20",
    "1.5",
    "2.5",
    "1")