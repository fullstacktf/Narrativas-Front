<template>
  <div id="home" class="overflow-hidden">
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
import SignInSignUp from "@/components/SignInSignUp/SignInSignUp.vue";
import EventBus from "@/event-bus";
import Vue from "vue";

export default {
  name: "Home",
  components: {
    Hero,
    InformationBlock,
    LateralSlide,
    StoryGrid,
  },
  methods: {
    removeSignIn() {
      this.instance.$destroy();
      this.$el.removeChild(this.instance.$el);
      this.instance = null;
      // document.body.classList.remove("overflow-hidden");
    },
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
        // document.body.classList.add("overflow-hidden");
      }
    });

    EventBus.$on("REMOVE_SIGN_POPUP", () => {
      this.removeSignIn();
    });

    EventBus.$on("DELETE_SIGN_POPUP", () => {
      this.removeSignIn();
    });
  },
};
</script>
