<template>
  <div>
    <HeroAboutUs />
    <Team />
  </div>
</template>

<script>
import HeroAboutUs from "@/components/Hero/HeroAboutUs.vue";
import Team from "@/components/PersonCard/Team.vue";

export default {
  name: "About",
  components: {
    HeroAboutUs,
    Team,
  },
};
</script>
