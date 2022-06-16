<template>
  <div class="detail-wrapper">
    <detail-name :name="name"></detail-name>
    <detail-stars :starNum="starNum" :score="score"></detail-stars>
    <detail-address :address="address"></detail-address>
    <detail-price :price="price"></detail-price>
    <detail-opening-time :openingTime="openingTime"></detail-opening-time>
    <detail-comment :commentKeywords="commentKeywords"></detail-comment>
    <detail-service :service="service"></detail-service>
  </div>
</template>

<script>
import DetailName from "./Sub/Name"
import DetailStars from "./Sub/Stars"
import DetailAddress from "./Sub/Address"
import DetailPrice from "./Sub/Price"
import DetailOpeningTime from "./Sub/OpeningTime"
import DetailComment from './Sub/Comment'
import DetailService from './Sub/Service'


export default {
  name: "MassageDetail",
  components: {
    DetailName,
    DetailStars,
    DetailAddress,
    DetailPrice,
    DetailOpeningTime,
    DetailComment,
    DetailService
  },
  props: {
    name: String,
    starNum: Number,
    score: String,
    address: String,
    price: Number,
    openingTime: String,
    commentKeywords: Array,
    service: Object
  },
};
</script>

<style lang="scss" scoped>
</style>
