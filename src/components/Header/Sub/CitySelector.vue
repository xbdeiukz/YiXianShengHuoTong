<template>
  <div class="city">
    <router-link to="City">
      <span class="city-name">{{ cityName }}</span>
      <span class="iconfont icon-header-arrow"></span>
    </router-link>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'CitySelector',
  computed: {
    ...mapState(['cityName']),
  }
}
</script>

<style lang="scss" scoped>
@import '~styles/variables.scss';
@import '~styles/mixins.scss';

.city {
  width: 1.2rem;
  height: $headerHeight;

  a {
    @include flex-row;
    @include vh-center;

    width: 100%;
    height: $headerHeight;

    .city-name {
      font-size: .32rem;
      font-weight: bold;
    }

    .iconfont {
      font-size: .16rem;
      margin-left: 0.06rem;
    }
  }
}

</style>
