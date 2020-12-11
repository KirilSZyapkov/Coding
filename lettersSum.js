function lettersSum(arg, arg1, arg2) {
    let text = arg;
    let num = Number(arg1);
    let budget = Number(arg2);
    let result = 0;

    for (let i = 0; i < text.length; i++) {
        if (text[i] === "a" || text[i] === "e" || text[i] === "i" || text[i] === "o" || text[i] === "u" || text[i] === "y") {
            result += 3;
        } else {
            result += 1
        }
    }
    let fResult = result * num;
    let dif = Math.abs(fResult - budget);
    if (fResult > budget) {
        console.log(`Cannot buy ${text}. Product value: ${fResult.toFixed(2)}`)
    } else {
        console.log(`${text} bought. Money left: ${dif.toFixed(2)}`)
    }
}
lettersSum("milk", "1.4", "8")