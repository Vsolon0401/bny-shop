import Request from '@/_utils/request'

export const getDetail = (params) => {
  return Request.get('/goods', { id: params })
}

export const getHotGoodsAPI = (params) => {
  return Request.get('/goods/hot', { ...params })
}
