<template>
  <div class="container bg-white text-white max-w-full flex">
    <div class="start md:text-left w-full md:w-1/4 h-screen flex flex-col items-center md:items-end justify-center">
      <h1 class="title text-5xl md:text-6xl text-shadow text-secondary">ABOUT US</h1>
      <button class="rounded-full py-3 px-6 bg-secondary hover:bg-secondary-dark text-xs font-bold md:mr-40">
        Get Started
      </button>
    </div>
    <div v-show="!isMobile" class=" md:w-7/12 flex items-center justify-center">
      <img class="h-screen w-screen py-24" src="@/assets/img/heroAboutUs.jpg" alt="Imagine" />
    </div>
  </div>
</template>

<script>
export default {
  name: "HeroAboutUs",
  mounted() {
    this.onResize();
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
        container.querySelector(".start").classList.add("bg-img");
        container.querySelector(".title").classList.add("text-shadow");
      } else {
        container.querySelector(".start").classList.remove("bg-img");
        container.querySelector(".title").classList.remove("text-shadow");
      }
    },
  },
};
</script>

<style>
.bg-img {
  background-image: url("../../assets/img/heroAboutUsMobile.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}

.text-shadow {
  text-shadow: 2px 2px 8px black;
}
</style>
