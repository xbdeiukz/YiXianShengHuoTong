<template>
  <div class="hotel-item">
    <router-link
      :to="{
        path: '/detail',
        query: {
          field: 'hotel',
          id: data.id,
        },
      }"
    >
      <div class="img">
        <img :src="data.img" :alt="data.name" class="hotel-img" />
      </div>
      <div class="info">
        <h1 class="title">{{ data.name }}</h1>
        <p class="score">{{ data.score }}分</p>
        <p class="area">{{ data.area }}</p>
        <p class="others">
          <span class="item">
            ￥<span class="price">{{ data.default_price }}</span> 起
          </span>
          <span class="item">{{ data.city_name }}</span>
        </p>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "HotelListItem",
  props: {
    data: Object,
  },
};
</script>

<style lang="scss" scoped>
@import "~styles/variables.scss";
@import "~styles/mixins.scss";

.hotel-item {
  background-color: #fff;
  border-bottom: 1px solid #ddd;

  .img {
    float: left;
    width: 2.4rem;
    height: 2.4rem;
    padding: 0.2rem;
    box-sizing: border-box;

    .hotel-img {
      width: 100%;
      height: 100%;
    }
  }

  .info {
    width: 100%;
    height: 2.4rem;
    box-sizing: border-box;
    padding: 0.2rem 0.2rem 0 2.4rem;

    .title {
      @include ellipsis;
      font-size: 0.36rem;
      line-height: 0.4rem;
      color: #000;
    }

    .score {
      height: 0.6rem;
      line-height: 1rem;
      font-size: 0.32rem;
      line-height: 0.6rem;
      color: $starColor;
    }

    .area {
      @include ellipsis;
      font-size: 0.28rem;
      color: #999;
    }

    .others {
      @include flex-row;
      justify-content: space-between;
      margin-top: 0.2rem;
      line-height: 0.5rem;

      .item {
        font-size: 0.28rem;

        .price {
          font-size: 0.4rem;
          color: $defaultGreen;
        }
      }
    }
  }
}
</style>
