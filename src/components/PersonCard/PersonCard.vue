<template>
  <div role="personCard" class="w-56 rounded overflow-hidden shadow-lg flex flex-col items-center">
    <img alt="Character image" class="w-32 h-32 mt-8 rounded-full" :src="setUrl(filename)" />
    <h3 class="mt-2 mx-4 text-secondary font-bold">{{ name }}</h3>
    <p class="mx-2 mb-4 text-sm">{{ description }}</p>
  </div>
</template>

<script>
import '../../assets/styles/index.css';
import '../../assets/styles/base.css';
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

