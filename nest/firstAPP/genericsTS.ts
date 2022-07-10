// Concept of Generics

// Generic Type is a type wish is kind of connected with somo other type and
//      is very flexble regarding wich exact type that other type is.

// We can better type safety usin generic types
//

const myArr: Array<string> = []

const promise: Promise<number> = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(10)
    }, 2000)
})

promise.then(() => { })

