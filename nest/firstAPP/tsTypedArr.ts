const carMakers = ['ford', 'toyota', 'chevy', 'lada', 'vw', 'honda']
const dates = [new Date(), new Date()]
const carsByMakers: string[][] = []

const car = carsByMakers[0]
const myCar = carMakers.pop()

//carMakers.push(100) // vai dar error 

carMakers.map((car: string): string => {
    let result: string = car.toUpperCase()
    console.log(result)

    return result
})

// This arr can receive a Date or string as value, either
const importantDates: (Date | string)[] = [new Date(), '2022-10-10']
importantDates.push('2021-01-01')
importantDates.push(new Date())

console.log(importantDates)
