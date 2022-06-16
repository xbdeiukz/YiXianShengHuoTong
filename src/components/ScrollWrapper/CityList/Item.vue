<template>
  <div class="city-item">
    <span class="city"
      @click="onCityClick(cityInfo)"
    >
      {{ cityInfo.cityName }}
    </span>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'CityListItem',
  props: {
    cityInfo: Object
  },
  methods: {
    ...mapMutations(['selectCity']),
    onCityClick(cityInfo) {
      this.selectCity(cityInfo)
      this.$router.push('/')
    }
  }
};
</script>

<style lang="scss" scoped>
@import '~styles/variables.scss';
@import '~styles/mixins.scss';

.city-item {
  @include flex-row;
  align-items: center;
  height: 1rem;
  padding-left: .3rem;
  background-color: #fff;
  border-bottom: solid 1px #ddd;
  font-size: .32rem;
  cursor: pointer;
}
</style>
