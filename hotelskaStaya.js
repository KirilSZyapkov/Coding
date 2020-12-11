function hotelskaStaya(arg1, arg2) {
    let month = arg1;
    let duration = Number(arg2);
    let priceApartment;
    let priceStudio;

    if (month === "May" || month === "October") {
        if (duration <= 7) {
            priceApartment = 65 * duration;
            priceStudio = 50 * duration;
        } else if (duration <= 14) {
            priceApartment = 65 * duration;
            priceStudio = (50 * duration) * 0.95;
        } else {
            priceApartment = (65 * duration) * 0.9;
            priceStudio = (50 * duration) * 0.7;
        }
    } else if (month === "June" || month === "September") {
        if (duration <= 14) {
            priceApartment = 68.70 * duration;
            priceStudio = 75.20 * duration;
        } else {
            priceApartment = (68.70 * duration) * 0.9;
            priceStudio = (75.20 * duration) * 0.8;
        }
    } else if (month === "July" || month === "August") {
        if (duration <= 14) {
            priceApartment = 77 * duration;
            priceStudio = 76 * duration;
        } else {
            priceApartment = (77 * duration) * 0.9;
            priceStudio = 76 * duration;
        }
    }
    console.log(`Apartment: ${priceApartment.toFixed(2)} lv.`);
    console.log(`Studio: ${priceStudio.toFixed(2)} lv.`);

}
hotelskaStaya("September","12")