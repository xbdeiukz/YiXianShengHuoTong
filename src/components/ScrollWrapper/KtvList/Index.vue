<template>
  <div class="list-wrapper">
     <ktv-list-item
      v-for="item of ktvData"
      :data="item"
      :key="item.id"
     ></ktv-list-item>
  </div>
</template>

<script>
import KtvListItem from './Item'

export default {
  name: 'KtvList',
  components: {
    KtvListItem
  },
  props: {
    ktvData: Array
  }
}
</script>

<style>

</style>
