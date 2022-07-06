var carMakers = ['ford', 'toyota', 'chevy', 'lada', 'vw', 'honda'];
var dates = [new Date(), new Date()];
var carsByMakers = [];
var car = carsByMakers[0];
var myCar = carMakers.pop();
//carMakers.push(100)
carMakers.map(function (car) {
    var result = car.toUpperCase();
    console.log(result);
    return result;
});
