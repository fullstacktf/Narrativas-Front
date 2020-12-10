<template>
  <div>
    <Hero/>
    <InformationBlock/>
    <LateralSlide image="parallaxInicio"/>
  </div>
</template>

<script>
import Hero from "@/components/Hero/Hero.vue";
import InformationBlock from "@/components/InformationBlock/InformationBlock.vue";
import LateralSlide from "@/components/Slider/LateralSlide.vue";

export default {
  name: 'Home',
  components: {
    Hero,
    InformationBlock,
    LateralSlide
  }
}
</script>

