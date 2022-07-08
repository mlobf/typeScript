console.log('Lets apply long Interfaces in TypeScript');
var oldCivic = {
    name: 'civic',
    year: new Date(),
    broken: true,
    summary: function () {
        return "Name: ".concat(this.name);
    }
};
var printVehicle = function (vehicle) {
    console.log(vehicle.summary());
};
printVehicle(oldCivic);
