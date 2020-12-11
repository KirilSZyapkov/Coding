function luckyNumbers(input) {
    let n = Number(input.shift());
    let luckyNumber = "";
    let x = 0;
    let y = 0;
    let sum1 = 0;
    let sum2 = 0;
    let x1 = 0;
    let y1 = 0;
    let result = 0;

    for (let i = 1; i <= 9; i++) {
        for (let a = 1; a <= 9; a++) {
            for (let b = 1; b <= 9; b++) {
                for (let c = 1; c <= 9; c++) {
                    sum1 = i + a;
                    sum2 = b + c;
                    result = n % sum1;
                    if (sum1 === sum2 && result === 0) {
                        luckyNumber += "" + i + a + b + c+ " ";
                        
                    }
                }
            }
        }

    }
    console.log(luckyNumber);
}

luckyNumbers(["7"])