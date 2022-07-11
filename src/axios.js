import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:5001/clone-268f4/us-central1/api' // API URL (Cloud Function)
})

export default instance