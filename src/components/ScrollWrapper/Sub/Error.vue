<template>
  <div class="error-bd" v-show="errorShow">
    <span class="iconfont icon-error"></span>
    <p class="error-text">网络走丢了</p>
  </div>
</template>

<script>
export default {
  name: "Error",
  props: {
    errorShow: {
      type: Boolean,
      default() {
        return false;
      },
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~styles/mixins.scss";

.error-bd {
  @include flex-column;
  @include vh-center;
  height: 6rem;
  color: #999;

  .iconfont {
    font-size: 1rem;
  }

  .error-text {
    font-size: 0.28rem;
    margin-top: 0.2rem;
  }
}
</style>
