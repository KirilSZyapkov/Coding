function accountBalance(input) {
    let index = 0;
    let broiVnoski = Number(input[index]);
    index++;
    let total = 0;
    let vnoska = 0;
    let increase = 0;
    let balance = 0;

    while (vnoska < broiVnoski) {
        vnoska++;
        increase = Number(input[index]);
        if (increase <= 0) {
            console.log("Invalid operation!");
            
            break;
        }
        console.log(`Increase: ${increase.toFixed(2)}`);
        total += increase;
        index++;
    }
    console.log(`Total: ${total.toFixed(2)}`);
}
accountBalance([
    "5",
    "120",
    "45.55",
    "-150"

])