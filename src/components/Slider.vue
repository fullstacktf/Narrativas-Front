<template>
  <div>
    <div class="leading-normal tracking-normal w-full h-64">
      <div
        class="h-full w-full flex"
        v-bind:class="{ 'flex-row-reverse': !this.isStorySlider }"
      >
        <div
          class="w-1/2 h-full bg-cover bg-left lg:bg-center"
          v-bind:style="{
            backgroundImage: 'url(' + this.setBackground() + ')',
          }"
          v-bind:class="setBackgroundSide()"
        ></div>
        <div class="w-1/2 h-full text-center font-title">
          <div class="mt-12 md:mt-8">
            <p class="text-xl">CREATE YOUR</p>
            <p class="text-4xl md:text-6xl">{{ title }}</p>
            <button
              class="bg-purple-600 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded-full text-xl mt-4 focus:outline-none"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>

    <div
      class="w-full h-2 flex"
      v-bind:class="{ 'flex-row-reverse': !this.isStorySlider }"
    >
      <div class="w-1/2 h-full bg-blue-500 inline-block cursor-pointer"></div>
      <div
        class="w-1/2 h-full bg-gray-600 inline-block cursor-pointer"
        v-on:click="isStorySlider = !isStorySlider"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Slider",
  data: function () {
    return {
      isStorySlider: true,
    };
  },
  methods: {
    setBackground() {
      return this.isStorySlider
        ? require("@/assets/img/slide_1.jpg")
        : require("@/assets/img/slide_2.jpg");
    },
    setBackgroundSide() {
      return {
        "bg-right": this.isStorySlider,
        "bg-left": !this.isStorySlider,
      };
    },
  },
  computed: {
    title: function () {
      return this.isStorySlider ? "CHARACTERS" : "STORIES";
    },
  },
  mounted() {
    this.backgroundTransition = setInterval(() => {
      this.isStorySlider = !this.isStorySlider;
    }, 10000);
  },
};
</script>
