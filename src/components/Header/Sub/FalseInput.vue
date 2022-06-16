<template>
  <div class="false-input">
    <router-link to="Search">
      <div class="input">
        <p class="placeholder">
          <span class="iconfont icon-header-search"></span>
          <span class="placeholder-text">{{ this.placeholderText }}</span>
        </p>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'FalseInput',
  data() {
    return {
      placeholderText: '美食 / 景点 / 酒店 / 按摩 / KTV'
    }
  }

}
</script>

<style lang="scss" scoped>
@import "~styles/variables.scss";
@import "~styles/mixins.scss";

.false-input {
  flex: 1;
  box-sizing: border-box;
  padding: .12rem .2rem .12rem 0;

  .input {
    @include flex-row;
    @include vh-center;

    width: 100%;
    height: 100%;
    border-radius: 5px;
    background-color: #fff;

    .placeholder {
      font-size: .28rem;
      color: #999;
    }
  }

}

</style>
