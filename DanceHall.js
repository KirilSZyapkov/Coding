function quantityDancers(lengthHall, widthHall, sideWardrobe) {
    //Sh = areaHall
    //Sw = areaWardrobe
    //Sb = areaBench

    let Sh1 = Number(lengthHall) * Number(widthHall);
    let Sw = Math.pow (Number(sideWardrobe), 2);
    let Sb = Sh1 / 10;
    let Sh = Sh1 - Sw - Sb;

    let numberDancers = Math.floor((Sh / 0.704));

    
    console.log(Sh1);
    console.log(Sw);
    console.log(Sb);
    console.log(Sh);
    console.log(numberDancers);
}
quantityDancers("50", "25", "2")