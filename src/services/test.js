import Request from '@/_utils/request'

export const testCategory = async () => {
  return Request.get('home/category/head')
}
