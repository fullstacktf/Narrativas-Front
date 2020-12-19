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
          class="flex flex-col items-center justify-center h-full text-center font-title text-white absolute z-5"
        >
          <h1 class="text-3xl">CREATE YOUR</h1>
          <h1 class="text-6xl md:text-6xl">{{ title }}</h1>
          <p class="w-4/5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu
            sollicitudin neque. Vivamus luctus pulvinar fermentum. In hac habitasse platea
            dictumst. Pellentesque quis sem non mi eleifend pulvinar. Nullam ut lacinia
            erat. Duis euismod orci a velit porttitor, cursus vulputate nisl mattis.
            Integer finibus dignissim tincidunt. Aliquam malesuada semper nisi sed
            tristique. Praesent posuere lacus vel sem tincidunt gravida.
          </p>
          <button
            class="bg-secondary hover:bg-secondary-dark text-white font-bold py-2 px-4 rounded-full text-xs mt-4 focus:outline-none"
          >
            Get Started
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
  data: function () {
    return {
      isStorySlider: true,
      screenWidth: window.innerWidth,
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
