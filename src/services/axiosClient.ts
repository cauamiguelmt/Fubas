import axios from "axios"

const osuApiClient = axios.create({
    baseURL: 'http://172.17.102.43:3000/api/',
    headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.API_KEY
    }
})

export default osuApiClient