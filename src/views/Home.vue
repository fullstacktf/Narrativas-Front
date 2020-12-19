<template>
  <div v-if="isConnected">
    <Slider />
    <GridCards title="STORIES" path="/story-creation/" viewAllPath="/stories/" />
    <LateralSlide image="parallaxHome" />
    <GridCards
      title="CHARACTERS"
      path="/character-creation/"
      viewAllPath="/characters/"
    />
    <Modal />
  </div>

  <div v-else>
    <Hero />
    <InformationBlock />
    <LateralSlide image="parallaxInicio" />
    <StoryGrid title="Explore some stories" />
    <Modal />
  </div>
</template>

<script>
import Hero from "@/components/Hero/Hero.vue";
import InformationBlock from "@/components/InformationBlock/InformationBlock.vue";
import LateralSlide from "@/components/Slider/LateralSlide.vue";
import StoryGrid from "@/components/ImagesGrid/StoryGrid.vue";
import Slider from "@/components/Slider/Slider.vue";
import GridCards from "@/components/GridCards/GridCards.vue";
import Modal from "@/components/Modal/Modal.vue";
import EventBus from "@/event-bus";
import { getCookie, setCookie, deleteCookie } from "@/utils/utils";
import Vue from "vue";

export default {
  name: "Home",
  components: {
    Hero,
    InformationBlock,
    LateralSlide,
    StoryGrid,
    Slider,
    GridCards,
    LateralSlide,
    Modal,
  },
  data() {
    return {
      isSignedIn: false,
    };
  },
  computed: {
    isConnected() {
      return this.isSignedIn;
    },
  },
  beforeMount() {
    let cookie = getCookie("token");

    if (cookie) {
      this.isSignedIn = true;
    }
  },
  mounted() {
    EventBus.$on("SIGNED_IN", () => {
      this.isSignedIn = true;
    });

    EventBus.$on("DISCONNECT", () => {
      this.isSignedIn = false;
    });
  },
};
</script>
