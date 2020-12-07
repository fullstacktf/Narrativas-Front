<template>
  <div class="w-56 rounded overflow-hidden shadow-lg">
    <img class="w-32 h-32 mt-8 rounded-full" :src="setUrl(filename)" />
    <h3 class="my-4 mx-4 text-secondary font-bold">{{ name }}</h3>
    <p class="mx-2 my-4 text-sm">{{ description }}</p>
  </div>
</template>

<script>
export default {
  name: "PersonCard",
  props: {
    name: String,
    filename: String,
    description: String,
  },
  methods: {
    setUrl(filename) {
      return require("@/assets/img/" + filename + ".jpg");
    },
  },
};
</script>

