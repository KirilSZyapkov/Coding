function numberOnThirdPower(arg) {
    let num = Number(arg);
    let result = 1;
    if (num % 2 === 0) {
        result += 1;
    }
    for (let i = result; i <= num; i += 2) {
        console.log(`Current number: ${i}. Cube: ${Math.pow(i, 3)}`)
    }
}
numberOnThirdPower(4)