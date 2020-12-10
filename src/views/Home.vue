<template>
  <div class="bg-gray-100">
    <Hero/>
    <InformationBlock/>
  </div>
</template>

<script>
import Hero from "@/components/Hero/Hero.vue";
import InformationBlock from "@/components/InformationBlock/InformationBlock.vue";

export default {
  name: 'Home',
  components: {
    Hero,
    InformationBlock
  }
}
</script>

