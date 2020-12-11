function multiplyByTwo(arg) {
    let a = Number(arg);
    let result=0;

    if (a>0){
        result = a * 2;
        console.log(`Result: ${result.toFixed(2)}`);
    } else {
        console.log("Negative number!" );
    }
    
}
multiplyByTwo("-12")