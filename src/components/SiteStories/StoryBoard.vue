<template>
    <div class="max-w-full h-92vh bg-gray-500 relative z-0">
        <div ref="boardzone" class="h-85vh">
            
        </div>
        <nav class="w-full bg-white h-7vh flex items-center justify-between px-8">
            <div class="flex items-center">
                <i class="fas fa-house-user text-gray-600"></i>
                <span class="text-lg text-gray-400 p-2">{{this.name}}</span>
                <i class="fas fa-sort-up text-gray-600 pt-2"></i>
            </div>
            <button class="py-2 px-4 bg-green text-white focus:outline-none" v-on:click="createNewCard()">
                <i class="fas fa-plus pr-2"></i>
                <span>Event</span>
            </button>
        </nav>
    </div>
  
</template>

<script>
import NewStoryCard from "@/components/SiteStories/NewStoryCard";
import StoryCard from "@/components/SiteStories/StoryCard";
import { store } from "@/store";
import EventBus from "@/event-bus";
import Vue from "vue";
export default {
    name:"StoryBoard",
    mounted() {
        EventBus.$on("REMOVE_NEW_STORY_CARD", (className) => {
          for(let i = 0; i < this.storyNewCards.length; i++) {
            if(this.storyNewCards[i].$el.className.split(' ').pop() == className) {
              this.storyNewCards[i].$destroy();
              this.$refs.boardzone.removeChild(this.storyNewCards[i].$el)
              this.storyNewCards.splice(i, 1);
            }
          }
        }); 

        EventBus.$on("DATA_CARD", (data) => {
            this.storyCardsData.push(data);
            console.log(this.storyCardsData.length)
            store.commit("incrementStoryData")
        });
    },
     destroyed() {
      store.commit('resetCardStory')
    },
    data() {
        return{
            name: "Prueba",
            storyNewCards: [],
            storyCardsData: [],

        }
    },
    methods: {
        createNewCard() {
        let storyCardClass = Vue.extend(NewStoryCard);
        let cardComponent = new storyCardClass();
        cardComponent.$mount();
        cardComponent.$el.classList.add(`cardStory-${store.state.cardStoryCount}`);
        this.storyNewCards.push(cardComponent);
        this.$refs.boardzone.appendChild(cardComponent.$el); 
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
        cardComponent.$el.classList.add(`cardStory-${store.state.cardStoryCount}`);
        store.commit('incrementCardStory');
        this.storyCardsData.push(cardComponent);
        this.$refs.boardzone.appendChild(cardComponent.$el); 
      },

      createOpenCard(id) {

      }
    },
    computed: {
        arraySize() {
            return store.state.dataStoryArrayCount > 0 ? true : false;
        }
    },
    watch: {
        arraySize() {
            for (let i = 0; i < store.state.dataStoryArrayCount; i++) {
                this.createCard(i)
            }
        }
    }
}
</script>

<style>

</style>