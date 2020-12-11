function equalPairs(input) {
    let index = 0;
    let num = Number(input[index]);
    index++;
    let a = 0;
    let b = 0;
    let c = 0;
    let d = 0;
    let counter = 0;
    let sum = 0;
    let sum1 =0;
    let sum2 = 0;
    let numbers = "";
    let p = 0;

    for (let i = 0; i < num; i++) {
        a = Number(input[index]);
        index++;
        b = Number(input[index]);
        index++;
        sum = a + b;
        sum1 = Math.abs(a + b);
        numbers += ""+sum1;
        
    }
        for (let m = 0; m <= num - 2; m++) {
        c = Number(numbers[counter]);
        counter++;
        d = Number(numbers[counter]);
        counter++
        sum2 = Math.max(sum2, Math.abs(c - d));
        counter--;
        
    }
    if(sum2 ===0){
        console.log(`Yes, value=${sum}`);
    } else {
        console.log(`No, maxdiff=${sum}`);
    }

}
equalPairs(["3",
"1",
"2",
"0",
"3",
"4",
"-1" ])
