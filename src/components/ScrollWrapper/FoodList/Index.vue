<template>
  <div class="list-wrapper">
    <food-list-item
      v-for="item of foodData"
      :key="item.id"
      :data="item"
    ></food-list-item>
  </div>
</template>

<script>
import FoodListItem from './Item'

export default {
  name: 'FoodList',
  components: {
    FoodListItem
  },
  props: {
    foodData: Array
  }
}
</script>

<style lang="scss" scoped>


</style>
