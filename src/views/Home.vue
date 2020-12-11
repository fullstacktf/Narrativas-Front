<template>
  <div>
    <Hero />
    <InformationBlock />
    <LateralSlide image="parallaxInicio" />
    <StoryGrid title="Explore some stories" />
    <StoryCharacterCard
      name="Buzz"
      title="Description"
      content="Lorem ipsum bla bla bla"
      filename="character_1"
    />
  </div>
</template>

<script>
import Hero from "@/components/Hero/Hero.vue";
import InformationBlock from "@/components/InformationBlock/InformationBlock.vue";
import LateralSlide from "@/components/Slider/LateralSlide.vue";
import StoryGrid from "@/components/ImagesGrid/StoryGrid.vue";
import StoryCharacterCard from "@/components/StoryCharacterCard/StoryCharacterCard.vue";

export default {
  name: "Home",
  components: {
    Hero,
    InformationBlock,
    LateralSlide,
    StoryGrid,
    StoryCharacterCard,
  },
};
</script>
