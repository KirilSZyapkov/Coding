function challengeTheWedding(input) {
    let numMan = Number(input.shift());
    let numWoman = Number(input.shift());
    let numFreeTables = Number(input.shift());
    let dates = "";

    for (let a = 1; a <= numMan; a++) {
        for (let b = 1; b <= numWoman; b++) {
            dates += (`(${a} <-> ${b}) `);
            numFreeTables--;
            if (numFreeTables <= 0){
                break;
            }
        }
        if (numFreeTables <= 0){
            break;
        }
    }
    
    console.log(dates);
}
challengeTheWedding(["5", "8", "40"])