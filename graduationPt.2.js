function graduationPtTwo(input) {
    let studentName = input.shift();
    let grade = 0;
    let finalGrade = 0;
    let timeDidNotPass = 0;
    let count = 1;
    let index = 0;

    while (count <= 12) {
        grade = Number(input[index]);
        if (grade < 4) {
            timeDidNotPass++;
            if (timeDidNotPass >= 2) {
                break;
            }
            continue
        }
        finalGrade += grade;
        count++;
        index++;

    }

    if (timeDidNotPass >= 2) {
        console.log(`${studentName} has been excluded at ${count} grade`);
    } else {
        console.log(`${studentName} graduated. Average grade: ${(finalGrade / 12).toFixed(2)}`);
    }
}
graduationPtTwo([
    'Mimi', '5', '6',
    '5', '6', '5',
    '6', '6', '2',
    '3'
])