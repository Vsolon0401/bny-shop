import axiosInstance from '@/_utils/http'

export const stringify = (params) => {
  const toStrParams = ''
  Reflect.ownKeys(params).forEach((el) => {})
}

class Request {
  constructor() {
    this.pending = null
    this.loadign = false
  }

  static async get(url, options) {
    return axiosInstance.get(url, { ...options })
  }

  static async post(url, params, options) {
    return axiosInstance.post(url, {
      body: params,
      ...options
    })
  }
}

export default Request
