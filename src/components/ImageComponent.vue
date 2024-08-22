<template>
  <img
    :src="src"
    :alt="alt"
    :width="width"
    :height="height"
    :class="className"
  />
</template>

<script>
export default {
  name: "ImageComponent",
  props: {
    src: String,
    alt: String,
    width: Number,
    height: Number,
    className: String,
  },
};
</script>

<style scoped>
.card__image {
  max-height: 30rem;
  width: 100%;
  border-radius: 2.4rem;
}
</style>
