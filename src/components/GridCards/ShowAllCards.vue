<template>
  <div class="m-20">
    <div
      class="flex flex-col md:flex-row justify-center md:justify-between mx-5"
    >
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
    <div ref="cards" class="cards flex flex-wrap justify-center"></div>
  </div>
</template>

<script>
import Card from "@/components/GridCards/Card.vue";
import Vue from "vue";

export default {
  name: "ShowAllCards",
  props: {
    title: String,
    path: String,
    cards: Array,
  },
  data() {
    return {
      total: this.cards.length,
    };
  },
  computed: {
    isStory() {
      return this.title == "Stories";
    },
  },
  mounted() {
    let cardComponent = Vue.extend(Card);
    try {
      this.cards.forEach((card) => {
        let link = document.createElement("a");
        link.href = "/character-creation/" + String(card.id);
        let instance = new cardComponent({
          propsData: {
            name: card["name"],
            title: "description",
            content: card["biography"],
            filename: this.path + card["image"],
          },
        });
        link.classList.add("md:mr-10", "my-5");
        instance.$mount();
        link.appendChild(instance.$el);
        this.$refs.cards.appendChild(link);
      });
    } catch (error) {
      console.log(error)
    };
  },
};
</script>

<style></style>
