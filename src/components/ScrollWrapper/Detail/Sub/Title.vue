<template>
  <div class="title-bd">
    <h1>
      <span :class="['iconfont', iconClass]"></span>
      <span class="title-text">{{ title }}</span>
    </h1>
  </div>
</template>

<script>
export default {
  name: 'DetailTitle',
  props: {
    iconClass: String,
    title: String
  }
}
</script>

<style lang="scss" scoped>
@import '~styles/variables.scss';

.title-bd {
  display: flex;
  align-items: center;
  height: .88rem;
  padding: 0 .3rem;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
  box-sizing: border-box;

  h1 {
    color: $defaultGreen;

    .iconfont {
      margin-right: .2rem;
      font-size: .36rem;
    }

    .title-text {
      font-size: .32rem;
    }
  }
}
</style>
