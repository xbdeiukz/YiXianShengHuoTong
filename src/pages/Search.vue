<template>
  <div class="container">
    <common-header :title="title"></common-header>
    <search-input @onsearch="onSearch"></search-input>
    <search-scroll-wrapper :data="searchData"></search-scroll-wrapper>
  </div>
</template>

<script>
import CommonHeader from 'components/Header/Common'
import SearchInput from 'components/SearchInput/Index'
import SearchScrollWrapper from 'components/ScrollWrapper/Search'

export default {
  name: 'Search',
  components: {
    CommonHeader,
    SearchInput,
    SearchScrollWrapper
  },
  data() {
    return {
      title: '商家搜索',
      searchData: {}
    }
  },
  methods: {
    onSearch(res) {
      if (res && res.status == 0) {
        this.searchData = res.data.data
        console.log('searchData', this.searchData)
      } else {
        this.searchData = res
      }
    }
  }
}
</script>

<style>

</style>
