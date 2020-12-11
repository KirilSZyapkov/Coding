function equalSumsEvenOddPosition(input) {

    let start = Number(input[0]);
    let end = Number(input[1]);
    let num = 0;
    let evenNumbers = 0;
    let oddNumbers = 0;
    let numbers = "";

    for (let i = start; i <= end; i++) {
        num = i + "";
        for (let j = 0; j < num.length; j++) {
            if (j % 2 === 0) {
                oddNumbers += Number(num[j]);
            } else {
                evenNumbers += Number(num[j]);
            }

        }
        if (evenNumbers == oddNumbers) {
            numbers += num + " ";

            oddNumbers = 0;
            evenNumbers = 0;
        } else {
            oddNumbers = 0;
            evenNumbers = 0;
        }
    }
    console.log(numbers);

}
equalSumsEvenOddPosition(["100000", "100001"])