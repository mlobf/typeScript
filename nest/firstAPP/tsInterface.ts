// Long Interfaces
interface Reportable {
    summary(): string
}

console.log('Lets apply long Interfaces in TypeScript')

const oldCivic = {
    name: 'civic',
    year: new Date(),
    broken: true,
    summary(): string {
        return `Name: ${this.name}`
    }
}


const printVehicle = (vehicle: Reportable): void => {
    console.log(vehicle.summary())
}


printVehicle(oldCivic)