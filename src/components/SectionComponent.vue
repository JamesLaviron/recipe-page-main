<template>
  <section :class="['card__section', className]">
    <h2 :class="['card__section-title', titleClass]">{{ title }}</h2>
    <slot></slot>
  </section>
</template>

<script>
export default {
  name: "SectionComponent",
  props: {
    title: String,
    className: String,
    titleClass: String,
  },
};
</script>

<style scoped lang="scss">
.card__section {
  display: grid;
  gap: $spacing-300;

  &--preparation-time {
    padding: $spacing-300;
    gap: $spacing-200;
    border-radius: $spacing-150;
    background-color: $color-rose-50;
  }
}

.card__section-title {
  color: $color-brown-800;
  @include text-preset-2;

  &--preparation-time {
    color: $color-rose-800;
    @include text-preset-3;
  }
}
</style>
