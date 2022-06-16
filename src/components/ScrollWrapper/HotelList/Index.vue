<template>
  <div class="list-wrapper">
    <hotel-list-item
     v-for="item of hotelData"
     :data="item"
     :key="item.id"
    ></hotel-list-item>
  </div>
</template>

<script>
import HotelListItem from "./Item";

export default {
  name: "HotelList",
  components: {
    HotelListItem,
  },
  props: {
    hotelData: Array
  }
};
</script>

<style lang="scss" scoped>
</style>
