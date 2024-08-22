<template>
  <div class="card__image-container">
    <img
      :src="src"
      :alt="alt"
      :width="width"
      :height="height"
      :class="className"
    />
  </div>
</template>

<script>
// import "../assets/styles/_variables.scss";

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

<style scoped lang="scss">
.card__image-container {
  max-height: 30rem;
}
.card__image {
  height: 100%;
  width: 100%;
  border-radius: 2.4rem;
}

@media (max-width: $breakpoint-mobile) {
  .card__image {
    border-radius: unset;
  }
}
</style>
