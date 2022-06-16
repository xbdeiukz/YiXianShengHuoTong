<template>
  <div class="icons-wrapper">
    <category-icons-item
      v-for="item of items"
      :field="item.field"
      :icon="item.icon"
      :iconText="item.iconText"
      :bgColor="item.bgColor"
      :key="item.id"
    ></category-icons-item>
  </div>
</template>

<script>
import CategoryIconsItem from './Item'
import fieldData from 'data/fields'

export default {
  name: 'CategoryIcons',
    data() {
    return {
      items: fieldData
    };
  },
  components: {
    CategoryIconsItem
  },
};
</script>

<style lang="scss" scoped>
@import '~styles/variables.scss';
@import '~styles/mixins.scss';

.icons-wrapper {
  @include flex-row;
  flex-wrap: wrap;
  background: #fff;
  border-bottom: solid 1px #ddd;
}

</style>
