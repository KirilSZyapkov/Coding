function housePainting(arg, arg2, arg3) {
    let highOfTheHouse = Number(arg);
    let lengthOfTheHouse = Number(arg2);
    let highOfTheRoof = Number(arg3);

    let frontAndBackSideOfTheHouse = (Math.pow(highOfTheHouse, 2)) + (Math.pow(highOfTheHouse, 2) - (1.2 * 2));
    let bothSidesOfTheHouse = ((highOfTheHouse * lengthOfTheHouse) - (1.5 * 1.5)) * 2;

    let frontAndBackSidesOfTheRoof = ((highOfTheHouse * highOfTheRoof) / 2) * 2;
    let bothSidesOfTheRoof = (highOfTheHouse * lengthOfTheHouse) * 2;

    let areaHouse = frontAndBackSideOfTheHouse + bothSidesOfTheHouse;
    let areaRoof = frontAndBackSidesOfTheRoof+bothSidesOfTheRoof;

    let needeGreenPaint = areaHouse/3.4;
    let needeRedPaint = areaRoof / 4.3;

    console.log(needeGreenPaint.toFixed(2));
    console.log(needeRedPaint.toFixed(2));

}
housePainting ("6",
    "10",
    "5.2")