import axios from 'axios'

const api = await  axios.create({
    baseURL: process.env.API_URL,
})

export default api