import { defineStore } from 'pinia'
import { useCartStore } from '@/stores/cartStore'
import { ref } from 'vue'
import { loginAPI } from '@/services/user'
import { mergeCartAPI } from '@/services/cart'

export const useUserStore = defineStore(
  'user',
  () => {
    const cartStore = useCartStore()

    const userInfo = ref({})

    const getUserInfo = async ({ account, password }) => {
      const res = await loginAPI({ account, password })
      if (res instanceof Error) return
      userInfo.value = res.result

      await mergeCartAPI(
        cartStore.cartList.map((item) => {
          return {
            skuId: item.skuId,
            selected: item.selected,
            count: item.count
          }
        })
      )

      cartStore.updateList()
    }

    const clearUserInfo = () => {
      userInfo.value = {}
      cartStore.clearCart()
    }

    return {
      userInfo,
      getUserInfo,
      clearUserInfo
    }
  },
  {
    persist: true
  }
)
