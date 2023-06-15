import Request from '@/_utils/request'

export const insertCartAPI = ({ skuId, count }) => {
  return Request.post('/member/cart', { skuId, count })
}

export const findNewCartListAPI = () => {
  return Request.get('/member/cart')
}

export const delCartAPI = (ids) => {
  return Request.delete('/member/cart', ids)
}

export const mergeCartAPI = (params) => {
  return Request.post('/member/cart/merge', params)
}
