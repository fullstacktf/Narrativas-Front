<template>
  <div class="container bg-white max-w-full flex justify-center">
    <div
      class="start md:text-left w-full md:w-1/4 h-screen flex flex-col items-center justify-center md:items-end"
    >
      <div class="w-7/12 lg:w-10/12 flex flex-col items-center md:items-start">
        <h1 class="title text-6xl text-shadow text-secondary pb-2">
          404 <span class="text-5xl">ERROR</span>
        </h1>
        <div class="flex flex-col">
          <h3 class="font-bold text-3xl text-secondary-dark font-bold">
            Page not found!!!
          </h3>
        </div>
      </div>
    </div>
    <div v-show="!isMobile" class="lg:w-6/12 2xl:w-7/12 flex items-center justify-center">
      <img
        class="h-screen w-screen py-24"
        src="@/assets/img/pageNotFound.jpg"
        alt="Imagine"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "PageNotFound",
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

<style scoped>
.bg-img {
  background-image: url("../assets/img/pageNotFoundMobile.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
