<template>
  <div role="slider" class="bg-white">
    <div class="leading-normal tracking-normal w-full h-screen md:h-64">
      <div
        class="h-full w-full flex"
        v-bind:class="{ 'flex-row-reverse': !this.isStorySlider }"
      >
        <div
          class="darkfilter w-screen md:w-1/2 h-full bg-cover bg-left lg:bg-center relative"
          v-bind:style="{
            backgroundImage: 'url(' + this.setBackground() + ')',
          }"
          v-bind:class="setBackgroundSide()"
        ></div>
        <div
          v-if="isMobile"
          class="flex flex-col items-center justify-center w-full h-full text-center font-title text-white absolute z-5"
        >
          <h1 class="text-3xl">CREATE YOUR</h1>
          <h1 class="text-6xl md:text-6xl">{{ this.title }}</h1>
          <p class="w-2/5">{{ this.description }}</p>
          <button
            class="bg-secondary hover:bg-secondary-dark text-white font-bold py-2 px-4 rounded-full text-xs mt-4 focus:outline-none"
          >
            <a :href="url">Get Started</a>
          </button>
        </div>
        <div v-if="!isMobile" class="w-1/2 h-full text-center font-title">
          <div class="mt-12 md:mt-8">
            <h1 class="text-xl">CREATE YOUR</h1>
            <h1 class="text-4xl md:text-6xl">{{ title }}</h1>
            <button 
              class="bg-secondary hover:bg-secondary-dark text-white font-bold py-2 px-4 rounded-full text-xl mt-4 focus:outline-none"
            >
              <a :href="url">Get Started</a>
            </button>
          </div>
        </div>
      </div>
    </div>

    <div
      class="w-full h-2 flex"
      v-bind:class="{ 'flex-row-reverse': !this.isStorySlider }"
      v-if="!isMobile"
    >
      <div class="w-1/2 h-full bg-primary inline-block cursor-pointer"></div>
      <div
        class="w-1/2 h-full bg-gray-600 inline-block cursor-pointer"
        v-on:click="isStorySlider = !isStorySlider"
      ></div>
    </div>
  </div>
</template>

<script>
import "../../assets/styles/index.css";
import "../../assets/styles/base.css";
export default {
  name: "Slider",
  mounted() {

  },
  data: function () {
    return {
      isStorySlider: true,
      screenWidth: window.innerWidth,
      character_data: "Alex puto amo aqui va la descripcion de characters",
      story_data: "Alex puto amo aqui va la descripcion amo stories",
    };
  },
  methods: {
    setBackground() {
      if (!this.isMobile) {
        return this.isStorySlider
          ? require("@/assets/img/slide_1.jpg")
          : require("@/assets/img/slide_2.jpg");
      }
      return this.isStorySlider
        ? require("@/assets/img/slide1Mobile.jpg")
        : require("@/assets/img/slide2Mobile.jpg");
    },
    setBackgroundSide() {
      return {
        "bg-right": this.isStorySlider,
        "bg-left": !this.isStorySlider,
      };
    },
  },
  computed: {
    url() {
      return this.isStorySlider ? "/character-creation" : "story-creation"
    },
    title: function () {
      return this.isStorySlider ? "CHARACTERS" : "STORIES";
    },
    description() {
      return this.isStorySlider ? this.character_data : this.story_data
    },
    isMobile() {
      return this.screenWidth < 768;
    },
  },
  mounted() {
    this.backgroundTransition = setInterval(() => {
      this.isStorySlider = !this.isStorySlider;
    }, 10000);

    addEventListener("resize", () => (this.screenWidth = window.innerWidth));
  },
};
</script>

<style scoped>
@media screen and (max-width: 768px) {
  .darkfilter {
    filter: brightness(50%);
  }
}
</style>
