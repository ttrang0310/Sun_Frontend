import axios from 'axios';

const api = axios.create({
  baseURL: 'http://210.245.54.243:5002',
  timeout: 3600 * 1000 * 3,
  headers: { "Access-Control-Allow-Origin": "*",
            'Content-Type': 'application/json;charset=UTF-8'
  	    }
})

export default api