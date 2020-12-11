function cinemaTickets(input) {
    let nameOfTheMovie = input.shift();
    let freeSpace = Number(input.shift());
    let kid = 0;
    let student = 0;
    let standard = 0;
    let ticketType = input.shift();
    let n = 0;
    let tikets = 0;

    let kidTickets = 0;
    let studentTickets = 0;
    let standardTickets = 0;

    while (nameOfTheMovie !== "Finish") {
        while (ticketType !== "End") {
            switch (ticketType) {
                case "kid": kid++; break;
                case "student": student++; break;
                case "standard": standard++; break;
                default: break;
            }
            tikets++;
            n++;
            if (n >= freeSpace) {
                break;
            }
            ticketType = input.shift();
        }
        let capacity = n / freeSpace * 100;
        console.log(`${nameOfTheMovie} - ${capacity.toFixed(2)}% full.`);
       
        nameOfTheMovie = input.shift();
        freeSpace = Number(input.shift());
        ticketType = input.shift();
        n = 0;

    }
    kidTickets = kid / tikets * 100;
    studentTickets = student / tikets * 100;
    standardTickets = standard / tikets * 100;

    console.log(`Total tickets: ${tikets}`);
    console.log(`${studentTickets.toFixed(2)}% student tickets.`);
    console.log(`${standardTickets.toFixed(2)}% standard tickets.`);
    console.log(`${kidTickets.toFixed(2)}% kids tickets.`);
}
cinemaTickets([
    'Taxi', '10',
    'standard', 'kid',
    'student', 'student',
    'standard', 'standard',
    'End', 'Scary Movie',
    '6', 'student',
    'student', 'student',
    'student', 'student',
    'student', 'Finish'
])