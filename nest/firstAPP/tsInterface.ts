// Long Interfaces
interface Vehicle {
    name: string
    year: number
    broken: boolean
}

console.log('Lets apply long Interfaces in TypeScript')

const oldCivic = {
    name: 'civic',
    year: 2001,
    broken: true
}


const printVehicle = (vehicle: Vehicle): void => {
    console.log(`Name:${vehicle.name}`)
    console.log(`Year:${vehicle.year}`)
    console.log(`Broken:${vehicle.broken}`)
}


printVehicle(oldCivic)