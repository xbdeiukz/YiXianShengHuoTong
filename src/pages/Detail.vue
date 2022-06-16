<template>
  <div class="contianer">
    <common-header :title="title"></common-header>
    <detail-scroll-wrapper></detail-scroll-wrapper>
  </div>
</template>

<script>
import CommonHeader from "components/Header/Common.vue";
import DetailScrollWrapper from "components/ScrollWrapper/Detail";

export default {
  name: "Detail",
  data() {
    return {
      title: "详细信息",
    };
  },
  components: {
    CommonHeader,
    DetailScrollWrapper,
  },
};
</script>

<style>
</style>
