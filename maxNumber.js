function maxNumber(input) {
    let index = 0;
    let num = Number(input[index]);
    index++;
    let n = 0;
    //let len = input.length;
    // let k = -999990;
    let minNum=0;
    let maxNum = -99999999990;
    while (n < num) {
        n++;
        minNum = Number(input[index]);
        if (minNum > maxNum) {
            maxNum = minNum;
        }

        index++;


    }
    console.log(maxNum);
}
maxNumber([
    "4",
    "45",
    "-20",
    "7",
    "99"
    
    ]
)