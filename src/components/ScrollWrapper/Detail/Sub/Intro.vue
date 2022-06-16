<template>
  <div class="intro-bd">
    <detail-title title="详细介绍" iconClass="icon-intro"></detail-title>
    <div class="intro-content">{{ intro }}</div>
  </div>
</template>

<script>
import DetailTitle from './Title'

export default {
  name: 'DetailIntro',
  components: {
    DetailTitle
  },
  props: {
    intro: {
      type: String,
      default() {
        return '加载中...'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~styles/mixins.scss';

.intro-bd {
  @include flex-column;
  margin-top: .2rem;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
  box-sizing: border-box;

  .intro-content {
    padding: .2rem .3rem;
    font-size: .28rem;
    line-height: .36rem;
    text-indent: 2em;
    box-sizing: border-box;
  }
}
</style>
