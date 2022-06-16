<template>
  <div class="search-input">
    <div class="input-wrapper">
      <span class="iconfont icon-header-search"></span>
      <input
       type="text"
       class="input"
       :placeholder="placeholder"
       v-model="keyword"
       @input="onSearch"
      >
    </div>
  </div>
</template>

<script>
import tools from 'utils/tools'
import { SearchModel } from 'models/Search'
import { mapState } from 'vuex'

export default {
  name: 'SearchInput',
  data() {
    return {
      placeholder: '美食 / 景点 / 酒店 / 按摩 / KTV',
      keyword: ''
    }
  },
  computed: {
    ...mapState(['cityId'])
  },
  methods: {
    onSearch: tools.throttle(function() {
      let keyword = tools.trimSpace(this.keyword)

      if (keyword.length < 1) {
        this.$emit('onsearch', {})
        return
      }

      const searchModel = new SearchModel()
      searchModel.getSearchData(keyword, this.cityId).then(res => {
        this.$emit('onsearch', res)
      })
    }, 1000)
  }
}
</script>

<style lang="scss" scoped>
@import '~styles/mixins.scss';

.search-input {
  height: .88rem;
  padding: .12rem .3rem;
  background-color: #fff;
  box-sizing: border-box;

  .input-wrapper {
    @include flex-row;
    @include vh-center;
    position: relative;
    width: 100%;
    height: 100%;

    .icon-header-search {
      position: absolute;
      top: .18rem;
      left: .18rem;
      font-size: .32rem;
    }

    .input {
      width: 100%;
      height: 100%;
      text-indent: .64rem;
      border: 1px solid #ddd;
      border-radius: .06rem;
      box-sizing: border-box;
      font-size: .14rem;
    }
  }
}
</style>
