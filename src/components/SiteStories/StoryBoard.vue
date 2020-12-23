<template>
  <div
    class="max-w-full h-92vh relative z-0"
    v-bind:style="{ backgroundImage: `url(${this.backgroundImage()})` }"
  >
    <div ref="boardzone" class="h-85vh"></div>
    <nav class="w-full bg-white h-7vh flex items-center justify-between px-8">
      <div class="flex items-center">
        <i class="fas fa-house-user text-gray-600"></i>
        <span class="text-lg text-gray-400 p-2">{{ this.name }}</span>
        <i class="fas fa-sort-up text-gray-600 pt-2"></i>
      </div>
      <button
        class="py-2 px-4 bg-green text-white focus:outline-none"
        v-on:click="createNewCard()"
      >
        <i class="fas fa-plus pr-2"></i>
        <span>Event</span>
      </button>
    </nav>
  </div>
</template>

<script>
import NewStoryCard from "@/components/SiteStories/NewStoryCard";
import StoryCard from "@/components/SiteStories/StoryCard";
import StoryCardOpen from "@/components/SiteStories/StoryCardOpen";
import { store } from "@/store";
import EventBus from "@/event-bus";
import Vue from "vue";
export default {
  name: "StoryBoard",
  mounted() {
    EventBus.$on("REMOVE_NEW_STORY_CARD", (className) => {
      for (let i = 0; i < this.storyNewCards.length; i++) {
        if (this.storyNewCards[i].$el.className.split(" ").pop() == className) {
          this.storyNewCards[i].$destroy();
          this.$refs.boardzone.removeChild(this.storyNewCards[i].$el);
          this.storyNewCards.splice(i, 1);
        }
      }
    });

    EventBus.$on("REMOVE_STORY_CARD_OPEN", (className) => {
      if (this.storyCardOpen.$el.className.split(" ").pop() == className) {
        this.storyCardOpen.$destroy();
        this.$refs.boardzone.removeChild(this.storyCardOpen.$el);
      }
    });

    EventBus.$on("REMOVE_STORY_CARD", (className) => {
      console.log(className);
      for (let i = 0; i < this.storyCards.length; i++) {
        console.log(this.storyCards[i].id);
        if (this.storyCards[i].id == className) {
          this.storyCards[i].$destroy();
          this.$refs.boardzone.removeChild(this.storyCards[i].$el);
          this.storyCards.splice(i, 1);
        }
      }
    });

    EventBus.$on("OPEN_CARD", (id) => {
      const index = id.charAt(id.length - 1);
      this.createCardOpen(index);
    });

    EventBus.$on("DATA_CARD", (data) => {
      this.storyCardsData.push(data);
      store.commit("incrementStoryData");
      this.createCard(this.storyCardsData.length - 1);
    });
  },
  data() {
    return {
      name: "Prueba",
      storyNewCards: [],
      storyCardsData: [],
      storyCards: [],
      storyCardOpen: Object,
    };
  },
  methods: {
    createNewCard() {
      store.commit("resetCardStory");
      let storyCardClass = Vue.extend(NewStoryCard);
      let cardComponent = new storyCardClass();
      cardComponent.$mount();
      cardComponent.$el.classList.add(
        `cardStory-${store.state.cardStoryCount}`
      );
      this.storyNewCards.push(cardComponent);
      this.$refs.boardzone.appendChild(cardComponent.$el);
      store.commit("resetCardStory");
    },

    createCard(index) {
      let storyCardClass = Vue.extend(StoryCard);
      let cardComponent = new storyCardClass({
        propsData: {
          id: `cardStory-${store.state.cardStoryCount}`,
          name: this.storyCardsData[index].title,
          description: this.storyCardsData[index].description,
        },
      });
      cardComponent.$mount();
      cardComponent.$el.classList.add(
        `cardStory-${store.state.cardStoryCount}`
      );
      store.commit("incrementCardStory");
      this.storyCards.push(cardComponent);
      this.$refs.boardzone.appendChild(cardComponent.$el);
    },
    backgroundImage() {
      return require("@/assets/img/toolBackground.jpg");
    },
    createCardOpen(index) {
      let storyCardClass = Vue.extend(StoryCardOpen);
      let cardComponent = new storyCardClass({
        propsData: {
          title: this.storyCardsData[index].title,
          description: this.storyCardsData[index].description,
          arrayOfInput: this.storyCardsData[index].arrayRelatedCharacter,
        },
      });
      cardComponent.$mount();
      cardComponent.$el.classList.add(
        `openCardStory-${store.state.cardStoryOpenCount}`
      );
      store.commit("incrementOpenCardStory");
      this.storyCardOpen = cardComponent;
      this.$refs.boardzone.appendChild(cardComponent.$el);
    },
  },
};
</script>

<style>
</style>
