// Long Interfaces
console.log('Lets apply long Interfaces in TypeScript')

const oldCivic = {
    name: 'civic',
    year: 2001,
    broken: true
}


const printVehicle = (vehicle: { name: string; year: number; broken: boolean }): void => {
    console.log(`Name:${vehicle.name}`)
    console.log(`Year:${vehicle.year}`)
    console.log(`Broken:${vehicle.broken}`)
}
