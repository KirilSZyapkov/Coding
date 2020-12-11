function carRace(arg, arg1, arg2) {
    let litterFuel = Number(arg);
    let fuelConsumption = Number(arg1);
    let numberOfRounds = Number(arg2);
    let n = 0;
    let fuelDecrease = 0.1;
    let litters = 0;
    let totalLittersLeft = 0;
    litters = litterFuel;


  //  for (let i = litterFuel; i >= 1; i -= fuelConsumption) {
    //    totalLittersLeft = litters - (fuelConsumption - (n * fuelDecrease));

    //    litters = totalLittersLeft;
     //   n++;




    //}
    n = Math.floor(litterFuel/fuelConsumption);
    if (n >= numberOfRounds) {
        console.log("Congrats! You won the race!");
    } else {
        console.log(`You are out of fuel in round ${n}!`);
    }
}
carRace("50", "4.3", "30")