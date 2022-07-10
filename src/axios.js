import axios from 'axios'

const instance = axios.create({
    baseURL: '...' // API URL (Cloud Function)
})

export default instance