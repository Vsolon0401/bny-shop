import axiosInstance from '@/_utils/http'
import { AxiosError } from 'axios'

class Request {
  constructor() {}

  static async get(url, options) {
    const res = await axiosInstance.get(url, { ...options })
    if (res instanceof AxiosError) return new Error('网络繁忙，请稍后再试')
    return res?.data
  }

  static async post(url, params, options) {
    const res = await axiosInstance.post(
      url,
      {
        ...params
      },
      { ...options }
    )
    if (res instanceof AxiosError) return new Error('网络繁忙，请稍后再试')
    return res?.data
  }
}

export default Request
