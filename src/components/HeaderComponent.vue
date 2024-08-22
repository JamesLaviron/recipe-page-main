<template>
  <header class="card__header">
    <h1 class="card__title">{{ title }}</h1>
    <p class="card__description">{{ description }}</p>
  </header>
</template>

<script>
export default {
  name: "HeaderComponent",
  props: {
    title: String,
    description: String,
  },
};
</script>

<style scoped lang="scss">
.card__header {
  display: grid;
  justify-content: left;
  gap: $spacing-300;
}

.card__title {
  color: $color-stone-900;
  @include text-preset-1;
}

.card__description {
  color: $color-stone-600;
  @include text-preset-4;
}
</style>
