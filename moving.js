function moving(input){
let widthOfTheRoom = Number(input.shift());
let lengthOfTheRoom = Number(input.shift());
let hightOfTheRoom = Number(input.shift());
let VofTheApartment = widthOfTheRoom * lengthOfTheRoom * hightOfTheRoom;
let index = 0;
let quantityBox = input[index];
let occupiedSpace = 0;

while (quantityBox !== "Done"){
    occupiedSpace += Number(quantityBox);
        
    if(occupiedSpace > VofTheApartment){
        break;
    }
    index++;
    quantityBox = input[index];
}
if(occupiedSpace > VofTheApartment){
    let dif = Math.abs(occupiedSpace - VofTheApartment);
    console.log(`No more free space! You need ${dif} Cubic meters more.`);
}else{
    let dif = Math.abs(occupiedSpace - VofTheApartment);
    console.log(`${dif} Cubic meters left.`);
}

}
moving([ '10', '1', '2', '4', '6', 'Done' ])