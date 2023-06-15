import Request from '@/_utils/request'

export const loginAPI = ({ account, password }) => {
  return Request.post('/login', { account, password })
}

export const getLikeListAPI = ({ limit = 4 }) => {
  return Request.get('/goods/relevant', { params: limit })
}

export const getUserOrder = (params) => {
  return Request.get('/member/order', params)
}
