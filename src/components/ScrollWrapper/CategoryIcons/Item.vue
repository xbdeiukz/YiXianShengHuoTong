<template>
  <div class="icon-item">
    <div
      class="icon"
      :style="{backgroundColor: bgColor}"
      :icon="icon"
      @click="onRouteTo(field)"
    >
      <span :class="['iconfont', icon]"></span>
    </div>
    <div class="icon-text">{{ iconText }}</div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'CategoryIconsItem',
  props: {
    field: String,
    bgColor: String,
    icon: String,
    iconText: {
      type: String,
      default() {
        return '分类'
      }
    }
  },
  methods: {
    ...mapMutations(['selectField']),
    onRouteTo(field) {
      this.selectField(field)
      this.$router.push('/list')
    }
  }
};
</script>

<style lang="scss" scoped>
@import '~styles/variables.scss';
@import '~styles/mixins.scss';

.icon-item {
  @include flex-column;
  @include vh-center;

  width: 20%;
  padding: .4rem 0;

  .icon {
    @include vh-center;
    width: .8rem;
    height: .8rem;
    border-radius: 50%;

    .iconfont {
      color: #fff;
      font-size: .52rem;
    }
  }

  .icon-text {
    font-size: .28rem;
    text-align: center;
    margin-top: .2rem;
  }
}

</style>
