function minNumber(input) {
    let num = Number(input.shift());
    let n = 0;
    let minNumber = 99999999990;
    let maxNumber = 0;

    while (n < num) {
        maxNumber = Number(input.shift());
        n++;
        if (maxNumber < minNumber) {
            minNumber = maxNumber;
        }
        
    }
    console.log(minNumber);
}
minNumber([
 "2",
"99",
"100"
])