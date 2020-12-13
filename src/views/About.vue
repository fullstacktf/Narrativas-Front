<template>
  <div>
    <HeroAboutUs />
    <Team />
    <Modal />
  </div>
</template>

<script>
import HeroAboutUs from "@/components/Hero/HeroAboutUs.vue";
import Team from "@/components/PersonCard/Team.vue";
import Modal from "@/components/Modal/Modal.vue";

export default {
  name: "About",
  components: {
    HeroAboutUs,
    Team,
    Modal,
  },
};
</script>
