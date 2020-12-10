<template>
  <div class="w-full flex flex-wrap mb-4 justify-center" v-bind:class="{ 'flex-row-reverse': this.isReversed }">
    <div v-bind:class="{ 'md:mr-16': !this.isReversed }">
      <img class="h-72 w-72 mt-8" v-bind:src="getImageUrl()" />
    </div>
    <div class="h-72 w-136 mt-8 bg-primary" v-bind:class="{ 'md:mr-16': this.isReversed }">
      <h1 class="text-xl">COLLABORATION</h1>
      <h2 class="text-2xl">Collaborate with your team to create fantastic stories</h2>
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
    // title: String,
    // subtitle: String,
    // content: String,
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
