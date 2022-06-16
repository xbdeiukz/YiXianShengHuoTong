<template>
  <div class="swiper-wrapper"> <!-- wrapper的类名随意 -->
    <swiper :options="swiperOption">
      <swiper-slide
        v-for="(item, index) of picData"
        :key="index"
      >
        <img :src="item" class="swiper-img">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

export default {
  name: 'DetailSwiper',
  components: {
    swiper,
    swiperSlide
  },
  props: {
    picData: Array
  },
  data() {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~styles/variables.scss';
@import '~styles/mixins.scss';

  .swiper-wrapper >>> .swiper-pagination-bullet-active {
    background-color: $defaultGreen;
  }

  .swiper-slide {
    height: 4rem;
  }

  .swiper-img {
    width: 100%;
    height: 100%;
  }
</style>
