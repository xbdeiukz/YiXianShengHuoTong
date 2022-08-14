<template>
  <div class="scroll-wrapper" ref="wrapper">
    <div class="scroll-content">
      <current-city></current-city>
      <city-list></city-list>
    </div>
  </div>
</template>

<script>
import BetterScroll from 'better-scroll'
import CurrentCity from './CityList/CurrentCity'
import CityList from './CityList/Index'

export default {
  name: 'CityScrollWrapper',
  mounted() {
    this.scroll = new BetterScroll(this.$refs.wrapper, { mouseWheel: true, click: true, tap: true })
  },
  components: {
    CurrentCity,
    CityList
  }
}
</script>

<style lang="scss" scoped>

</style>
