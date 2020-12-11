function flowers(arg1, arg2, arg3, arg4, arg5) {
    let numChrysanthemums = Number(arg1);
    let numRoses = Number(arg2);
    let numTulips = Number(arg3);
    let season = arg4;
    let ifHolyday = arg5;
    let numBoughtFlowers = 0;

    let priceForFlowers = 0;
    let priceChrysanthemums = 0;
    let priceRoses = 0;
    let priceTulips = 0;
    let totalPrice = 0;

    if (season === "Spring" || season === "Summer") {
        if (ifHolyday === "Y") {
            numBoughtFlowers = numChrysanthemums + numRoses + numTulips;
            priceChrysanthemums = numChrysanthemums * (2 * 1.15);
            priceRoses = numRoses * (4.1 * 1.15);
            priceTulips = numTulips * (2.5 * 1.15);
            priceForFlowers = priceChrysanthemums + priceRoses + priceTulips;
            totalPrice = priceForFlowers;
            if (season === "Spring" && numTulips > 7) {
                totalPrice = priceForFlowers * 0.95;
            }
            if (numBoughtFlowers > 20) {
                totalPrice = totalPrice * 0.8;
            }
        } else if (ifHolyday === "N") {
            numBoughtFlowers = numChrysanthemums + numRoses + numTulips;
            priceChrysanthemums = numChrysanthemums * 2;
            priceRoses = numRoses * 4.1;
            priceTulips = numTulips * 2.5;
            priceForFlowers = priceChrysanthemums + priceRoses + priceTulips;
            totalPrice = priceForFlowers;
            if (season === "Spring" && numTulips > 7) {
                totalPrice = priceForFlowers * 0.95;
            }
            if (numBoughtFlowers > 20) {
                totalPrice = totalPrice * 0.8;
            }
        }
    } else if (season === "Autumn" || season === "Winter") {
        if (ifHolyday === "Y") {
            numBoughtFlowers = numChrysanthemums + numRoses + numTulips;
            priceChrysanthemums = numChrysanthemums * (3.75 * 1.15);
            priceRoses = numRoses * (4.5 * 1.15);
            priceTulips = numTulips * (4.15 * 1.15);
            priceForFlowers = priceChrysanthemums + priceRoses + priceTulips;
            totalPrice = priceForFlowers;
            if (season === "Winter" && numRoses >= 10) {
                totalPrice = priceForFlowers * 0.9;
            }
            if (numBoughtFlowers > 20) {
                totalPrice = totalPrice * 0.8;
            }
        } else if (ifHolyday === "N") {
            numBoughtFlowers = numChrysanthemums + numRoses + numTulips;
            priceChrysanthemums = numChrysanthemums * 3.75;
            priceRoses = numRoses * 4.5;
            priceTulips = numTulips * 4.15;
            priceForFlowers = priceChrysanthemums + priceRoses + priceTulips;
            totalPrice = priceForFlowers;
            if (season === "Winter" && numRoses >= 10) {
                totalPrice = priceForFlowers * 0.9;
            }
            if (numBoughtFlowers > 20) {
                totalPrice = totalPrice * 0.8;
            }
        }
    }
    totalPrice = totalPrice + 2;
    console.log(totalPrice.toFixed(2));
}
flowers("10",
    "10",
    "10",
    "Autumn",
    "N")