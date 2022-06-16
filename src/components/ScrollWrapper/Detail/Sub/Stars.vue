<template>
  <div class="stars-bd">
    <span class="iconfont icon-smile"></span>
    <stars :starNum="Number(starNum)"></stars>
    <span class="score">{{ score }}分</span>
  </div>
</template>

<script>
import Stars from "components/ScrollWrapper/Sub/Stars";

export default {
  name: "DetailStars",
  components: {
    Stars,
  },
  props: {
    starNum: {
      type: Number,
      default() {
        return 0;
      },
    },
    score: {
      type: String,
      default() {
        return "0.0";
      },
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~styles/variables.scss";

.stars-bd {
  display: flex;
  height: 0.88rem;
  padding: 0.06rem 0.3rem 0;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
  box-sizing: border-box;

  align-items: center;

  .icon-smile {
    font-size: 0.36rem;
    margin-right: 0.2rem;
    color: #999;
  }

  .score {
    font-size: 0.32rem;
    margin-left: 0.3rem;
    color: $defaultOrange;
  }
}
</style>
