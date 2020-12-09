<template>
  <div role="hero" class="container flex text-white h-screen max-w-full">
    <div v-show="!isMobile" class="heroImg w-3/5">
      <img src="@/assets/img/Hero.jpg" alt="Imagine" />
    </div>
    <div
      class="start md:text-left md:bg-tertiary p-6 md:w-2/5 pl-10 flex flex-col justify-around"
    >
      <div class="top">
        <div class="title text-5xl md:text-6xl text-shadow">
          <h1>CREATE YOUR OWN UNIQUE STORY</h1>
        </div>
        <div class="startBtn mt-10">
          <button
            class="rounded-full py-3 px-6 bg-primary hover:bg-primary-dark md:bg-secondary md:hover:bg-secondary-dark text-xs font-bold"
          >
            Get Started
          </button>
        </div>
      </div>
      <div class="bottom mt-40" v-show="!isMobile">
        <p role="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nibh
          turpis, rhoncus nec dui eget, interdum semper ante. Donec venenatis,
          massa eget vestibulum feugiat, augue nibh ultrices tellus, facilisis
          est lorem et ipsum.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Hero",
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
      })
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
  },
};
</script>

<style>
.clip-path {
  clip-path: polygon(0 0, 100% 0, 100% 95%, 0% 100%);
}

.bg-img {
  background-image: url("../../assets/img/heroMobile.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}

.text-shadow {
  text-shadow: 2px 2px 8px black;
}
</style>

