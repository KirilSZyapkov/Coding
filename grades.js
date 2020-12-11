function grades(input) {
    let index = 0;
    let numOfStudents = Number(input[index]);
    index++;
    let curentGrade = 0;
    let sumGrades = 0;
    let avarageGrade = 0;
    let percentageTopStdents = 0;
    let percentageGoodStudents = 0;
    let percentageAvarageStudents = 0;
    let percentageFailedStudents = 0;

    let topStdents = 0;
    let goodStudents = 0;
    let avarageStudents = 0;
    let failedStudents = 0;

    for (let i = 0; i < numOfStudents; i++) {
        curentGrade = Number(input[index]);
        index++;
        sumGrades += curentGrade;
        if (curentGrade >= 2.00 && curentGrade <= 2.99) {
            failedStudents++;
        } else if (curentGrade >= 3.00 && curentGrade <= 3.99) {
            avarageStudents++;
        } else if (curentGrade >= 4.00 && curentGrade <= 4.99) {
            goodStudents++;
        } else if (curentGrade >= 5.00) {
            topStdents++;
        }
    }
    avarageGrade = sumGrades / numOfStudents;
    percentageTopStdents = topStdents / numOfStudents * 100;
    percentageGoodStudents = goodStudents / numOfStudents * 100;
    percentageAvarageStudents = avarageStudents / numOfStudents * 100;
    percentageFailedStudents = failedStudents / numOfStudents * 100;

    console.log(`Top students: ${percentageTopStdents.toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${percentageGoodStudents.toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${percentageAvarageStudents.toFixed(2)}%`);
    console.log(`Fail: ${percentageFailedStudents.toFixed(2)}%`);
    console.log(`Average: ${avarageGrade.toFixed(2)}`);
}
grades([
    '6',   '2', '3',
    '4',   '5', '6',
    '2.2', ''
  ])