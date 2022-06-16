<template>
  <div class="food-item">
    <router-link
      :to="{
        path: '/detail',
        query: {
          field: 'food',
          id: data.id,
        },
      }"
    >
      <div class="img">
        <img :src="data.img" :alt="data.name" class="food-img" />
      </div>
      <div class="info">
        <h1 class="title">{{ data.name }}</h1>
        <p class="stars">
          <stars :starNum="Number(data.star)"></stars>
          <span class="price">￥{{ data.default_price }}/人</span>
        </p>
        <p class="keyword">
          <span
            class="badge"
            v-for="(item, index) of data.keyword"
            :key="index"
          >
            {{ item }}
          </span>
        </p>
        <p class="others">
          <span class="item">{{ data.field }}</span>
          <span class="item">{{ data.city_name }}</span>
        </p>
      </div>
    </router-link>
  </div>
</template>

<script>
import Stars from "../Sub/Stars";

export default {
  name: "FoodListItem",
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

.food-item {
  background-color: #fff;
  border-bottom: 1px solid #ddd;

  .img {
    float: left;
    width: 2.4rem;
    height: 2.4rem;
    padding: 0.2rem;
    box-sizing: border-box;

    .food-img {
      width: 100%;
      height: 100%;
    }
  }

  .info {
    width: 100%;
    height: 2.4rem;
    padding: .2rem .2rem 0 2.4rem;
    box-sizing: border-box;

    .title {
      @include ellipsis;
      font-size: 0.36rem;
      line-height: 0.4rem;
      color: #000;
    }

    .stars {
      font-size: 0.28rem;
      line-height: 0.6rem;

      .price {
        color: #333;
      }
    }

    .keyword {
      height: .6rem;
      line-height: .6rem;
      overflow: hidden;

      .badge {
        margin-left: .1rem;
        padding: 0 .1rem;
        color: rgb(190, 158, 77);
        background-color: rgb(251, 244, 228);
        font-size: .28rem;
      }
    }

    .others {
      @include flex-row;
      justify-content: space-between;
      font-size: .28rem;
      line-height: .5rem;
    }
  }
}
</style>
