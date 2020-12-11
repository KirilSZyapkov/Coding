function graduation(input) {
    let studentName = input.shift();
    let grade = 0;
    let finalGrade = 0;
    let count = 1
    while (count <= 12) {
        grade = Number(input.shift());
       
        if (grade < 4.00) {
            continue;
        }
        count++;
            finalGrade += grade;
        
    }
    let score = finalGrade / 12;
    console.log(`${studentName} graduated. Average grade: ${score.toFixed(2)}`);

}
graduation([
    'Ani', "5",
    "3.32",
    "6",
    "5.43",
    "5",
    "6",
    "5.5",
    "4.55",
    "5",
    "6",
    "5.56",
    "6"
    
  ])