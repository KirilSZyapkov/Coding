function multiplicationTable(arg) {
    let num = Number(arg);
    let sum = 0;
    for (let i = 1; i <= 10; i++) {
        sum = i * num;
        console.log(`${i} * ${num} = ${sum}`);
    }
}
multiplicationTable("5")