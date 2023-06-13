import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
  timeout: 5000
})

axiosInstance.interceptors.request.use(
  (configs) => {
    return configs
  },
  (error) => Promise.reject(error)
)

axiosInstance.interceptors.response.use(
  (res) => {
    return new Promise((resolve, reject) => {
      resolve(res)
    })
  },
  (error) => Promise.reject(error)
)

export default axiosInstance
