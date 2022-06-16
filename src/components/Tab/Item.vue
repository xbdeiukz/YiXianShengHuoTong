<template>
  <div
    :class="['tab-item', {current: cityInfo.cityId === cityId}]"
    @click="onTabClick(cityInfo)"
  >
    <span>{{ cityInfo.cityName }}</span>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'TabItem',
  props: {
    cityInfo: Object
  },
  computed: {
    ...mapState(['cityId'])
  },
  methods: {
    ...mapMutations(['selectCity']),
    onTabClick(cityInfo) {
      this.selectCity(cityInfo)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~styles/variables.scss';
@import '~styles/mixins.scss';

.tab-item {
  @include vh-center;
  flex: 1;
  height: 100%;
  font-size: .32rem;
  border-bottom: 2px solid transparent;
  box-sizing: border-box;

  &.current {
    color: $defaultGreen;
    border-bottom-color: $defaultGreen;
  }
}
</style>
