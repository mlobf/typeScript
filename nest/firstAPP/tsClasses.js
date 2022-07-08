// Classes in TS
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Vehicle = /** @class */ (function () {
    function Vehicle() {
    }
    Vehicle.prototype.drive = function () {
        console.log('we are driving');
    };
    Vehicle.prototype.calling = function () {
        this.jump();
    };
    // protected
    // apenas esta classe ou filhos 
    //  desta classe podem usar este metodo
    Vehicle.prototype.shoot = function () {
        console.log('we are shooting');
    };
    // Only Vehicle are allowed to  use drive method
    Vehicle.prototype.jump = function () {
        console.log('We are jumping');
    };
    return Vehicle;
}());
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // modificadores
    //  public private protected
    // overwrite method
    Car.prototype.driv = function () {
        console.log('skjsfajfl');
        this.shoot();
    };
    Car.prototype.pupu = function () {
        console.log('skjsfajfl');
    };
    return Car;
}(Vehicle));
var veiculo = new Vehicle();
var carro = new Car();
carro.driv();
