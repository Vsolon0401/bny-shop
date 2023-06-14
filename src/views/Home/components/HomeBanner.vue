<template>
  <div class="home-banner">
    <el-carousel>
      <el-carousel-item v-for="item in bannerList" :key="item.id">
        <img :src="item.itemUrl" alt="" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { getBannerAPI } from '@/services/category'

const bannerList = ref([])

const getBanner = async () => {
  const res = await getBannerAPI()
  if (res instanceof Error) return
  bannerList.value = res?.result
}

onMounted(() => getBanner())
</script>

<style scoped lang="scss">
.home-banner {
  width: 1240px;
  height: 500px;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 98;

  img {
    width: 100%;
    height: 500px;
  }
}
</style>
