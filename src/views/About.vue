<template>
  <div>
    <HeroAbout />
    <Team />
    <Modal />
  </div>
</template>

<script>
import HeroAbout from "@/components/Hero/HeroAbout.vue";
import Team from "@/components/PersonCard/Team.vue";
import Modal from "@/components/Modal/Modal.vue";

export default {
  name: "About",
  components: {
    HeroAbout,
    Team,
    Modal,
  },
};
</script>
