function hospital(input) {
    let index = 0;
    let period = Number(input[index]);
    index++;
    let numDoctors = 7;
    let numTreatedPatients = 0;
    let numUnTrearedPatients = 0;
    let numPatientForTheDay = 0;
    let curentDay = 0;

    for (let i = 0; i < period; i++) {
        numPatientForTheDay = Number(input[index]);
        index++;
        curentDay++;
        if (curentDay >= 3) {
            if (numUnTrearedPatients > numTreatedPatients) {
                numDoctors += 1;
            }
            curentDay = 0;
        }
        if (numDoctors > numPatientForTheDay) {
            numTreatedPatients += numPatientForTheDay;
        } else {
            numTreatedPatients += numDoctors;
        }
        numUnTrearedPatients += Math.max(0, numPatientForTheDay - numDoctors);
    }
    console.log(`Treated patients: ${numTreatedPatients}.`);
    console.log(`Untreated patients: ${numUnTrearedPatients}.`);
}
hospital(["3",
"7",
"7",
"7"
])