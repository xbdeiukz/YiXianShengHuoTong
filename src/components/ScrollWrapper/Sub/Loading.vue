<template>
  <div class="loading" v-show="loadingShow">
    <img class="loading-img" src="~@/assets/images/loading.gif" alt="loading">
  </div>
</template>

<script>
export default {
  name: 'Loadin',
  props: {
    loadingShow: {
      type: Boolean,
      default() {
        return true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~styles/mixins.scss';

.loading {
  @include vh-center;
  height: 6rem;

  .loading-img {
    width: .8rem;
    height: .8rem;
  }
}
</style>
