<template>
    <div class="w-full h-full bg-secondary flex justify-center absolute z-20">
        <div class="w-56 h-28 cursor-pointer m-40" draggable="true">
            <div class="w-full bg-primary h-10 flex items-center justify-end pr-4 text-white px-2">
                <button class="focus:outline-none" v-on:click="emitRemoveCard()"> 
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="w-full h-90 bg-white px-2 text-left">
                    <h1>TITLE</h1>
                    <input class="focus:outline-none border border-gray-400" v-model="title" type="text" autocomplete="on">

                    <h1>DESCRIPTION</h1>
                    <textarea class="focus:outline-none border border-gray-400" v-model="description" autocomplete="on"></textarea>

                    <h1>RELATED CHARACTER</h1>
                    <button class="focus:outline-none" v-on:click="newSection">
                        <i class="fas fa-plus"></i>
                    </button>
                    <div ref="inputSection">
                        
                    </div>
                    <button type="submit" class="px-4 py-2 bg-primary focus:outline-none text-white text-sm mb-2" v-on:click="saveData()">Save</button>
            </div>
        </div>
    </div>
</template>

<script>
import { store } from "@/store";
import EventBus from "@/event-bus";
import Vue from "vue";
import InputSection from "@/components/SiteStories/inputSection"
export default {
    name:"NewStoryCard",
    mounted() {
        EventBus.$on("REMOVE_INPUT", (className) => {
          for(let i = 0; i < this.arrayOfInput.length; i++) {
            if(this.arrayOfInput[i].$el.className.split(' ').pop() == className) {
              this.arrayOfInput[i].$destroy();
              this.$refs.inputSection.removeChild(this.arrayOfInput[i].$el)
              this.arrayOfInput.splice(i, 1);
            }
          }
        });

    },
    data() {
        return {
            title: "",
            description: "",
            arrayOfInput: [],
            arrayOfInputData: [],
        }
    },
    methods: {
        newSection() {
            let inputSection = Vue.extend(InputSection);
            let input = new inputSection();
            input.$mount();
            input.$el.classList.add(`input-${store.state.cardStoryCount}`);
            store.commit('incrementInput');
            this.arrayOfInput.push(input);
            this.$refs.inputSection.appendChild(input.$el); 
        },
        saveData() {
            store.commit("changeState")
            EventBus.$on("DATA_INPUT", (input) => {
                this.arrayOfInputData.push(input)
            });
            this.emitDataCard(this.title, this.description, this.arrayOfInputData)
            this.emitRemoveCard()
        },
        emitRemoveCard() {
            let str = this.$el.className
            EventBus.$emit("REMOVE_NEW_STORY_CARD", str.split(' ').pop());
        },
        emitDataCard(title, description, array) {
            const data = {
                title: title,
                description: description,
                arrayRelatedCharacter: array
            }
            EventBus.$emit("DATA_CARD", data)
        }
    }

}
</script>

<style>

</style>