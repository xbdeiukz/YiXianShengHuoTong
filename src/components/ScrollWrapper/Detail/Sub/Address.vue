<template>
  <div class="address-bd">
    <span class="iconfont icon-positioning"></span>
    <span class="address-text">{{ address }}</span>
  </div>
</template>

<script>
export default {
  name: "DetailAddress",
  props: {
    address: {
      type: String,
      default() {
        return "加载中...";
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.address-bd {
  display: flex;
  align-items: center;
  min-height: 0.88rem;
  padding: 0.2rem 0.3rem;
  border-bottom: 1px solid #ddd;
  background-color: #fff;
  box-sizing: border-box;

  .icon-positioning {
    font-size: 0.36rem;
    margin-right: 0.2rem;
    color: #999;
  }

  .address-text {
    font-size: 0.28rem;
    line-height: 0.36rem;
  }
}
</style>
