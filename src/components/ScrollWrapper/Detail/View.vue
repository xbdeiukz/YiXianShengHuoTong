<template>
  <div class="detail-wrapper">
    <detail-name :name="name"></detail-name>
    <detail-stars :starNum="starNum" :score="score"></detail-stars>
    <detail-address :address="address"></detail-address>
    <detail-price :price="price"></detail-price>
    <detail-opening-time :openingTime="openingTime"></detail-opening-time>
    <detail-tip :tip="tip" iconClass="icon-tip"></detail-tip>
    <detail-intro :intro="intro"></detail-intro>
    <detail-ticket-info :ticketInfo="ticketInfo"></detail-ticket-info>
  </div>
</template>

<script>
import DetailName from "./Sub/Name"
import DetailStars from "./Sub/Stars"
import DetailAddress from "./Sub/Address"
import DetailPrice from "./Sub/Price"
import DetailOpeningTime from "./Sub/OpeningTime"
import DetailTip from './Sub/Tip'
import DetailIntro from './Sub/Intro'
import DetailTicketInfo from './Sub/TicketInfo'

export default {
  name: "ViewDetail",
  components: {
    DetailName,
    DetailStars,
    DetailAddress,
    DetailPrice,
    DetailOpeningTime,
    DetailTip,
    DetailIntro,
    DetailTicketInfo
  },
  props: {
    name: String,
    starNum: Number,
    score: String,
    address: String,
    price: Number,
    openingTime: String,
    recom: String,
    commentKeywords: Array,
    tip: String,
    intro: String,
    ticketInfo: String
  },
};
</script>

<style lang="scss" scoped>
</style>
