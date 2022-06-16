<template>
  <div class="opening-time-bd">
    <span class="iconfont icon-datetime"></span>
    <span class="opening-time-text">{{ openingTime }}</span>
  </div>
</template>

<script>
export default {
  name: 'DetailOpeningTime',
  props: {
    openingTime: {
      type: String,
      default() {
        return '加载中...'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.opening-time-bd {
  display: flex;
  align-items: center;
  height: .88rem;
  padding: .2rem .3rem;
  border-bottom: 1px solid #ddd;
  background-color: #fff;
  box-sizing: border-box;

  .icon-datetime {
    margin-right: .2rem;
    font-size: .36rem;
    color: #999;
  }
}
</style>
