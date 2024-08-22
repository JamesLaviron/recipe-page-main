<template>
  <component :is="isOrdered ? 'ol' : 'ul'" class="card__list">
    <li
      v-for="(item, index) in items"
      :key="index"
      :class="['card__list-item', item.className]"
    >
      <div class="card__list-content" v-html="item.content"></div>
    </li>
  </component>
</template>

<script>
export default {
  name: "ListComponent",
  props: {
    items: Array,
    isOrdered: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped lang="scss">
.card__list {
  color: $color-stone-600;
  margin-left: $spacing-100;
  @include text-preset-4;
}

.card__list-item {
  list-style-position: outside;
  margin-left: $spacing-200;

  &--instruction::marker {
    @include text-preset-4--bold;
  }
}

.card__list-content {
  margin-left: $spacing-200;
}

.card__list-item + .card__list-item {
  margin-top: $spacing-100;
}
</style>
