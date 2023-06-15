import Request from '@/_utils/request'

export const getCheckInfoAPI = () => {
  return Request.get('/member/order/pre')
}

export const createOrderAPI = (params) => {
  return Request.post('/member/order', params)
}
