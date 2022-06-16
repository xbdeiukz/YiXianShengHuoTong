<template>
  <div class="current-city">
    <span>当前城市：</span>
    <router-link :to="{name: path}">
      <span class="iconfont icon-positioning"></span>
      <span class="city">{{ this.cityName }}</span>
    </router-link>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: "CurrentCity",
  data() {
    return {
      path: 'Index'
    }
  },
  computed: {
    ...mapState(['cityName'])
  }
}
</script>

<style lang="scss" scoped>
@import '~styles/variables.scss';
@import '~styles/mixins.scss';

.current-city {
  @include flex-row;
  align-items: center;
  height: 1rem;
  padding-left: .3rem;
  background-color: #fff;
  border-bottom: solid 1px #ddd;
  font-size: .32rem;

  .iconfont {
    vertical-align: .001rem;
    color: $defaultBgColor;
    font-size: .32rem;
  }

  .city {
    line-height: 1rem;
  }
}

</style>
