<template>
  <div class="ktv-item">
    <router-link
      :to="{
        path: '/detail',
        query: {
          field: 'ktv',
          id: data.id
        }
      }"
    >
      <div class="img">
        <img :src="data.img" :alt="data.name" class="ktv-img" />
      </div>
      <div class="info">
        <h1 class="title">{{ data.name }}</h1>
        <p class="stars">
          <stars :starNum="Number(data.star)"></stars>
          <span class="score">{{ data.score }}分</span>
        </p>
        <p class="others">
          <span class="price">
            ￥<span class="price-value">{{ data.default_price }}</span> 起
          </span>
          <span class="city">{{ data.city_name }}</span>
        </p>
      </div>
    </router-link>
  </div>
</template>

<script>
import Stars from "../Sub/Stars";

export default {
  name: "KtvListItem",
  components: {
    Stars,
  },
  props: {
    data: Object,
  },
};
</script>

<style lang="scss" scoped>
@import "~styles/variables.scss";
@import "~styles/mixins.scss";

.ktv-item {
  background: #fff;
  border-bottom: 1px solid #ddd;

  .img {
    float: left;
    width: 2.4rem;
    height: 2.4rem;
    padding: 0.2rem;
    box-sizing: border-box;

    .ktv-img {
      width: 100%;
      height: 100%;
    }
  }

  .info {
    width: 100%;
    height: 2.4rem;
    padding: 0.2rem 0.2rem 0 2.4rem;
    box-sizing: border-box;

    .title {
      @include ellipsis;
      font-size: 0.36rem;
      line-height: 0.4rem;
      color: #000;
    }

    .stars {
      font-size: 0.28rem;
      line-height: 1rem;

      .score {
        color: $starColor;
      }
    }

    .others {
      @include flex-row;
      justify-content: space-between;
      font-size: 0.28rem;
      line-height: 0.7rem;

      .price-value {
        color: $defaultGreen;
        font-size: 0.4rem;
      }
    }
  }
}
</style>
