function novDom(arg1, arg2, arg3) {

    let flowers = arg1;
    let quantityFlowers = Number(arg2);
    let budget = Number(arg3);
    let costs;

    switch (flowers) {
        case "Roses": if (quantityFlowers > 80) { costs = (quantityFlowers * 5) * 0.9; } else { costs = (quantityFlowers * 5); } break;
        case "Dahlias": if (quantityFlowers > 90) { costs = (quantityFlowers * 3.8) * 0.85; } else { costs = (quantityFlowers * 3.8); } break;
        case "Tulips": if (quantityFlowers > 80) { costs = (quantityFlowers * 2.8) * 0.85; } else { costs = (quantityFlowers * 2.8); } break;
        case "Narcissus": if (quantityFlowers < 120) { costs = (quantityFlowers * 3) + ((quantityFlowers * 3) * 0.15); } else { costs = (quantityFlowers * 3); } break;
        case "Gladiolus": if (quantityFlowers < 80) { costs = (quantityFlowers * 2.5) + ((quantityFlowers * 2.5) * 0.20); } else { costs = (quantityFlowers * 2.5); } break;
        default: break;
    }
    let dif = Math.abs(costs - budget);
    if (costs <= budget) {
        console.log(`Hey, you have a great garden with ${quantityFlowers} ${flowers} and ${dif.toFixed(2)} leva left.`);
    }else {
        console.log(`Not enough money, you need ${dif.toFixed(2)} leva more.`);
    }
}
novDom("Dahlias", "112", "460")