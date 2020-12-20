<template>
    <div class="max-w-full h-92vh bg-gray-500">
        <div ref="boardzone" class="h-85vh">
            <div class="w-full h-full bg-secondary flex justify-center">
                <NewStoryCard/>
                <!-- title="Prueba"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sapien nibh, venenatis in convallis vitae, mattis eu purus."
                    :related_character = "this.related_character" -->
            </div>
        </div>
        <nav class="w-full bg-white h-7vh flex items-center justify-between px-8">
            <div class="flex items-center">
                <i class="fas fa-house-user text-gray-600"></i>
                <span class="text-lg text-gray-400 p-2">{{this.name}}</span>
                <i class="fas fa-sort-up text-gray-600 pt-2"></i>
            </div>
            <button class="py-2 px-4 bg-green text-white focus:outline-none" v-on:click="createCard()">
                <i class="fas fa-plus pr-2"></i>
                <span>Event</span>
            </button>
        </nav>
    </div>
  
</template>

<script>
import StoryCard from "@/components/SiteStories/StoryCard"
// import StoryCardOpen from "@/components/SiteStories/StoryCardOpen"
import NewStoryCard from "@/components/SiteStories/NewStoryCard"
import { store } from "@/store";
import EventBus from "@/event-bus";
import Vue from "vue";
export default {
    name:"StoryBoard",
    components: {
        // StoryCardOpen,
        NewStoryCard,
    },
    mounted() {
        EventBus.$on("REMOVE_STORY_CARD", (className) => {
          for(let i = 0; i < this.storyCards.length; i++) {
            if(this.storyCards[i].$el.className.split(' ').pop() == className) {
              this.storyCards[i].$destroy();
              this.$refs.boardzone.removeChild(this.storyCards[i].$el)
              this.storyCards.splice(i, 1);
            }
          }
        });

        EventBus.$on("OPEN_CARD", (id) => {
          createOpenCard(id);
        });
        
    },
     destroyed() {
      store.commit('resetCardStory')
    },
    data() {
        return{
            name: "Prueba",
            storyCards: [],
            related_character: [
                        {
                            img: 'Alex',
                            name: 'Alex puto amo'
                        },
                        {
                            img: 'Kevin',
                            name: 'Kevin puto amo'
                        }
                    ],   
        }
    },
    methods: {
        createCard() {
        let storyCardClass = Vue.extend(StoryCard);
        let cardComponent = new storyCardClass();
        cardComponent.$mount();
        cardComponent.$el.classList.add(`cardStory-${store.state.cardStoryCount}`);
        store.commit('incrementCardStory');
        this.storyCards.push(cardComponent);
        this.$refs.boardzone.appendChild(cardComponent.$el); 
      },

      createOpenCard(id) {

      }
    }
}
</script>

<style>

</style>