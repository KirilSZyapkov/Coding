function RADtoDEG(radian) {
    let degree = Number(radian) * 180 / Math.PI;
    console.log(` ${degree.toFixed(0)} C`)
}

RADtoDEG("6.2832")