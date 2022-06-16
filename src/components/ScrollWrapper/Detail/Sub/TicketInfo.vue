<template>
  <div class="ticket-info-bd">
    <detail-title title="购票信息" iconClass="icon-intro"></detail-title>
    <div class="ticket-info-content">{{ ticketInfo }}</div>
  </div>
</template>

<script>
import DetailTitle from './Title'

export default {
  name: 'DetailTicketInfo',
  components: {
    DetailTitle
  },
  props: {
    ticketInfo: {
      type: String,
      default() {
        return '加载中...'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~styles/mixins.scss';

.ticket-info-bd {
  @include flex-column;
  margin-top: .2rem;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
  box-sizing: border-box;

  .ticket-info-content {
    padding: .2rem .3rem;
    font-size: .28rem;
    line-height: .36rem;
    text-indent: 2em;
    box-sizing: border-box;
  }
}
</style>
