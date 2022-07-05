import axios from "axios"

const url = "https://jsonplaceholder.typicode.com/posts/1"
const result = async (url) => {
    axios.get(url)
}

console.log(result)


