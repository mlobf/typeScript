import axios from "axios"

const url = "https://jsonplaceholder.typicode.com/todos/1"
axios.get(url).then(response => {
    //console.log(response.data)
    const todo = response.data

    console.log(todo)

    const ID = todo.id
    const title = todo.title
    const finished = todo.completed

    console.log(`This is a beatifull report ${ID}`)
    console.log(`This is a title report ${title}`)
    console.log(`This is a finished report ${finished}`)
})



