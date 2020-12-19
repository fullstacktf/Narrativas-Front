<template>
  <div>
    <h1 class="text-4xl m-10">
      {{ title }} <span class="text-gray-500">({{ total }})</span>
    </h1>
    <div
      class="cards flex flex-col md:flex-row items-center md:justify-center space-y-10 md:space-y-0 md:space-x-10 md:m-10"
    >
      <a v-bind:href="path">
        <NewCard name="ADD NEW ITEM" filename="newCharacter" />
      </a>
    </div>
    <a v-bind:href="viewAllPath">
      <h1 class="mb-5 mt-5 md:mt-0">
        SEE MORE
        <i class="fa fa-eye text-xl text-primary ml-2" aria-hidden="true"></i>
      </h1>
    </a>
  </div>
</template>

<script>
import Card from "@/components/GridCards/Card.vue";
import NewCard from "@/components/GridCards/NewCard.vue";

export default {
  name: "GridCards",
  props: {
    title: String,
    total: Number,
    path: String,
    viewAllPath: String,
  },
  components: {
    NewCard,
  },
  beforeMount() {},
};
</script>

<style></style>
