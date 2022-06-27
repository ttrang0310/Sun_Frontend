import axios from 'axios';

const api = axios.create({
  // baseURL: 'https://api.fsggroup.io/',
  baseURL: 'http://0.0.0.0:5001',
  timeout: 3600 * 1000 * 3,
  headers: { "Access-Control-Allow-Origin": "*",
            'Content-Type': 'application/json;charset=UTF-8'
  	    }
})

export default api