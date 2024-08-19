<template>
  <main>
    <article class="card">
      <img
        src="./assets/images/omelette.jpeg"
        alt="Omelette"
        width="800"
        height="533"
        class="card__image"
      />
      <div class="card__content">
        <header class="card__header">
          <h1 class="card__title">Simple Omelette Recipe</h1>
          <p class="card__description">
            An easy and quick dish, perfect for any meal. This classic omelette
            combines beaten eggs cooked to perfection, optionally filled with
            your choice of cheese, vegetables, or meats.
          </p>
        </header>
        <section class="card__section card__section--preparation-time">
          <h2 class="card__section-title card__section-title--preparation-time">
            Preparation time
          </h2>
          <ul class="card__list">
            <li class="card__list-item card__list-item--total-time">
              <strong class="card__strong">Total:</strong> Approximately 10
              minutes
            </li>
            <li class="card__list-item card__list-item--preparation-time">
              <strong class="card__strong">Preparation:</strong> 5 minutes
            </li>
            <li class="card__list-item card__list-item--cooking-time">
              <strong class="card__strong">Cooking:</strong> 5 minutes
            </li>
          </ul>
        </section>
        <section class="card__section card__section--ingredients">
          <h2 class="card__section-title">Ingredients</h2>
          <ul class="card__list">
            <li class="card__list-item card__list-item--ingredient">
              2-3 large eggs
            </li>
            <li class="card__list-item card__list-item--ingredient">
              Salt, to taste
            </li>
            <li class="card__list-item card__list-item--ingredient">
              Pepper, to taste
            </li>
            <li class="card__list-item card__list-item--ingredient">
              1 tablespoon of butter or oil
            </li>
            <li class="card__list-item card__list-item--ingredient">
              Optional fillings: cheese, diced vegetables, cooked meats, herbs
            </li>
          </ul>
        </section>
        <hr class="card__divider" />
        <section class="card__section card__section--instructions">
          <h2 class="card__section-title">Instructions</h2>
          <ol class="card__list card__list--ordered">
            <li class="card__list-item card__list-item--instruction">
              <strong class="card__strong-instruction">Beat the eggs: </strong>
              In a bowl, beat the eggs with a pinch of salt and pepper until
              they are well mixed. You can add a tablespoon of water or milk for
              a fluffier texture.
            </li>
            <li class="card__list-item card__list-item--instruction">
              <strong class="card__strong-instruction">Heat the pan:</strong>
              Place a non-stick frying pan over medium heat and add butter or
              oil.
            </li>
            <li class="card__list-item card__list-item--instruction">
              <strong class="card__strong-instruction"
                >Cook the omelette:
              </strong>
              Once the butter is melted and bubbling, pour in the eggs. Tilt the
              pan to ensure the eggs evenly coat the surface.
            </li>
            <li class="card__list-item card__list-item--instruction">
              <strong class="card__strong-instruction"
                >Add fillings (optional):
              </strong>
              When the eggs begin to set at the edges but are still slightly
              runny in the middle, sprinkle your chosen fillings over one half
              of the omelette.
            </li>
            <li class="card__list-item card__list-item--instruction">
              <strong class="card__strong-instruction">Fold and serve:</strong>
              As the omelette continues to cook, carefully lift one edge and
              fold it over the fillings. Let it cook for another minute, then
              slide it onto a plate.
            </li>
            <li class="card__list-item card__list-item--instruction">
              <strong class="card__strong-instruction">Enjoy:</strong> Serve
              hot, with additional salt and pepper if needed.
            </li>
          </ol>
        </section>
        <hr class="card__divider" />
        <section class="card__section card__section--nutrition">
          <h2 class="card__section-title">Nutrition</h2>
          <p class="card__description">
            The table below shows nutritional values per serving without the
            additional fillings.
          </p>
          <div class="card__table">
            <div class="card__table-item">
              <div class="card__table-header">Calories</div>
              <div class="card__table-data">277kcal</div>
            </div>
            <hr class="card__divider" />
            <div class="card__table-item">
              <div class="card__table-header">Carbs</div>
              <div class="card__table-data">0g</div>
            </div>
            <hr class="card__divider" />
            <div class="card__table-item">
              <div class="card__table-header">Protein</div>
              <div class="card__table-data">20g</div>
            </div>
            <hr class="card__divider" />
            <div class="card__table-item">
              <div class="card__table-header">Fat</div>
              <div class="card__table-data">22g</div>
            </div>
          </div>
        </section>
      </div>
    </article>
  </main>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style lang="scss">
@import "./assets/styles/typo.scss";
@import "./assets/styles/base.scss";
@import "./assets/styles/main.scss";
</style>
