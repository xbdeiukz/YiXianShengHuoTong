<template>
  <div class="list-title">
    <p>{{ title }}</p>
  </div>
</template>

<script>
export default {
  name: 'ListTitle',
  props: {
    title: {
      type: String,
      default() {
        return '一线生活通'
      }
    }
  }
}

</script>

<style lang="scss" scoped>
.list-title {
  display: flex;
  align-items: center;
  height: 1rem;
  margin-top: .2rem;
  padding-left: .3rem;
  border-bottom: solid 1px #ddd;
  background-color: #fff;
  box-sizing: border-box;

  p {
    font-size: .36rem;
    color: #000;
  }
}
</style>
