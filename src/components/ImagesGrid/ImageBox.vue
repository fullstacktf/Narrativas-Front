<template>
  <div>
    <div class="w-40 h-40 bg-rpimary" v-bind:style="{backgroundImage: 'url(' + this.setBackground() + ')'}"></div>
    <div class="flex">
      <h2>{{ this.title }}</h2>
      <span>1234</span>
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
  },
};
</script>
