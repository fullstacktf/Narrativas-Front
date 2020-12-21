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
                    <input class="focus:outline-none border border-gray-400" v-model="title" type="text" value="this.title" autocomplete="on">

                    <h1>DESCRIPTION</h1>
                    <textarea class="focus:outline-none border border-gray-400" v-model="description" autocomplete="on" value="this.description"></textarea>

                    <h1>RELATED CHARACTER</h1>
                    <button class="focus:outline-none" v-on:click="newSection('')">
                        <i class="fas fa-plus"></i>
                    </button>
                    <div ref="inputSection">
                        
                    </div>
                    <button type="submit" class="px-4 py-2 bg-primary focus:outline-none text-white text-sm mb-2">Save</button>
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

        

        let tam = this.arrayOfInput.length;
        for(let i = 0; i < tam; i++) {
            if (typeof(this.arrayOfInput[i]) === 'string') {
                this.newSection(this.arrayOfInput[i])
            }  
        }
    },
    props: {
        title: String,
        description: String,
        arrayOfInput: Array,
    },
    data() {
        return {
            titleData: "",
            descriptionData: "",
            arrayOfInputData: [],
        }
    },
    methods: {
        newSection(data) {
            let inputSection = Vue.extend(InputSection);
            let input = new inputSection({
                propsData: {
                    data: data,
                }
            });
            input.$mount();
            input.$el.classList.add(`input-${store.state.cardStoryCount}`);
            store.commit('incrementInput');
            this.arrayOfInput.push(input);
            this.$refs.inputSection.appendChild(input.$el); 
        },
        emitRemoveCard() {
            let str = this.$el.className
            store.commit("resetState")
            EventBus.$emit("REMOVE_STORY_CARD_OPEN", str.split(' ').pop());
        },
    }

}
</script>

<style>

</style>