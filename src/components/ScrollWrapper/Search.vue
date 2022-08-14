<template>
  <div class="scroll-wrapper" ref="wrapper">
    <div class="scroll-content">
      <error :errorShow="errorShow"></error>
      <no-data-tip v-show="noDataTipShow"></no-data-tip>
      <div v-if="data.viewDatas && data.viewDatas.length > 0">
        <list-title title="景点结果："></list-title>
        <view-list :viewData="data.viewDatas"></view-list>
      </div>
      <div v-if="data.foodDatas && data.foodDatas.length > 0">
        <list-title title="美食结果："></list-title>
        <food-list :foodData="data.foodDatas"></food-list>
      </div>
      <div v-if="data.hotelDatas && data.hotelDatas.length > 0">
        <list-title title="酒店结果："></list-title>
        <hotel-list :hotelData="data.hotelDatas"></hotel-list>
      </div>
      <div v-if="data.massageDatas && data.massageDatas.length > 0">
        <list-title title="按摩结果："></list-title>
        <massage-list :massageData="data.massageDatas"></massage-list>
      </div>
      <div v-if="data.ktvDatas && data.ktvDatas.length > 0">
        <list-title title="KTV结果："></list-title>
        <ktv-list :ktvData="data.ktvDatas"></ktv-list>
      </div>
    </div>
  </div>
</template>

<script>
import BetterScroll from 'better-scroll'

import ListTitle from './Sub/ListTitle'
import ViewList from './ViewList/Index'
import FoodList from './FoodList/Index'
import HotelList from './HotelList/Index'
import MassageList from './MassageList/Index'
import KtvList from './KtvList/Index'
import NoDataTip from './Sub/NoDataTip'
import Error from './Sub/Error'

export default {
  name: 'SearchScrollWrapper',
  components: {
    ListTitle,
    ViewList,
    FoodList,
    HotelList,
    MassageList,
    KtvList,
    NoDataTip,
    Error
  },
  props: {
    data: Object
  },
  computed: {
    errorShow() {
      return this.data.status === -1 ? true : false
    },
    noDataTipShow() {
      var data = this.data

      return (
        (data.viewDatas && data.viewDatas.length > 0) ||
        (data.foodDatas && data.foodDatas.length > 0) ||
        (data.hotelDatas && data.hotelDatas.length > 0) ||
        (data.massageDatas && data.massageDatas.length > 0) ||
        (data.ktvDatas && data.ktvDatas.length > 0) ?
        false : true
      )
    }
  },
  mounted() {
    this.scroll = new BetterScroll(this.$refs.wrapper, { mouseWheel: true, click: true, tap: true })
    console.log(this.data)
  }
}
</script>

<style lang="scss" scoped>

</style>
