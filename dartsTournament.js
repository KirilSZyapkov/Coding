function dartsTournament(input) {
    let index = 0;
    let startigPoints = Number(input[index]);
    index++;
    let section = input[index];
    index++;
    let points = Number(input[index]);
    index++;
    let endGame = false;
    let n = 0;

    while (section !== "bullseye") {
        if (endGame) {
            break;
        }

        switch (section) {
            case "number section":
                startigPoints -= points;
                section = input[index];
                index++;
                points = Number(input[index]);
                index++;
                n++;
                if (startigPoints === 0) {
                    endGame = true;
                    break;
                } else if (startigPoints < 0) {
                    endGame = true;
                    break;
                }
                break;
            case "double ring":
                startigPoints -= points * 2;
                section = input[index];
                index++;
                points = Number(input[index]);
                index++;
                n++;
                if (startigPoints === 0) {
                    endGame = true;
                    break;
                } else if (startigPoints < 0) {
                    endGame = true;
                    break;
                }
                break;
            case "triple ring":
                startigPoints -= points * 3;
                section = input[index];
                index++;
                points = Number(input[index]);
                index++;
                n++;
                if (startigPoints === 0) {
                    endGame = true;
                    break;
                } else if (startigPoints < 0) {
                    endGame = true;
                    break;
                }
                break;
            default: break;
        }

    }
    if (startigPoints === 0) {
        console.log(`Congratulations! You won the game in ${n} moves!`);
    } else if (section === "bullseye") {
        n += 1;
        console.log(`Congratulations! You won the game with a bullseye in ${n} moves!`)
    } else if (startigPoints < 0) {
        startigPoints = Math.abs(startigPoints);
        console.log(`Sorry, you lost. Score difference: ${startigPoints}.`)
    }
}
dartsTournament([
    '75',
    'triple ring',
    '17',
    'number section',
    '16',
    'triple ring',
    '13',
    'double ring',
    '10'
])