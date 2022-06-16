<template>
  <div class="scroll-wrapper" ref="wrapper">
    <div class="scroll-content">
      <div v-if="!errorShow">
        <detail-swiper
          :picData="detailData.pics"
        ></detail-swiper>

        <food-detail
          v-if="field == 'food'"
          :name="detailData.name"
          :starNum="Number(detailData.star)"
          :score="detailData.score"
          :address="detailData.address"
          :price="Number(detailData.default_price)"
          :openingTime="detailData.open_datetime"
          :recom="detailData.recom"
          :commentKeywords="detailData.comment_keyword"
        ></food-detail>

        <view-detail
          v-else-if="field == 'view'"
          :name="detailData.name"
          :starNum="Number(detailData.star)"
          :score="detailData.score"
          :address="detailData.address"
          :price="Number(detailData.default_price)"
          :openingTime="detailData.open_datetime"
          :tip="detailData.tip"
          :intro="detailData.intro"
          :ticketInfo="detailData.ticket_info"
        ></view-detail>

        <hotel-detail
          v-else-if="field == 'hotel'"
          :name="detailData.name"
          :starNum="Number(detailData.star)"
          :score="detailData.score"
          :address="detailData.address"
          :price="Number(detailData.default_price)"
          :service="detailData.service"
        ></hotel-detail>

        <massage-detail
          v-else-if="field == 'massage'"
          :name="detailData.name"
          :starNum="Number(detailData.star)"
          :score="detailData.score"
          :address="detailData.address"
          :price="Number(detailData.default_price)"
          :openingTime="detailData.open_datetime"
          :commentKeywords="detailData.comment_keyword"
          :service="detailData.service"
        ></massage-detail>

        <ktv-detail
          v-else-if="field == 'ktv'"
          :name="detailData.name"
          :starNum="Number(detailData.star)"
          :score="detailData.score"
          :address="detailData.address"
          :price="Number(detailData.default_price)"
          :service="detailData.service"
        ></ktv-detail>
      </div>
      <error
        :errorShow="errorShow"
      ></error>
    </div>
  </div>
</template>

<script>
import BetterScroll from "better-scroll"
import DetailSwiper from "./Sub/Swiper"
import ViewDetail from "./Detail/View"
import FoodDetail from "./Detail/Food"
import HotelDetail from "./Detail/Hotel"
import MassageDetail from "./Detail/Massage"
import KtvDetail from './Detail/Ktv'
import Error from './Sub/Error'

import { DetailModel } from "models/Detail"
import tools from "utils/tools"

export default {
  name: "DetailScrollWrapper",
  components: {
    DetailSwiper,
    FoodDetail,
    ViewDetail,
    HotelDetail,
    MassageDetail,
    KtvDetail,
    Error
  },
  data() {
    return {
      field: "",
      id: 0,
      detailData: {},
      errorShow: false
    };
  },
  methods: {
    getDetailData(field, id) {
      const detailModel = new DetailModel();

      detailModel.getDetailData(field, id).then((res) => {
        console.log("detailRes", res);

        if (res && res.status == 0) {
          let data = res.data.data;

          this.errorShow = false

          data.pics && (data.pics = tools.jsonToArr(data.pics))
          data.comment_keyword &&
            (data.comment_keyword = tools.strToArr(data.comment_keyword))
          data.recom && (data.recom = tools.replaceToSpace(data.recom))
          data.service && (data.service = tools.jsonToArr(data.service))

          this.detailData = data
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
  created() {
    console.log('created------')
  },
  mounted() {
    this.betterScroll = new BetterScroll(this.$refs.wrapper)
    this.field = this.$route.query.field
    this.id = this.$route.query.id
    this.getDetailData(this.field, this.id)
  },
  activated() {
    this.currentField = this.$route.query.field
    this.currentId = this.$route.query.id

    if (this.currentField !== this.field || this.currentId !== this.id) {
      this.field = this.currentField
      this.id = this.currentId

      this.getDetailData(this.field, this.id)
    }
  },
};
</script>

<style lang="scss" scoped>
</style>
