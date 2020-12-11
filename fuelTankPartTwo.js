function fuelTankPartTwo(arg1, arg2, arg3) {
    let tipeOfFuel = arg1;
    let litersFuel = Number(arg2);
    let clubCart = arg3;
    let refueled = 0;

    switch (tipeOfFuel) {
        case "Gas":
            refueled = litersFuel * 0.93;
            if (clubCart === "Yes") {
                refueled = refueled - (litersFuel * 0.08);
            }
            break;
        case "Gasoline":
            refueled = litersFuel * 2.22;
            if (clubCart === "Yes") {
                refueled = refueled - (litersFuel * 0.18);
            }
            break;
        case "Diesel":
            refueled = litersFuel * 2.33;
            if (clubCart === "Yes") {
                refueled = refueled - (litersFuel * 0.12);
            }
            break;
        default: break;
    }
    if (litersFuel > 20 && litersFuel <= 25) {
        refueled *= 0.92;
    } else if (litersFuel > 25) {
        refueled *= 0.9;
    }
    console.log(`${refueled.toFixed(2)} lv.`);
}
fuelTankPartTwo("Diesel", "19", "No")