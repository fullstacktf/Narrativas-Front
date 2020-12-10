<template>
  <div class="w-full h-136 bg-cover clip-path bg-center" v-bind:style="{backgroundImage: 'url(' + this.setBackground() + ')'}">

  </div>
</template>

<script>
export default {
  name: "LateralSlide",
  props: {
    image: String,
  },
  methods: {
    setBackground() {
      return require("@/assets/img/"+this.image+".jpg")
    }
  },
};
</script>

<style scoped>
.clip-path {
  clip-path: polygon(0 15%, 100% 0, 100% 85%, 0% 100%);
}
</style>
