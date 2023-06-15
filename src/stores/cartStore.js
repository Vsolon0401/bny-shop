import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { findNewCartListAPI } from '@/services/cart'

export const useCartStore = defineStore(
  'cart',
  () => {
    const cartList = ref([])

    const updateList = async () => {
      const res = await findNewCartListAPI()
      if (res instanceof Error) return
      cartList.value = res?.result
    }

    const addCart = async (goods) => {
      const item = cartList.value?.find((el) => el.skuId === goods.skuId)
      if (item) {
        item.count++
      } else {
        cartList.value.push(goods)
      }
    }

    const delCart = async (skuId) => {
      const idx = cartList.value.findIndex((el) => el.skuId === skuId)
      cartList.value.splice(idx, 1)
    }

    const clearCart = () => {
      cartList.value = []
    }

    const singleCheck = (skuId, selected) => {
      const item = cartList.value?.find((el) => el.skuId === skuId)
      item.selected = selected
    }

    const allCheck = (selected) => {
      cartList.value.forEach((item) => (item.selected = selected))
    }

    const allCount = computed(() => cartList.value.reduce((acc, el) => acc + el?.count, 0))

    const allPrice = computed(() => cartList.value.reduce((a, c) => a + c.count * c.price, 0))

    const selectedCount = computed(() =>
      cartList.value.filter((item) => item?.selected).reduce((a, c) => a + c.count, 0)
    )

    const selectedPrice = computed(() =>
      cartList.value.filter((item) => item?.selected).reduce((a, c) => a + c.count * c.price, 0)
    )

    const isAll = computed(() => cartList.value.every((item) => item?.selected))

    return {
      cartList,
      allCount,
      allPrice,
      isAll,
      selectedCount,
      selectedPrice,
      clearCart,
      addCart,
      delCart,
      singleCheck,
      allCheck,
      updateList
    }
  },
  {
    persist: true
  }
)
