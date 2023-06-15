import Request from '@/_utils/request'

export const getOrderAPI = (params) => {
  return Request.get(`/member/order/${params}`)
}
