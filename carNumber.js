function carNumber(input) {
    let start = Number(input.shift());
    let end = Number(input.shift());
    let sum = 0;
    let carNum = "";

    for (let a = start; a <= end; a++) {
        for (let b = start; b <= end; b++) {
            for (let c = start; c <= end; c++) {
                for (let d = start; d <= end; d++) {
                    sum = b + c;
                    if (a % 2 === 0 && d % 2 !== 0 && a > d && sum % 2 == 0) {
                        carNum += "" + a + b + c + d + " ";
                    } else if (a % 2 !== 0 && d % 2 === 0 && a > d && sum % 2 == 0) {
                        carNum += "" + a + b + c + d + " ";
                    }
                }
            }
        }
    }
    console.log(carNum);
}
carNumber(["5", "8"])