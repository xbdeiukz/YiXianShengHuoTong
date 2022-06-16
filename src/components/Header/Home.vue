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
    @include flex-row;
    height: $headerHeight;
    background-color: $defaultBgColor;
  }

</style>
