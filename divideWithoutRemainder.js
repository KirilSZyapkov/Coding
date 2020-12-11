function divideWithoutRemainder(input) {
    let len = Number(input[0])
    let index = 0;

    let n1 = 0;
    let n2 = 0;
    let n3 = 0;

    for (let i = 1; i <= len; i++) {
        index = Number(input[i]);
        if (index%2 ===0){
            n1++;
        } 
         if (index %3 ===0){
            n2++;
        } 
         if (index%4 ===0){
            n3++;
        }
}
let p1 = (n1/len)*100;
console.log(`${p1.toFixed(2)}%`);
let p2 = (n2/len)*100;
console.log(`${p2.toFixed(2)}%`);
let p3 = (n3/len)*100;
console.log(`${p3.toFixed(2)}%`);
}
divideWithoutRemainder 
(["10",
"680",
"2",
"600",
"200",
"800",
"799",
"199",
"46",
"128",
"65"])
