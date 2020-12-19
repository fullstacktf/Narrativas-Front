<template>
  <div class="container w-56 h-88 relative">
    <div class="card w-56 h-80 rounded-lg overflow-hidden">
      <div
        class="profile w-full h-full"
        v-bind:style="{ background: `url(${getBgImage}) center/ cover` }"
      ></div>
    </div>
    <div class="name text-black pb-2 flex justify-between w-full">
      <h1>{{ name }}</h1>
      <button class="focus:outline-none">
        <i class="fa fa-plus text-gray-500" aria-hidden="true"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewCard",
  props: {
    name: String,
    content: String,
    filename: String,
  },
  computed: {
    getBgImage() {
      return require("@/assets/img/" + this.filename + ".jpg");
    },
  },
};
</script>

<style scoped>
.card {
  position: absolute;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
}

.profile {
  position: absolute;
}

.name {
  position: absolute;
  bottom: 0;
}
</style>
