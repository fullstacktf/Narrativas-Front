<template>
  <div>
      <img class="max-w-full parallax" src={{ url }} alt="Parallax">
  </div>
</template>

<script>
export default {
    name: "Parallax",
    mounted() {
        element = this.$el.querySelector(".parallax")
        element.classList.add("clip-path")
    },
    props: ['url'],
}
</script>

<style>
    .clip-path{
        clip-path: polygon(0 15%, 100% 0, 100% 85%, 0% 100%);
    }
</style>