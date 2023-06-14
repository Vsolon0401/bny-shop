import { useIntersectionObserver } from '@vueuse/core'

export const lazyPlugin = {
  install(app) {
    app.directive('img-lazy', {
      mounted(el, binding) {
        //   el: 指令绑定的h5元素
        //   binding: value -> 表达式值
        const { stop } = useIntersectionObserver(el, ([{ isIntersection }]) => {
          if (isIntersection) {
            el.src = binding.value
            stop?.()
          }
        })
      }
    })
  }
}
