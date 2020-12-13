<template>
  <div class="m-20">
    <div class="flex justify-between mx-5">
      <h1 class="text-4xl text-left">
        {{ title }} <span class="text-gray-500">({{ total }})</span>
      </h1>
      <a
        href="/character-creation"
        class="mt-3 mr-10 text-white rounded-full py-3 px-6 bg-primary hover:bg-primary-dark text-sm font-bold"
      >
        New Character
      </a>
    </div>
    <div class="cards flex flex-wrap justify-center">
      <div v-for="n in this.total" :key="n">
        <Card
          name="BUZZ LIGHTYEAR"
          title="Description"
          content="Lorem ipsum bla bla bla"
          filename="character_1"
          class="mr-10 my-5"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Card from "@/components/GridCards/Card.vue";

export default {
  name: "ShowAllCards",
  props: {
    title: String,
    total: Number,
  },
  components: {
    Card,
  },
};
</script>

<style></style>
