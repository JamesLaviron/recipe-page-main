<template>
  <main>
    <article class="card">
      <ImageComponent
        src="./images/omelette.jpeg"
        alt="Omelette"
        width="800"
        height="533"
        className="card__image"
      />
      <div class="card__content">
        <HeaderComponent
          title="Simple Omelette Recipe"
          description="An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats."
        />
        <SectionComponent
          title="Preparation time"
          className="card__section--preparation-time"
          titleClass="card__section-title--preparation-time"
        >
          <ListComponent :items="preparationTimeItems" />
        </SectionComponent>
        <SectionComponent
          title="Ingredients"
          className="card__section--ingredients"
        >
          <ListComponent :items="ingredientsItems" />
        </SectionComponent>
        <hr class="card__divider" />
        <SectionComponent
          title="Instructions"
          className="card__section--instructions"
        >
          <ListComponent :items="instructionsItems" :isOrdered="true" />
        </SectionComponent>
        <hr class="card__divider" />
        <SectionComponent
          title="Nutrition"
          className="card__section--nutrition"
        >
          <p class="card__description">
            The table below shows nutritional values per serving without the
            additional fillings.
          </p>
          <TableComponent :rows="nutritionRows" />
        </SectionComponent>
      </div>
    </article>
  </main>
</template>

<script>
import "./assets/styles/base.scss";
import ImageComponent from "@/components/ImageComponent.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
import ListComponent from "@/components/ListComponent.vue";
import SectionComponent from "@/components/SectionComponent.vue";
import TableComponent from "@/components/TableComponent.vue";

export default {
  name: "App",
  components: {
    ImageComponent,
    HeaderComponent,
    ListComponent,
    SectionComponent,
    TableComponent,
  },
  data() {
    return {
      preparationTimeItems: [
        {
          className: "card__list-item--total-time",
          content:
            '<strong class="card__strong">Total:</strong> Approximately 10 minutes',
        },
        {
          className: "card__list-item--preparation-time",
          content:
            '<strong class="card__strong">Preparation:</strong> 5 minutes',
        },
        {
          className: "card__list-item--cooking-time",
          content: '<strong class="card__strong">Cooking:</strong> 5 minutes',
        },
      ],
      ingredientsItems: [
        { className: "card__list-item--ingredient", content: "2-3 large eggs" },
        { className: "card__list-item--ingredient", content: "Salt, to taste" },
        {
          className: "card__list-item--ingredient",
          content: "Pepper, to taste",
        },
        {
          className: "card__list-item--ingredient",
          content: "1 tablespoon of butter or oil",
        },
        {
          className: "card__list-item--ingredient",
          content:
            "Optional fillings: cheese, diced vegetables, cooked meats, herbs",
        },
      ],
      instructionsItems: [
        {
          className: "card__list-item--instruction",
          content:
            '<strong class="card__strong-instruction">Beat the eggs:</strong> In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.',
        },
        {
          className: "card__list-item--instruction",
          content:
            '<strong class="card__strong-instruction">Heat the pan:</strong> Place a non-stick frying pan over medium heat and add butter or oil.',
        },
        {
          className: "card__list-item--instruction",
          content:
            '<strong class="card__strong-instruction">Cook the omelette:</strong> Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.',
        },
        {
          className: "card__list-item--instruction",
          content:
            '<strong class="card__strong-instruction">Add fillings (optional):</strong> When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.',
        },
        {
          className: "card__list-item--instruction",
          content:
            '<strong class="card__strong-instruction">Fold and serve:</strong> As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.',
        },
        {
          className: "card__list-item--instruction",
          content:
            '<strong class="card__strong-instruction">Enjoy:</strong> Serve hot, with additional salt and pepper if needed.',
        },
      ],
      nutritionRows: [
        { header: "Calories", data: "277kcal" },
        { header: "Carbs", data: "0g" },
        { header: "Protein", data: "20g" },
        { header: "Fat", data: "22g" },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
#app {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
}

main {
  padding: $spacing-1600 $spacing-600;
  background-color: $color-stone-100;
  width: 100%;
  display: flex;
  justify-content: center;
}

.card {
  display: grid;
  max-width: 73.6rem;
  gap: $spacing-500;
  padding: $spacing-500;
  border-radius: 2.4rem;
  background-color: white;
}

.card__content {
  display: grid;
  text-align: left;
  gap: $spacing-400;
}

.card__divider {
  border-top: 1px solid $color-stone-150;
}

.card__description {
  color: $color-stone-600;
  @include text-preset-4;
}

// Handle mobile
@media (max-width: $breakpoint-mobile) {
  main {
    padding: 0;
  }
  .card {
    padding: 0;
    gap: 0;
  }
  .card__content {
    padding: $spacing-500 $spacing-400;
  }
}
</style>
