//

const drink = {
    color: 'brown',
    carbonate: true,
    sugar: 40
}

// Type alias
type Drink = [string, boolean, number]

//const pepsi: [string, boolean, number] = ['brown', true, 40]
const pepsi: Drink = ['brown', true, 40]
//pepsi[0] = 10
//pepsi[2] = 'brown'

const sprite: Drink = ['black', true, 0]
