<template>
  <div class="tip-bd">
    <span :class="['iconfont', iconClass]"></span>
    <span class="tip-text">{{ tip }}</span>
  </div>
</template>

<script>
export default {
  name: 'DetailTip',
  props: {
    iconClass: String,
    tip: String
  }
}
</script>

<style lang="scss" scoped>
.tip-bd {
  display: flex;
  align-items: center;
  height: .88rem;
  padding: .2rem .3rem;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
  box-sizing: border-box;

  .iconfont {
    margin-right: .2rem;
    font-size: .36rem;
    color: #999;
  }
}

</style>
