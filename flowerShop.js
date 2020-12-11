function flowerShop(arg1, arg2, arg3, arg4, arg5) {
    let numMagnoli = Number(arg1);
    let numZiubiuli = Number(arg2);
    let numRozi = Number(arg3);
    let numKaktusi = Number(arg4);
    let priceForTheGift = Number(arg5);

    let incomes = (numMagnoli*3.25) + (numZiubiuli*4)+(numRozi*3.5)+(numKaktusi*8);
    let leftMoney = incomes*0.95;

    let dif = Math.abs(leftMoney - priceForTheGift);

    if(leftMoney>= priceForTheGift){
        console.log(`She is left with ${Math.floor(dif)} leva.`);
    } else {
        console.log(`She will have to borrow ${Math.ceil(dif)} leva.`);
    }
}
flowerShop("15", "7", "5", "10", "100")