<template>
  <HomePanel title="新鲜好物" sub-title="品质保证">
    <template #main>
      <ul class="goods-list">
        <li v-for="item in newList"  :key="item.id">
          <RouterLink :to="`/detail/${item.id}`" >
            <img :src="item.picture" alt="">
            <p class="name">{{item?.name ?? '-'}}</p>
            <p class="price">{{item?.price ?? '0'}}</p>
          </RouterLink>
        </li>
      </ul>
    </template>
  </HomePanel>
</template>

<script setup>
import HomePanel from "@/views/Home/components/HomePanel.vue";
import {onMounted, ref} from "vue";
import {findNewAPI} from "@/services/category";

const newList = ref([])
const getNewList = async () => {
  const res = await findNewAPI()
  if (res instanceof AxiosError) return;
  newList.value = res?.data?.result;
}

onMounted(() => {
  getNewList()
})

</script>

<style scoped lang="scss">
.goods-list {
  display: flex;
  justify-content: space-between;
  height: 406px;

  li {
    width: 306px;
    height: 406px;

    background: #f0f9f4;
    transition: all .5s;

    &:hover {
      transform: translate3d(0, -3px, 0);
      box-shadow: 0 3px 8px rgb(0 0 0 / 20%);
    }

    img {
      width: 306px;
      height: 306px;
    }

    p {
      font-size: 22px;
      padding-top: 12px;
      text-align: center;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }

    .price {
      color: $priceColor;
    }
  }
}
</style>
