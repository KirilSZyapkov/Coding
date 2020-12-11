function kino(arg1, arg2, arg3) {
    let rows = Number(arg2);
    let columns = Number(arg3);
    let movie = arg1;
    let hall = rows * columns;
    let profit;

    switch (movie) {
        case "Premiere": profit = hall * 12; console.log(`${profit.toFixed(2)}`); break;
        case "Normal": profit = hall * 7.5; console.log(`${profit.toFixed(2)}`); break;
        case "Discount": profit = hall * 5; console.log(`${profit.toFixed(2)}`); break;
        default: break;
    }
}
kino("Normal", "20", "13");