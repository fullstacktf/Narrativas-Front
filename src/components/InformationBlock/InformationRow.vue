<template>
  <div class="w-full flex flex-wrap mb-6 justify-center mt-6" v-bind:class="{ 'md:flex-row-reverse': this.isReversed }">
    <div v-bind:class="{ 'md:mr-16': !this.isReversed }">
      <img class="h-72 w-72 mt-8" v-bind:src="getImageUrl()" />
    </div>
    <div class="h-72 w-136 mt-8 flex justify-center align-middle" v-bind:class="{ 'md:mr-16': this.isReversed }">
      <div class="h-64 w-96 md:w-112 text-left">
          <i class="fas fa-hearth bg-primary"></i>
           <h3 class="text-xl font-bold mt-2">
             {{ this.title.toUpperCase() }}</h3>
           <h2 class="text-3xl mt-2">{{this.subtitle}}</h2>
           <p class="mt-2">{{ this.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "InformationRow",
  props: {
    isReversed: Boolean,
    image: String,
    // icon: String,
    title: String,
    subtitle: String,
    description: String,
  },
  methods: {
    getImageUrl() {
      return require('@/assets/img/'+this.image+'.jpg')
    }
  }
};
</script>

<style>
</style>
