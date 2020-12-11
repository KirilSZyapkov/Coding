function celsiusToFahrenheit(arg){
    let C = Number(arg);
    let F = C*1.8 +32;
    console.log(F.toFixed(2));
}
celsiusToFahrenheit("25")