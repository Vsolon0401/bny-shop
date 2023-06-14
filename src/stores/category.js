import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getCategoryAPI } from '@/services/category'
import { AxiosError } from 'axios'

export const useCategoryStore = defineStore('category', () => {
  const categoryList = ref([])

  const getCategory = async () => {
    const res = await getCategoryAPI()
    if (res instanceof AxiosError) return
    categoryList.value = res?.data?.result
  }

  return {
    categoryList,
    getCategory
  }
})
