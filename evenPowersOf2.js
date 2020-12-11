function evenPowersOf2(arg) {
    let n = Number(arg);
    for (let i = 0; i <= n; i++) {
        if (i % 2 === 0) {
            console.log(Math.pow(2, i));
        }
    }
}
evenPowersOf2("7") 