// Classes in TS
var Vehicle = /** @class */ (function () {
    function Vehicle() {
    }
    Vehicle.prototype.drive = function () {
        console.log('skjsfajfl');
    };
    return Vehicle;
}());
var car = new Vehicle();
car.drive();
