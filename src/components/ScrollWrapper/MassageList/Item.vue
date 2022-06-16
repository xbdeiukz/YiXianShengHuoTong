<template>
  <div class="massage-item">
    <router-link
      :to="{
        path: '/detail',
        query: {
          field: 'massage',
          id: data.id
        }
      }"
    >
      <div class="img">
        <img :src="data.img" :alt="data.name" class="massage-img" />
      </div>
      <div class="info">
        <h1 class="title">{{ data.name }}</h1>
        <p class="stars">
          <stars :starNum="Number(data.star)"></stars>
          <span class="score">{{ data.score }}分</span>
        </p>
        <p class="others">
          <span class="price">
            ￥<span class="price-value">{{ data.default_price }}</span> 元
          </span>
          <span class="city">{{ data.city_name }}</span>
        </p>
      </div>
    </router-link>
  </div>
</template>

<script>
import Stars from '../Sub/Stars'

export default {
  name: "MassageListItem",
  components: {
    Stars
  },
  props: {
    data: Object,
  }
};
</script>

<style lang="scss" scoped>
@import '~styles/variables.scss';
@import '~styles/mixins.scss';

.massage-item {
  background-color: #fff;
  border-bottom: 1px solid #ddd;

  .img {
    float: left;
    width: 2.4rem;
    height: 2.4rem;
    padding: .2rem;
    box-sizing: border-box;

    .massage-img {
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
      font-size: .36rem;
      color: #000;
      line-height: .4rem;
    }

    .stars {
      font-size: .28rem;
      line-height: 1rem;
      color: #ccc;
    }

    .score {
      color: $starColor;
    }

    .others {
      @include flex-row;
      justify-content: space-between;
      font-size: .28rem;
      line-height: .7rem;

      .price-value {
        font-size: .4rem;
        color: $defaultOrange;
      }
    }
  }
}

</style>
