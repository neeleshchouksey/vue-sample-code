import axios from 'axios'
import { BASE_URL } from '../constants'

const axiosCommon = axios.create({
  baseURL: BASE_URL
})

axiosCommon.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
      config.headers['Access-Control-Allow-Origin'] = '*'
    } else {
      config.headers['Access-Control-Allow-Origin'] = '*'
    }
    return config
  }
)

export default axiosCommon
