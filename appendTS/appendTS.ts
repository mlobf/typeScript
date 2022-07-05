interface Reportable {
    name: string,
    year: Date,
    broken: boolean,
    summary(): string
}

const oldCivic = {
    name: 'civic',
    year: new Date,
    broken: true,
    summary(): string {
        return `Name: ${this.name}`
    }
}

const printSummary = (item: Reportable): void => {
    console.log(item.summary())
}

printSummary(oldCivic)