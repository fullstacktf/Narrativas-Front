<template>
  <div v-if="isStorySlider">
    <div class="leading-normal tracking-normal w-full h-64">
      <div class="h-full w-full flex">
        <div
          class="w-1/2 h-full bg-slide-1 bg-cover bg-right lg:bg-center"
        ></div>
        <div class="w-1/2 h-full text-center font-title">
          <div class="mt-4 md:mt-8">
            <p class="text-xl">CREATE YOUR</p>
            <p class="text-6xl">STORIES</p>
            <button
              class="bg-purple-600 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded-full text-xl mt-4 focus:outline-none"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="w-full h-2 flex">
      <div class="w-1/2 h-full bg-blue-500 inline-block cursor-pointer"></div>
      <div class="w-1/2 h-full bg-gray-600 inline-block cursor-pointer" v-on:click="isStorySlider = !isStorySlider"></div>
    </div>
  </div>

  <div v-else>
    <div class="leading-normal tracking-normal w-full h-64">
      <div class="h-full w-full flex">
        <div class="w-1/2 h-full text-center font-title">
          <div class="mt-4 md:mt-8">
            <p class="text-xl">CREATE YOUR</p>
            <p class="text-6xl">CHARACTERS</p>
            <button
              class="bg-purple-600 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded-full text-xl mt-4 focus:outline-none"
            >
              Get Started
            </button>
          </div>
        </div>
        <div
          class="w-1/2 h-full bg-slide-2 bg-cover bg-right lg:bg-center"
        ></div>
      </div>

      <div class="w-full h-2 flex">
        <div class="w-1/2 h-full bg-gray-600 inline-block cursor-pointer" v-on:click="isStorySlider = !isStorySlider"></div>
        <div class="w-1/2 h-full bg-blue-500 inline-block cursor-pointer"></div>
      </div>
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
};
</script>

<style>
/* Las animaciones de entrada y salida pueden usar */
/* funciones de espera y duración diferentes.      */
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
