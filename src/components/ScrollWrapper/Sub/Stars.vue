<template>
  <span class="stars-wrapper">
    <span :class="['iconfont icon-star', {active: starNum > 0}]"></span>
    <span :class="['iconfont icon-star', {active: starNum > 1}]"></span>
    <span :class="['iconfont icon-star', {active: starNum > 2}]"></span>
    <span :class="['iconfont icon-star', {active: starNum > 3}]"></span>
    <span :class="['iconfont icon-star', {active: starNum > 4}]"></span>
  </span>
</template>

<script>
export default {
  name: 'Stars',
  props: {
    starNum: Number
  }
}
</script>

<style lang="scss" scoped>
@import '~styles/variables.scss';
@import '~styles/mixins.scss';

.stars-wrapper {
  color: #ccc;

  .active {
    color: $defaultBgColor;
  }
}
</style>
