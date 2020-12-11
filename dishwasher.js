function dishwasher(input) {
    let index = 0;
    let numBottelDetergent = Number(input[index]);
    index++;
    let mlSoap = numBottelDetergent * 750;
    let dishes = input[index];
    index++;
    let i = 0;
    let mlSoapLeft = 0;
    let quantityDishes = 0;
    let quantityPots = 0;
    let mlSoapUsed = 0;
    let soapZero = false;

    while (dishes !== "End") {
        dishes = Number(dishes);
        i++;
        if (i >= 3) {
            quantityPots += dishes;
            mlSoapUsed = dishes * 15;
            i = 0;
        } else {
            quantityDishes += dishes;
            mlSoapUsed = dishes * 5;
        }
        mlSoapLeft += mlSoapUsed;
        if (mlSoapLeft > mlSoap) {
            soapZero = true;
            break;
        }
        dishes = input[index];
        index++;
    }
    let dif = Math.abs(mlSoap - mlSoapLeft);
    if (soapZero) {
        console.log(`Not enough detergent, ${dif} ml. more necessary!`);
    } else {
        console.log("Detergent was enough!");
        console.log(`${quantityDishes} dishes and ${quantityPots} pots were washed.`);
        console.log(`Leftover detergent ${dif} ml.`);
    }
}
dishwasher([
    '1', '10', '15',
    '10', '12', '13',
    '30'
])