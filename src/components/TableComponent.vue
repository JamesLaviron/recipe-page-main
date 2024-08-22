<template>
  <div class="card__table">
    <template v-for="(row, index) in rows" :key="index">
      <div class="card__table-item">
        <div class="card__table-header">{{ row.header }}</div>
        <div class="card__table-data">{{ row.data }}</div>
      </div>
      <hr v-if="index < rows.length - 1" class="card__divider" />
    </template>
  </div>
</template>

<script>
export default {
  name: "TableComponent",
  props: {
    rows: Array,
  },
};
</script>

<style scoped lang="scss">
.card__table {
  display: grid;
  text-align: left;
  gap: $spacing-150;
  @include text-preset-4;
}

.card__table-item {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: $spacing-200;
  padding: 0 $spacing-400;
}

.card__table-header {
  color: $color-stone-600;
  @include text-preset-4;
}

.card__table-data {
  color: $color-brown-800;
  @include text-preset-4--bold;
}

.card__divider {
  border-top: 1px solid $color-stone-150;
}
</style>
