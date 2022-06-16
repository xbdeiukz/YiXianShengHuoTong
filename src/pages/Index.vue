<template>
  <div>
    <home-header></home-header>
    <home-scroll-wrapper></home-scroll-wrapper>
  </div>
</template>

<script>
import HomeHeader from 'components/Header/Home.vue'
import HomeScrollWrapper from 'components/ScrollWrapper/Home.vue'

export default {
  name: 'Index',
  components: {
    HomeHeader,
    HomeScrollWrapper
  }
}
</script>

<style>

</style>
