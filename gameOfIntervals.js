function gameOfIntervals(input) {
    let index = 0;
    let numOfMoves = Number(input[index]);
    index++;
    let score = 0;

    let totalScore = 0;
    let numBeatweenZeroAndNine = 0;
    let numBeatweenTenAndNineteen = 0;
    let numBeatweenTwentyAndTwentyNine = 0;
    let numBeatweenThirtyAndThirtyNine = 0;
    let numBeatweenFortyAndFifty = 0;
    let numInvalidNumbers = 0;

    let percentageBeatweenZeroAndNine = 0;
    let percentageBeatweenTenAndNineteen = 0;
    let percentageBeatweenTwentyAndTwentyNine = 0;
    let percentageBeatweenThirtyAndThirtyNine = 0;
    let percentageBeatweenFortyAndFifty = 0;
    let percentageInvalidNumbers = 0;

    for (let i = 0; i < numOfMoves; i++) {
        score = Number(input[index]);
        index++;

        if (score < 0 || score > 50) {
            totalScore = totalScore / 2;
            numInvalidNumbers++;
        } else if (score >= 0 && score <= 9) {
            totalScore += score * 0.2;
            numBeatweenZeroAndNine++;
        } else if (score >= 10 && score <= 19) {
            totalScore += score * 0.3;
            numBeatweenTenAndNineteen++;
        } else if (score >= 20 && score <= 29) {
            totalScore += score * 0.4;
            numBeatweenTwentyAndTwentyNine++;
        } else if (score >= 30 && score <= 39) {
            totalScore += 50;
            numBeatweenThirtyAndThirtyNine++;
        } else if (score >= 40 && score <= 50) {
            totalScore += 100;
            numBeatweenFortyAndFifty++;
        }
    }

    percentageBeatweenZeroAndNine = numBeatweenZeroAndNine / numOfMoves * 100;
    percentageBeatweenTenAndNineteen = numBeatweenTenAndNineteen / numOfMoves * 100;
    percentageBeatweenTwentyAndTwentyNine = numBeatweenTwentyAndTwentyNine / numOfMoves * 100;
    percentageBeatweenThirtyAndThirtyNine = numBeatweenThirtyAndThirtyNine / numOfMoves * 100;
    percentageBeatweenFortyAndFifty = numBeatweenFortyAndFifty / numOfMoves * 100;
    percentageInvalidNumbers = numInvalidNumbers / numOfMoves * 100;

    console.log(totalScore.toFixed(2));
    console.log(`From 0 to 9: ${percentageBeatweenZeroAndNine.toFixed(2)}%`);
    console.log(`From 10 to 19: ${percentageBeatweenTenAndNineteen.toFixed(2)}%`);
    console.log(`From 20 to 29: ${percentageBeatweenTwentyAndTwentyNine.toFixed(2)}%`);
    console.log(`From 30 to 39: ${percentageBeatweenThirtyAndThirtyNine.toFixed(2)}%`);
    console.log(`From 40 to 50: ${percentageBeatweenFortyAndFifty.toFixed(2)}%`);
    console.log(`Invalid numbers: ${percentageInvalidNumbers.toFixed(2)}%`)
}
gameOfIntervals([
    '10',  '43', '57',
    '-12', '23', '12',
    '0',   '50', '40',
    '30',  '20'
  ])