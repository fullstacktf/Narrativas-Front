<template>
  <div class="m-20">
    <div class="flex flex-col md:flex-row justify-center md:justify-between mx-5">
      <h1 class="text-4xl md:text-left">
        {{ title }} <span class="text-gray-500">({{ total }})</span>
      </h1>
      <a
        v-if="isStory"
        href="/story-creation"
        class="mt-3 mr-10 mx-10 text-white rounded-full py-3 px-6 bg-primary hover:bg-primary-dark text-sm font-bold"
      >
        New Story
      </a>
      <a
        v-else
        href="/character-creation"
        class="mt-3 mr-10 mx-10 text-white rounded-full py-3 px-6 bg-primary hover:bg-primary-dark text-sm font-bold"
      >
        New Character
      </a>
    </div>
    <div class="cards flex flex-wrap justify-center">
      <div v-for="(n, index) in this.total" :key="index">
        <Card
          :name="cards[index].name"
          :title="cards[index].title"
          :content="cards[index].content"
          :filename="cards[index].filename"
          class="md:mr-10 my-5"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Card from "@/components/GridCards/Card.vue";

export default {
  name: "ShowAllCards",
  data() {
    return {
      total: this.cards.length,
    };
  },
  computed: {
    isStory() {
      console.log(this.title);
      return this.title == "Stories";
    },
  },
  props: {
    title: String,
    cards: Array,
  },
  components: {
    Card,
  },
};
</script>

<style></style>
