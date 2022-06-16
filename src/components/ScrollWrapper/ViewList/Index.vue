<template>
  <div class="list-wrapper">
    <view-list-item
      v-for="item of viewData"
      :data="item"
      :key="item.id"
    ></view-list-item>
  </div>
</template>

<script>
import ViewListItem from './Item.vue'

export default {
  name: 'ViewList',
  components: {
    ViewListItem
  },
  props: {
    viewData: Array
  }
}
</script>

<style lang="scss" scoped>
@import '~styles/variables.scss';
@import '~styles/mixins.scss';

.list-wrapper {
  @include flex-row;
  flex-wrap: wrap;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
}
</style>
