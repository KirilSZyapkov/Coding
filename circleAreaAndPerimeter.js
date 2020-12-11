function circleAreaAndPerimeter(arg) {
    let r = Number(arg);

    let S = Math.PI * (Math.pow(r, 2));
    let P = 2 * Math.PI * r;


    console.log(S.toFixed(2));
    console.log(P.toFixed(2));
}
circleAreaAndPerimeter(3)