function averageNumber(input) {
    let index = 0;
    let p = Number(input[index]);
    index++;
    let num = 0;
    let sum = 0;
    let averageNum = 0;

    for (let i = 1; i <= p; i++) {
        num = Number(input[index]);
        index++;
        sum += num;
    }
    averageNum = sum / p;
    console.log(averageNum.toFixed(2));
}
averageNumber(["2",
    "6",
    "4"])