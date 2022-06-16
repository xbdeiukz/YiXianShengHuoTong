<template>
  <div class="list-wrapper">
    <massage-list-item
      v-for="item of massageData"
      :data="item"
      :key="item.id"
    ></massage-list-item>
  </div>
</template>

<script>
import MassageListItem from './Item'

export default {
  name: "MassageList",
  components: {
    MassageListItem
  },
  props: {
    massageData: Array
  }
}
</script>

<style lang="scss" scoped>

</style>
