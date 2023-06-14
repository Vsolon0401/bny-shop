import Request from '@/_utils/request'

export const getCategoryAPI = () => {
  return Request.get('/home/category/head')
}

export const getBannerAPI = () => {
  return Request.get('/home/banner')
}

export const findNewAPI = () => {
  return Request.get('/home/new')
}

export const getHotAPI = () => {
  return Request.get('/home/hot')
}
