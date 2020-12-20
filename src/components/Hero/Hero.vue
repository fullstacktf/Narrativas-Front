<template>
  <div role="hero" class="container flex text-white h-screen md:h-136 xl:h-screen max-w-full relative z-0">
    <div v-show="!isMobile" class="heroImg w-3/5 bg-white">
      <img src="@/assets/img/Hero.jpg" alt="Imagine" />
    </div>
    <div
      class="start w-full bg-center md:text-left md:bg-tertiary p-6 md:w-2/5 pl-10 flex flex-col justify-around"
    >
      <div class="top">
        <div class="title text-5xl md:text-3xl xl:text-6xl text-shadow">
          <h1>CREATE YOUR OWN UNIQUE STORY</h1>
        </div>
        <div class="startBtn mt-10">
          <button
            class="rounded-full py-3 px-6 bg-primary hover:bg-primary-dark md:bg-secondary md:hover:bg-secondary-dark text-xs font-bold focus:outline-none"
            v-on:click="emitSignPopup(false)"
          >
            Get Started
          </button>
        </div>
      </div>
      <div class="bottom mb-20 xl:mb-6" v-show="!isMobile">
        <p role="description">
          Create non-linear stories and share them with people. With Rollify you can map your idea before making it come true.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import "../../assets/styles/index.css";
import "../../assets/styles/base.css";
import EventBus from "@/event-bus";
export default {
  name: "Hero",
  mounted() {
    this.onResize();
    EventBus.$on("REMOVE_SIGN_POPUP", () => {
      this.isSignOpened = false;
    });
  },
  data() {
    return {
      screenWidth: window.innerWidth,
    };
  },
  computed: {
    isMobile() {
      return this.screenWidth < 768;
    },
  },
  methods: {
    onResize() {
      addEventListener("resize", () => {
        this.screenWidth = window.innerWidth;
        this.addRemoveClasses();
      });
      this.addRemoveClasses();
    },
    addRemoveClasses() {
      const container = this.$el;
      if (this.screenWidth < 768) {
        container.classList.remove("clip-path");
        container.querySelector(".start").classList.add("bg-img");
        container.querySelector(".title").classList.add("text-shadow");
      } else {
        container.classList.add("clip-path");
        container.querySelector(".start").classList.remove("bg-img");
        container.querySelector(".title").classList.remove("text-shadow");
      }
    },
    emitSignPopup(isSignUp) {
      if (this.isSignOpened) {
        EventBus.$emit("DELETE_SIGN_POPUP");
      } else {
        EventBus.$emit("SIGN_POPUP", isSignUp);
      }
      this.isSignOpened = !this.isSignOpened;
    },
  },
};
</script>

<style scoped>
.bg-img {
  background-image: url("../../assets/img/heroMobile.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}

.text-shadow {
  text-shadow: 2px 2px 8px black;
}

.clip-path {
  clip-path: polygon(0 0, 100% 0, 100% 85%, 0% 100%);
}
</style>
