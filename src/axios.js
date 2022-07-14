import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://us-central1-clone-268f4.cloudfunctions.net/api' // API URL (Cloud Function)
    
    //'http://localhost:5001/clone-268f4/us-central1/api' ---For debugging purposes.
})

export default instance;