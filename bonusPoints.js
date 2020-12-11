function bonusPoints(arg) {
    
    let point;
    let num = Number(arg);
    if (num > 1000) {
       point = num * 0.1;
    } else if (num > 100) {
        point = num * 0.2;
    } else if (num <= 100) {
        point = 5;
    }
if (num % 2 === 0) {
    point += 1;
} else if (num % 5 === 0) {
    point += 2;
}
let finalNumber = num + point;

console.log(point);
console.log(finalNumber);
}
bonusPoints(20)