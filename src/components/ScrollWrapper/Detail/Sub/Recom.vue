<template>
  <div class="recom-bd">
    <detail-title
      title="推荐菜品"
      iconClass="icon-recom"
    ></detail-title>
    <div class="recom-content">{{ recom }}</div>
  </div>
</template>

<script>
import DetailTitle from './Title'

export default {
  name: 'DetailRecom',
  components: {
    DetailTitle
  },
  props: {
    recom: String
  }
}
</script>

<style lang="scss" scoped>
@import '~styles/mixins.scss';

.recom-bd {
  @include flex-column;
  margin-top: .2rem;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
  box-sizing: border-box;

  .recom-content {
    padding: .4rem .3rem;
    font-size: .28rem;
    line-height: .36rem;
    box-sizing: border-box;
    text-indent: 2em;
  }
}
</style>
