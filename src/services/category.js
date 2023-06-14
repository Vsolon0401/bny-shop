import Request from '@/_utils/request'

// 获取category列表
export const getCategoryAPI = () => {
  return Request.get('/home/category/head')
}

// 获取banner图片
export const getBannerAPI = () => {
  return Request.get('/home/banner')
}

// 获取new列表
export const findNewAPI = () => {
  return Request.get('/home/new')
}

// 获取hot最热商品列表
export const getHotAPI = () => {
  return Request.get('/home/hot')
}

// 获取二级分类列表
export const getCategoryFilterAPI = (params) => {
  return Request.post('/category/sub/filter', params)
}

// 获取导航数据
export const getSubCategoryAPI = (params) => {
  return Request.post('/category/goods/temporary', params)
}

// 获取所以商品
export const getGoodsAPI = () => {
  return Request.get('/home/goods')
}
