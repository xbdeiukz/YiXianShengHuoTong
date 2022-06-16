<template>
  <div class="service-bd">
    <detail-title title="商家服务" iconClass="icon-service"></detail-title>
    <div class="service-content">
      <p>停车场：{{ service && service.parking ? '有' : '无' }}</p>
      <p>WIFI：{{ service && service.wifi ? '有' : '无' }}</p>
    </div>
  </div>
</template>

<script>
import DetailTitle from './Title'

export default {
  name: 'DetailService',
  components: {
    DetailTitle
  },
  props: {
    service: {
      type: Object,
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~styles/mixins.scss';

.service-bd {
  @include flex-column;
  margin-top: .2rem;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
  box-sizing: border-box;

  .service-content {
    padding: .2rem .3rem;
    font-size: .28rem;
    line-height: .36rem;
    box-sizing: border-box;
  }
}
</style>
