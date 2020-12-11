function carToGo(arg1, arg2) {
    let budget = Number(arg1);
    let season = arg2;
    let typeCar = "";
    let priceForTheCar = 0;

    if (budget <= 100) {
        console.log("Economy class");
        switch (season) {
            case "Summer":
                typeCar = "Cabrio";
                priceForTheCar = budget * 0.35;
                break;
            case "Winter":
                typeCar = "Jeep";
                priceForTheCar = budget * 0.65;
                break;
            default: break;
        }
    } else if(budget >100 && budget <=500){
        console.log("Compact class");
        switch (season) {
            case "Summer":
                typeCar = "Cabrio";
                priceForTheCar = budget * 0.45;
                break;
            case "Winter":
                typeCar = "Jeep";
                priceForTheCar = budget * 0.8;
                break;
            default: break;
        }
    }else if (budget >500){
        console.log("Luxury class");
        typeCar = "Jeep"
        priceForTheCar = budget *0.9;
    }
console.log(`${typeCar} - ${priceForTheCar.toFixed(2)}`);
}
carToGo("99.99", "Summer")