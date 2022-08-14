<template>
  <div class="scroll-wrapper" ref="wrapper">
    <div class="scroll-content">
      <div v-if="!errorShow">
        <view-list v-if="field=='view'" :viewData="listData[cityId]"></view-list>
        <food-list v-else-if="field=='food'" :foodData="listData[cityId]"></food-list>
        <hotel-list v-else-if="field=='hotel'" :hotelData="listData[cityId]"></hotel-list>
        <massage-list v-else-if="field=='massage'" :massageData="listData[cityId]"></massage-list>
        <ktv-list v-else-if="field=='ktv'" :ktvData="listData[cityId]"></ktv-list>
        <loading :loadingShow="loadingShow"></loading>
      </div>
      <div v-else>
        <loading :loadingShow="loadingShow"></loading>
        <error :errorShow="errorShow"></error>
      </div>
    </div>
  </div>
</template>

<script>
import BetterScroll from 'better-scroll'
import { mapState } from 'vuex'
import { ListModel } from 'models/List'
import tools from 'utils/tools'

import ViewList from './ViewList/Index'
import FoodList from './FoodList/Index'
import HotelList from './HotelList/Index'
import MassageList from './MassageList/Index'
import KtvList from './KtvList/Index'
import Loading from './Sub/Loading'
import Error from './Sub/Error'


export default {
  name: 'ListScrollWrapper',
  components: {
    ViewList,
    FoodList,
    HotelList,
    MassageList,
    KtvList,
    Loading,
    Error
  },
  data() {
    return {
      listData: [],
      loadingShow: true,
      errorShow: false
    }
  },
  computed: {
    ...mapState(['cityId', 'field'])
  },
  methods: {
    getListData(cityId, field) {
      if (!this.listData[cityId]) {
        let listModel = new ListModel()

        this.loadingShow = true

        listModel.getListData(cityId, field).then(res => {
          console.log('listData', res)

          if (res && res.status === 0) {
            const data = res.data.data

            this.errorShow = false
            // this.listData = []
            this.loadingShow = true
            setTimeout(() => {
              this.loadingShow = false
              this.listData[cityId] = tools.formatJSON(data, 'keyword')
            }, 300)
          } else {
            this.errorShow = false
            this.loadingShow = true
            setTimeout(() => {
              this.loadingShow = false
              this.errorShow = true
            }, 500)

            console.log({
              statusCode: res.status,
              errorMsg: res.error
            })
          }
        })
      }
    }
  },
  mounted() {
    this.scroll = new BetterScroll(this.$refs.wrapper, { mouseWheel: true, click: true, tap: true })
    this.getListData(this.cityId, this.field)
  },
  watch: {
    cityId() {
      this.getListData(this.cityId, this.field)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
