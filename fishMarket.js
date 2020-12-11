function fishMarket(priceSkumriaKilogram, priceCacaKilogram, kilogramPalamud, kilogramSafrid, kilogramMidi){
    // palamud, safrit, midi
    let priceSkumriq = Number(priceSkumriaKilogram);
    let priceCaca= Number(priceCacaKilogram);
    let pricePalamud = priceSkumriq * 1.6;
    let priceSafrid = priceCaca * 1.8;
    let priceMidi = 7.5;
    let palamud = Number(kilogramPalamud);
    let safrid = Number(kilogramSafrid);
    let midi = Number(kilogramMidi);

    let purchis = palamud * pricePalamud + safrid*priceSafrid+midi*priceMidi;
    console.log(purchis.toFixed(2))
}
fishMarket("5.55", "3.57", "4.3", "3.6", "7")