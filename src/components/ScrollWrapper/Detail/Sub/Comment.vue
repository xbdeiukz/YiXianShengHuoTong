<template>
  <div class="comment-bd">
    <detail-title title="评论关键词" iconClass="icon-haoping"></detail-title>
    <div class="comment-content">
      <span
        v-for="(kw, index) of commentKeywords"
        :key="index"
        class="comment-keyword"
        >{{ kw }}</span
      >
    </div>
  </div>
</template>

<script>
import DetailTitle from "./Title";

export default {
  name: "DetailComment",
  components: {
    DetailTitle,
  },
  props: {
    commentKeywords: Array,
  },
};
</script>

<style lang="scss" scoped>
@import "~styles/variables.scss";
@import "~styles/mixins.scss";

.comment-bd {
  @include flex-column;
  margin-top: 0.2rem;
  border-block: 1px solid #ddd;
  background-color: #fff;
  box-sizing: border-box;

  .comment-content {
    @include flex-row;
    flex-wrap: wrap;
    padding: 0.2rem 0.3rem;
    background-color: #fff;
    font-size: 0.28rem;
    line-height: 0.36rem;
    box-sizing: border-box;

    .comment-keyword {
      @include vh-center;
      height: .5rem;
      padding: 0 .1rem;
      margin: 0 .1rem .1rem 0;
      border: 1px solid $defaultGreen;
      border-radius: .06rem;
      font-size: 0.28rem;
      color: $defaultGreen;
    }
  }
}
</style>
