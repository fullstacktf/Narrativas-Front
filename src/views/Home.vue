<template>
  <div v-if="isConnected">
    <Slider />
    <GridCardsStories title="STORIES" :total="18" />
    <LateralSlide image="parallaxHome" />
    <GridCardsCharacters title="CHARACTERS" :total="5" />
  </div>

  <div v-else>
    <Hero />
    <InformationBlock />
    <LateralSlide image="parallaxInicio" />
    <StoryGrid title="Explore some stories" />
  </div>
</template>

<script>
import Hero from "@/components/Hero/Hero.vue";
import InformationBlock from "@/components/InformationBlock/InformationBlock.vue";
import LateralSlide from "@/components/Slider/LateralSlide.vue";
import StoryGrid from "@/components/ImagesGrid/StoryGrid.vue";
import Slider from "@/components/Slider/Slider.vue";
import GridCardsStories from "@/components/GridCards/GridCards.vue";
import GridCardsCharacters from "@/components/GridCards/GridCards.vue";
import SignInSignUp from "@/components/SignInSignUp/SignInSignUp.vue";
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
    GridCardsStories,
    LateralSlide,
    GridCardsCharacters,
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
  methods: {
    removeSignIn() {
      this.instance.$destroy();
      this.$el.removeChild(this.instance.$el);
      this.instance = null;
    },
  },
  beforeMount() {
    let cookie = getCookie("token");
    if (cookie) {
      this.isSignedIn = true;
    }
  },
  mounted() {
    EventBus.$on("SIGN_POPUP", (payload) => {
      if (!this.instance) {
        let signComponent = Vue.extend(SignInSignUp);
        this.instance = new signComponent({
          propsData: { type: payload },
        });

        this.instance.$mount();
        this.instance.$el.style.position = `fixed`;
        this.instance.$el.style.left = `50%`;
        this.instance.$el.style.top = `50%`;
        this.instance.$el.style.transform = `translate(-50%, -50%)`;

        this.$el.appendChild(this.instance.$el);
      }
    });

    EventBus.$on("REMOVE_SIGN_POPUP", () => {
      this.removeSignIn();
    });

    EventBus.$on("DELETE_SIGN_POPUP", () => {
      this.removeSignIn();
    });

    EventBus.$on("SIGNED_IN", () => {
      this.removeSignIn();
      this.isSignedIn = true;
    });

    EventBus.$on("DISCONNECT", () => {
      this.removeSignIn();
      deleteCookie("token");
      this.isSignedIn = false;
    });
  },
};
</script>
