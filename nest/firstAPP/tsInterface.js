console.log('Lets apply long Interfaces in TypeScript');
var oldCivic = {
    name: 'civic',
    year: 2001,
    broken: true
};
var printVehicle = function (vehicle) {
    console.log("Name:".concat(vehicle.name));
    console.log("Year:".concat(vehicle.year));
    console.log("Broken:".concat(vehicle.broken));
};
printVehicle(oldCivic);
