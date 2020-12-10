<template>
  <div class="m-4">
    <img class="w-40 h-40 bg-cover bg-center cursor-pointer" v-bind:style="{backgroundImage: 'url(' + this.setImage() + ')'}"/>
    <div class="flex justify-between">
      <h2>{{ this.title }}</h2>
      <span class="text-left">{{this.getLikes()}}
        <i class="fas fa-heart text-red-500"></i>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "ImageBox",
  props: {
    title: String,
    image: String,
  },
  methods: {
    setImage() {
      return require("@/assets/img/" + this.image + ".jpg");
    },
    getLikes() {
      return Math.floor(Math.random() * 10000);
    }
  },
};
</script>
