function building(input) {
    let floors = Number(input.shift());
    let numberOfRooms = Number(input.shift());

    let floor = 0;

    for (let f = floors; f >= 1; f--) {
        floor = f;
        let roomNumber = " ";
        for (let r = 0; r < numberOfRooms; r++) {
            //if (floors === 1) {
           //     roomNumber += `L0${r} `;
           //     continue;
           // }

            if (floor === floors) {
                roomNumber += `L${floor}${r} `;
            } else if (floor % 2 === 0) {
                roomNumber += `O${floor}${r} `;
            } else if (floor % 2 !== 0) {
                roomNumber += `A${floor}${r} `;
            }

        }
        //  if (floors === 1) {
        //     console.log(roomNumber);
        //} else if (floor === floors){
        //     console.log(roomNumber);
        // } else if (floor % 2 === 0){
        //     console.log(roomNumber);
        // } else if (floor % 2 === 1){
        console.log(roomNumber);
        // }
    }

}
building(['2', '4'])