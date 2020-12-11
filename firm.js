function firm(arg1, arg2, arg3) {
    let neededHours = Number(arg1);
    let availablelDays = Number(arg2);
    let workersWorkingExtraTime = Number(arg3);

    
    let workingOnProjectDays = availablelDays * 0.9;
    let hoursPerDayForTheProject = 8 * workingOnProjectDays;
    let extraHours = (workersWorkingExtraTime * 2) * availablelDays;

    let needTime = Math.floor(hoursPerDayForTheProject + extraHours);
    let dif = Math.abs(needTime - neededHours);

    if (needTime >= neededHours) {
        console.log(`Yes!${dif} hours left.`);
    } else {
        console.log(`Not enough time!${dif} hours needed.`);
    }
}
firm("99", "3", "1")