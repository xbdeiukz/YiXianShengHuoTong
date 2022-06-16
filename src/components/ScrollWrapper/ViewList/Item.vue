<template>
  <div class="view-item">
    <router-link
      :to="{
        path: '/detail',
        query: {
          field: 'view',
          id: data.id,
        },
      }"
    >
      <div class="img">
        <img :src="data.img" :alt="data.name" class="view-img" />
      </div>
      <div class="info">
        <h1 class="title">{{ data.name }}</h1>
        <p class="stars">
          <stars :starNum="Number(data.star)"></stars>
          <span class="score">{{ data.score }}分</span>
        </p>
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
import Stars from "../Sub/Stars.vue";

export default {
  name: "ViewListItem",
  components: {
    Stars,
  },
  props: {
    data: Object
  }
};
</script>

<style lang="scss" scoped>
@import '~styles/variables.scss';
@import '~styles/mixins.scss';

.view-item {
  width: 50%;
  padding: .2rem;
  box-sizing: border-box;

  .img {
    width: 100%;
    height: 2.2rem;
    overflow: hidden;

    .view-img {
      width: 100%;
      min-height: 2.2rem;
    }
  }

  .info {
    .title {
      @include ellipsis;
      height: .6rem;
      font-size: .32rem;
      line-height: .6rem;
      color: #000;
    }

    .stars {
      height: .6rem;
      line-height: .6rem;
      font-size: .28rem;
      color: #ccc;

      .active,
      .score {
        color: $starColor;
      }
    }

    .others {
        @include flex-row;
        justify-content: space-between;
        height: .6rem;
        line-height: .6rem;

        .item {
          font-size: .28rem;

          .price {
            font-size: .4rem;
            color: $defaultGreen;
            vertical-align: -.02rem;
          }
        }
      }
  }
}
</style>
