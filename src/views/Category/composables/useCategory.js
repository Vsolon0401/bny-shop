import { onMounted, ref } from 'vue'
import { getCategoryAPI } from '@/services/category'
import { onBeforeRouteUpdate, useRoute } from 'vue-router'

export const useCategory = () => {
  const categoryData = ref({})
  const router = useRoute()

  const getCategory = async (id = router?.params?.id) => {
    const res = await getCategoryAPI(id)
    if (res instanceof Error) return
    categoryData.value = res.result
  }

  onMounted(() => getCategory())
  onBeforeRouteUpdate((to) => {
    getCategory(to?.params?.id)
  })

  return {
    categoryData
  }
}
