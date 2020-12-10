<template>
  <div>
    <Hero/>
    <InformationBlock/>
    <LateralSlide image="parallaxInicio"/>
    <StoryGrid title="Explore some stories"/>
  </div>
</template>

<script>
import Hero from "@/components/Hero/Hero.vue";
import InformationBlock from "@/components/InformationBlock/InformationBlock.vue";
import LateralSlide from "@/components/Slider/LateralSlide.vue";
import StoryGrid from "@/components/ImagesGrid/StoryGrid.vue";

export default {
  name: 'Home',
  components: {
    Hero,
    InformationBlock,
    LateralSlide,
    StoryGrid,
  }
}
</script>

