import { onMounted, ref } from 'vue'
import { getBannerAPI } from '@/services/category'

export const useBanner = () => {
  const bannerList = ref([])

  const getBanner = async () => {
    const res = await getBannerAPI()
    if (res instanceof Error) return
    bannerList.value = res?.result
  }

  onMounted(() => getBanner())

  return {
    bannerList
  }
}
