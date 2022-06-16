<template>
  <div class="name-bd">
    <span class="iconfont icon-name"></span>
    <span class="name-text">{{ name }}</span>
  </div>
</template>

<script>
export default {
  name: "DetailName",
  props: {
    name: {
      type: String,
      default() {
        return "名称加载中";
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.name-bd {
  display: flex;
  height: 0.88rem;
  padding: 0.06rem 0.3rem 0;
  background: #fff;
  border-bottom: 1px solid #ddd;
  line-height: 0.78rem;
  box-sizing: border-box;

  .icon-name {
    font-size: 0.36rem;
    color: #999;
  }

  .name-text {
    font-size: 0.28rem;
    margin-left: 0.2rem;
  }
}
</style>
