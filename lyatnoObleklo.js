function lyatnoObleklo(arg, arg1) {
    let t = Number(arg);
    let time = arg1;

    if (t >= 10 && t <= 18) {
        switch (time) {
            case "Morning": console.log(`It's ${t} degrees, get your Sweatshirt and Sneakers.`); break;
            case "Afternoon": console.log(`It's ${t} degrees, get your Shirt and Moccasins.`); break;
            case "Evening": console.log(`It's ${t} degrees, get your Shirt and Moccasins.`); break;
            default: break;
        }

    } else if (t > 18 && t <= 24) {
        switch (time) {
            case "Morning": console.log(`It's ${t} degrees, get your Shirt and Moccasins.`); break;
            case "Afternoon": console.log(`It's ${t} degrees, get your T-Shirt and Sandals.`); break;
            case "Evening": console.log(`It's ${t} degrees, get your Shirt and Moccasins.`); break;
            default: break;
        }
    } else if (t >= 25) {
        switch (time) {
            case "Morning": console.log(`It's ${t} degrees, get your T-Shirt and Sandals.`); break;
            case "Afternoon": console.log(`It's ${t} degrees, get your Swim Suit and Barefoot.`); break;
            case "Evening": console.log(`It's ${t} degrees, get your Shirt and Moccasins.`); break;
            default: break;
        }
    }
}
lyatnoObleklo("20", "Afternoon")