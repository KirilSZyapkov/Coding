function histogram(input) {

    let len = input[0];
    let index = 0;
    let n1 = 0;
    let n2 = 0;
    let n3 = 0;
    let n4 = 0;
    let n5 = 0;



    for (let i = 1; i <= len; i++) {
        index = Number(input[i]);
        if (index < 200) {
            n1++;
            //console.log(n1);
        } else if (index >= 200 && index <= 399) {
            n2++;
        } else if (index >= 400 && index <= 599) {
            n3++;
        } else if (index >= 600 && index <= 799) {
            n4++;
        } else {
            n5++;

        }

    }

    let p1 = (n1/len) *100;
    console.log(`${p1.toFixed(2)}%`);
    let p2 = (n2/len) *100;
    console.log(`${p2.toFixed(2)}%`);
    let p3 = (n3/len) *100;
    console.log(`${p3.toFixed(2)}%`);
    let p4 = (n4/len) *100;
    console.log(`${p4.toFixed(2)}%`);
    let p5 = (n5/len) *100;
    console.log(`${p5.toFixed(2)}%`);
}
histogram(["7", "800", "801", "250", "199", "399","599", "799"])