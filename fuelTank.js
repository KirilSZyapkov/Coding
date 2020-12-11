function fuelTank(arg1, arg2) {
    let fuelTipe = arg1;
    let litersIntoTheTank = Number(arg2);

    switch (fuelTipe) {
        case "Diesel":
            if (litersIntoTheTank < 25) {
                console.log(`Fill your tank with diesel!`);
            } else if (litersIntoTheTank >= 25) {
                console.log(`You have enough diesel.`);
            }
            break;
        case "Gasoline":
            if (litersIntoTheTank < 25) {
                console.log(`Fill your tank with gasoline!`);
            } else if (litersIntoTheTank >= 25) {
                console.log(`You have enough gasoline.`);
            }
            break;
        case "Gas":
            if (litersIntoTheTank < 25) {
                console.log(`Fill your tank with gas!`);
            } else if (litersIntoTheTank >= 25) {
                console.log(`You have enough gas.`);
            }
            break;
            default: console.log("Invalid fuel!"); break;
    }
}
fuelTank("Gas", "25")