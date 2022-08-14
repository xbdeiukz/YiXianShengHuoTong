<template>
  <div class="scroll-wrapper" ref="wrapper">
    <div class="scroll-content">
      <category-icons></category-icons>
      <div v-if="!errorShow">
        <list-title :title="homeTitle.viewTitle"></list-title>
        <view-list :viewData="homeData.viewData"></view-list>

        <list-title :title="homeTitle.foodTitle"></list-title>
        <food-list :foodData="homeData.foodData"></food-list>

        <list-title :title="homeTitle.hotelTitle"></list-title>
        <hotel-list :hotelData="homeData.hotelData"></hotel-list>

        <list-title :title="homeTitle.massageTitle"></list-title>
        <massage-list :massageData="homeData.massageData"></massage-list>

        <list-title :title="homeTitle.ktvTitle"></list-title>
        <ktv-list :ktvData="homeData.ktvData"></ktv-list>
      </div>
      <error :errorShow="errorShow"></error>
    </div>
  </div>
</template>

<script>
import BetterScroll from "better-scroll"

import CategoryIcons from "./CategoryIcons/Index"
import ListTitle from "./Sub/ListTitle"
import ViewList from "./ViewList/Index"
import FoodList from "./FoodList/Index"
import HotelList from "./HotelList/Index"
import MassageList from "./MassageList/Index"
import KtvList from "./KtvList/Index"
import Error from "./Sub/Error"

import { mapState } from "vuex"
import { IndexModel } from "models/Index"

import tools from "utils/tools"

export default {
  name: "HomeScrollWrapper",
  components: {
    CategoryIcons,
    ListTitle,
    ViewList,
    FoodList,
    HotelList,
    MassageList,
    KtvList,
    Error,
  },
  data() {
    return {
      homeTitle: {
        foodTitle: "推荐美食",
        hotelTitle: "推荐酒店",
        ktvTitle: "推荐KTV",
        massageTitle: "推荐按摩",
        viewTitle: "推荐景点",
      },
      homeData: {
        foodData: [],
        hotelData: [],
        ktvData: [],
        massageData: [],
        viewData: [],
      },
      errorShow: false,
      currentCityId: 0
    };
  },
  computed: {
    ...mapState(["cityId"]),
  },
  methods: {
    getHomeData(cityId) {
      const indexModel = new IndexModel()

      indexModel.getHomeData(cityId).then(res => {
        console.log("homeRes", res)

        if (res && res.status === 0) {
          const data = res.data.data

          this.errorShow = false
          this.homeData.foodData = tools.formatJSON(data.foodDatas, "keyword")
          this.homeData.hotelData = data.hotelDatas
          this.homeData.ktvData = data.ktvDatas
          this.homeData.massageData = data.massageDatas
          this.homeData.viewData = data.viewDatas
        } else {
          this.errorShow = true
          console.log({
            statusCode: res.status,
            errorMsg: res.error
          })
        }
      })
    },
  },
  mounted() {
    this.scroll = new BetterScroll(this.$refs.wrapper, { mouseWheel: true, click: true, tap: true })
    this.getHomeData(this.cityId)
    this.currentCityId = this.cityId
  },
  activated() {
    if (this.currentCityId != this.cityId) {
      this.currentCityId = this.cityId
      this.getHomeData(this.currentCityId)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
