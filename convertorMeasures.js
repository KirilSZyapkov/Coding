function convertorMeasures(numInput, measureOne, measureTwo) {
    let num = numInput;
    
    if (measureOne === "m") {
        num = num * 100;
    } else if (measureOne ==="mm") {
        num = num / 10;
    }
    if (measureTwo === "m") {
        num = num / 100;
    } else if (measureTwo === "mm") {
        num = num * 10;
    }
    console.log(num.toFixed(3));
}
convertorMeasures("200", "m", "mm")