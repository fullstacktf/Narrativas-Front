<template>
  <div>
    <Slider />
    <GridCardsStories title="STORIES" :total="5" />
    <LateralSlide image="parallaxHome" />
    <GridCardsCharacters title="CHARACTERS" :total="21" />
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
