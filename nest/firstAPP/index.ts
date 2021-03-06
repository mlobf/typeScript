import axios from "axios"

const url = "https://jsonplaceholder.typicode.com/todos/1"



interface Todo {
    id: number,
    title: string,
    completed: boolean,
}

const getResponse = (id: number, title: string, completed: boolean) => {

    axios.get(url).then(response => {
        const todo = response.data as Todo

        const ID = todo.id
        const title = todo.title
        const completed = todo.completed

        console.log(`This is a beatifull report ${ID}`)
        console.log(`This is a title report ${title}`)
        console.log(`This is a finished report ${completed}`)
    })
}

