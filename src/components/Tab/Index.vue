<template>
  <nav class="tab">
    <tab-item
      v-for="(item, index) of cityData"
      :key="index"
      :cityInfo="item"
    ></tab-item>
  </nav>
</template>

<script>
import cityData from 'data/cities'

import TabItem from './Item'

export default {
  name: 'Tab',
  components: {
    TabItem
  },
  data() {
    return {
      cityData
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~styles/mixins.scss';

.tab {
  @include flex-row;
  flex-wrap: no-wrap;
  height: .88rem;
  background: #fff;
  border-bottom: 1px solid #ddd;
}
</style>
