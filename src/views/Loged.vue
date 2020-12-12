<template>
  <div>
    <Slider />
    <GridCardsStories title="STORIES" />
    <LateralSlide image="parallaxHome" />
    <GridCardsCharacters title="CHARACTERS" />
  </div>
</template>

<script>
import Slider from "@/components/Slider/Slider.vue";
import GridCardsStories from "@/components/GridCards/GridCards.vue";
import LateralSlide from "@/components/Slider/LateralSlide.vue";
import GridCardsCharacters from "@/components/GridCards/GridCards.vue";
import Vue from "vue";

export default {
  name: "Loged",
  components: {
    Slider,
    GridCardsStories,
    LateralSlide,
    GridCardsCharacters,
  },
};
</script>
