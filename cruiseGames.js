function cruiseGames(input) {
    let index = 0;
    let playerName = input[index];
    index++;
    let playedGames = Number(input[index]);
    index++;
    let nameOfTheGame = input[index];
    index++;
    let pointForTheGame = Number(input[index]);
    index++;

    let points = 0;
    let avaragePoints = 0;
    let totalPoints = 0;

    let v = 0;
    let t = 0;
    let b = 0;
    let volleyballPoints = 0;
    let tennisPoints = 0;
    let badmintonPoints = 0;

    for (let i = 0; i <= playedGames; i++) {

        switch (nameOfTheGame) {
            case "volleyball":
                v++;
                pointForTheGame = pointForTheGame * 1.07;
                points += pointForTheGame;
                volleyballPoints += pointForTheGame;
                nameOfTheGame = input[index];
                index++;
                pointForTheGame = Number(input[index]);
                index++
                break;
            case "tennis":
                t++;
                pointForTheGame = pointForTheGame * 1.05;
                points += pointForTheGame;
                tennisPoints += pointForTheGame;
                nameOfTheGame = input[index];
                index++;
                pointForTheGame = Number(input[index]);
                index++
                break;
            case "badminton":
                b++;
                pointForTheGame = pointForTheGame * 1.02;
                points += pointForTheGame;
                badmintonPoints += pointForTheGame;
                nameOfTheGame = input[index];
                index++;
                pointForTheGame = Number(input[index]);
                index++
                break;
            default: break;
        }
    }
    totalPoints = Math.floor(points);
    avaragePoints = points / playedGames;

    if ((volleyballPoints / v) < 75 || (badmintonPoints / b) < 75 || (tennisPoints / t) < 75) {
        console.log(`Sorry, ${playerName}, you lost. Your points are only ${totalPoints}.`);
    } else if (avaragePoints >= 75) {
        console.log(`Congratulations, ${playerName}! You won the cruise games with ${totalPoints} points.`);
    } else {
        console.log(`Sorry, ${playerName}, you lost. Your points are only ${totalPoints}.`);
    }
}
cruiseGames([
    'Annie',      '5',
    'badminton',  '34',
    'tennis',     '76',
    'badminton',  '10',
    'volleyball', '62',
    'badminton',  '56'
  ])