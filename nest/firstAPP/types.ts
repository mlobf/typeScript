

// Object Literals
let point: { x: number; y: number } = {
    x: 20,
    y: 10
}
// function
const logNumber: (i: number) => void = (i: number) => {
    console.log(i)
}

const profile = {
    name: 'Alex',
    age: 20,
    coord: {
        lat: 0,
        lng: 3
    },
    setAge(age: number): void {
        this.age = age
    }
}


const { age }: { age: number } = profile
const { coord: { lat, lng } }: { coord: { lat: number; lng: number } } = profile
