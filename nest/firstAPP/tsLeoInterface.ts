interface Icoord {
    lat: number
    lnf: number
}
interface Iprofile {
    name: string
    age: number
    coord: Icoord
    setAge: (age: number) => void
    setName: (name: string) => void
}



const profileum: Iprofile = {
    name: "Marcos",
    age: 40,
    coord: { lat: 3, lnf: 3 },
    setAge(age) {
        console.log(age)
    },
    setName(name) {
        console.log(name)
    },
}


export { Iprofile, Icoord }