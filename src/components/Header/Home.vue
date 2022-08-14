<template>
  <div class="header">
    <city-selector></city-selector>
    <false-input></false-input>
  </div>
</template>

<script>
import CitySelector from './Sub/CitySelector'
import FalseInput from './Sub/FalseInput'

export default {
  name: 'HomeHeader',
  components: {
    CitySelector,
    FalseInput
  }
}
</script>

<style lang="scss" scoped>
@import '~styles/variables.scss';
@import '~styles/mixins.scss';

  .header {
    position: fixed;
    z-index: 3;
    @include flex-row;
    width: 100%;
    height: $headerHeight;
    background-color: $defaultBgColor;
  }
</style>
