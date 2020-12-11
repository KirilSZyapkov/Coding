function combinations(arg) {
    let n = 0;
    let a = Number(arg);
    let sum = 0;

    for (let x1 = 0; x1 <= a; x1++) {
        for (let x2 = 0; x2 <= a; x2++) {
            for (let x3 = 0; x3 <= a; x3++) {
                sum = x1+x2+x3;
                if(sum === a){
                    n++;
                }

            }
        }
    }
    console.log(n);
}
combinations("25")