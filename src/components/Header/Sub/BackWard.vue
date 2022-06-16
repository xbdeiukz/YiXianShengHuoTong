<template>
  <div class="back-ward" @click="onRouteBack">
    <span class="iconfont icon-header-arrow-left"></span>
  </div>
</template>

<script>
export default {
  name: "BackWard",
  methods: {
    onRouteBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~styles/variables.scss";
@import "~styles/mixins.scss";

.back-ward {
  position: absolute;
  top: 0;
  left: 12px;

  @include flex-row;
  @include vh-center;

  height: $headerHeight;

  .iconfont {
    font-size: 0.4rem;
  }
}
</style>
