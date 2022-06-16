<template>
  <div class="price-bd">
    <span class="iconfont icon-price"></span>
    <span class="price">￥{{ price }} 元起</span>
  </div>
</template>

<script>
export default {
  name: "DetailPrice",
  props: {
    price: {
      type: Number,
      default() {
        return 0;
      },
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~styles/variables.scss";

.price-bd {
  display: flex;
  align-items: center;
  height: 0.88rem;
  padding: 0.2rem 0.3rem;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
  box-sizing: border-box;

  .icon-price {
    font-size: 0.36rem;
    margin-right: 0.2rem;
    color: #999;
  }

  .price {
    color: $defaultOrange;
    font-size: 0.36rem;
  }
}
</style>
