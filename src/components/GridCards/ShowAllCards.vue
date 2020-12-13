<template>
  <div class="m-20">
    <h1 class="text-4xl m-10">
      {{ title }} <span class="text-gray-500">({{ total }})</span>
    </h1>
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
