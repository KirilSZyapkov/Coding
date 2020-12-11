function lettersCombinations(input) {
    let letterBegin = input.shift();
    let letterFinish = input.shift();
    let dropLetter = input.shift();
    let startLetter = letterBegin.charCodeAt();
    let endLetter = letterFinish.charCodeAt();
    let missLetter = dropLetter.charCodeAt();
    let counter = 0;
    let text = "";

    for (let i = startLetter; i <= endLetter; i++) {
        for (let n = startLetter; n <= endLetter; n++) {
            for (let p = startLetter; p <= endLetter; p++) {
                if (i !== missLetter && n !== missLetter && p !== missLetter){
                    counter++;
                    text += ""+String.fromCharCode(i) + String.fromCharCode(n)+String.fromCharCode(p)+ " ";
                }
            }
        }

    }
    text =text + counter;
    console.log(text);

}
lettersCombinations(["f", "k", "h"])