<template>
  <div class="list-wrapper">
    <city-list-item
      v-for="(item, index) of cityList"
      :cityInfo="item"
      :key="index"
    ></city-list-item>
  </div>
</template>

<script>
import CityListItem from './Item'
import cityData from 'data/cities'

export default {
  name: 'CityList',
  data() {
    return {
      cityList: cityData
    }
  },
  components: {
    CityListItem
  },
}
</script>

<style lang="scss" scoped>

</style>
