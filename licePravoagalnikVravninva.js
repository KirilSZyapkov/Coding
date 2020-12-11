function licePravoagalnik(x1 , y1, x2, y2) {
    //Sp - area
    //Pp - perimeter
let lenght = Math.abs (Number(x1) - Number(x2));
let width = Math.abs (Number(y1) - Number(y2));
let Sp = lenght * width;
let Pp = 2 * (lenght + width);
console.log (`${Sp.toFixed(2)} sm^2)`);
console.log (`${Pp.toFixed(2)} sm`);
}

licePravoagalnik("30", "40", "70", "-10")