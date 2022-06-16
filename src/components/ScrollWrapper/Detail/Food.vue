<template>
  <div class="detail-wrapper">
    <detail-name :name="name"></detail-name>
    <detail-stars :starNum="starNum" :score="score"></detail-stars>
    <detail-address :address="address"></detail-address>
    <detail-price :price="price"></detail-price>
    <detail-opening-time :openingTime="openingTime"></detail-opening-time>
    <detail-recom :recom="recom"></detail-recom>
    <detail-comment :commentKeywords="commentKeywords"></detail-comment>
  </div>
</template>

<script>
import DetailName from "./Sub/Name"
import DetailStars from "./Sub/Stars"
import DetailAddress from "./Sub/Address"
import DetailPrice from "./Sub/Price"
import DetailOpeningTime from "./Sub/OpeningTime"
import DetailRecom from "./Sub/Recom"
import DetailComment from './Sub/Comment'

export default {
  name: "FoodDetail",
  components: {
    DetailName,
    DetailStars,
    DetailAddress,
    DetailPrice,
    DetailOpeningTime,
    DetailRecom,
    DetailComment
  },
  props: {
    name: String,
    starNum: Number,
    score: String,
    address: String,
    price: Number,
    openingTime: String,
    recom: String,
    commentKeywords: Array
  },
};
</script>

<style lang="scss" scoped>
</style>
