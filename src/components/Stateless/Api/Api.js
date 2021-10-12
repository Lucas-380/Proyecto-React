import axios from 'axios'

const Api = axios.create({
    baseURL: "https://fakestoreapi.com/products",
    params: {
        
    }
})

export { Api }