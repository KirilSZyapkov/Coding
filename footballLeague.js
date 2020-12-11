function footballLeague(input) {
    let index = 0;
    let capacityOfTheStadium = Number(input[index]);
    index++
    let numFans = Number(input[index]);
    index++;
    let sector = 0;

    let totalFansNum = 0;
    let percentageFansSectorA = 0;
    let percentageFansSectorB = 0;
    let percentageFansSectorV = 0;
    let percentageFansSectorG = 0;
    let percentageTotalFans = 0;

    let numFansSectorA = 0;
    let numFansSectorB = 0;
    let numFansSectorV = 0;
    let numFansSectorG = 0;

    for (let i = 0; i < numFans; i++) {
        sector = input[index];
        index++;
        totalFansNum++;
        if (sector === "A") {
            numFansSectorA++;
        } else if (sector === "B") {
            numFansSectorB++;
        } else if (sector === "V") {
            numFansSectorV++;
        } else if (sector === "G") {
            numFansSectorG++;
        }
    }

    percentageFansSectorA = numFansSectorA / totalFansNum * 100;
    percentageFansSectorB = numFansSectorB / totalFansNum * 100;
    percentageFansSectorV = numFansSectorV / totalFansNum * 100;
    percentageFansSectorG = numFansSectorG / totalFansNum * 100;
    percentageTotalFans = totalFansNum / capacityOfTheStadium * 100;

    console.log(percentageFansSectorA.toFixed(2)+"%");
    console.log(percentageFansSectorB.toFixed(2)+"%");
    console.log(percentageFansSectorV.toFixed(2)+"%");
    console.log(percentageFansSectorG.toFixed(2)+"%");
    console.log(percentageTotalFans.toFixed(2)+"%");
}
footballLeague([
    '76', '10', 'A', 'V',
    'V', 'V', 'G', 'B',
    'A', 'V', 'B', 'B'
])