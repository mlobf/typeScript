const carMakers = ['ford', 'toyota', 'chevy', 'lada', 'vw', 'honda']
const dates = [new Date(), new Date()]
const carsByMakers: string[][] = []

const car = carsByMakers[0]
const myCar = carMakers.pop()

//carMakers.push(100)

carMakers.map((car: string): string => {
    let result: string = car.toUpperCase()
    console.log(result)

    return result
})

