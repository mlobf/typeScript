var carMakers = ['ford', 'toyota', 'chevy', 'lada', 'vw', 'honda'];
var dates = [new Date(), new Date()];
var carsByMakers = [];
var car = carsByMakers[0];
var myCar = carMakers.pop();
//carMakers.push(100) // vai dar error 
carMakers.map(function (car) {
    var result = car.toUpperCase();
    console.log(result);
    return result;
});
// This arr can receive a Date or string as value, either
var importantDates = [new Date(), '2022-10-10'];
importantDates.push('2021-01-01');
importantDates.push(new Date());
console.log(importantDates);
