<template>
    <div class="w-56 h-28 cursor-pointer m-40" v-on:click="openCard" draggable="true">
        <div class="w-full bg-primary h-10 flex items-center justify-end pr-4 text-white px-2">
            <button class="focus:outline-none" v-on:click="emitRemoveCard()">
                <i class="fas fa-times"></i>
            </button>
        </div>
        <div class="w-full h-90 bg-white px-2 text-left">
            <h1>NAME</h1>
            <p class="text-sm">{{this.title}}</p>
            <h1>DESCRIPTION</h1>
            <p class="text-sm">{{this.description}}</p>
            <h1>RELATED CHARACTER</h1>
            <ul v-for="(items, index) in this.related_character" :key="index">
                <li class="flex flex-start items-center">
                    <img class="m-0 h-10 pr-2 my-2" :src="setImage(items.img)" alt="character">
                    <span class="text-sm">{{items.name}}</span>
                </li>
            </ul>
        </div>
    </div>
    
</template>

<script>
import EventBus from "@/event-bus";
export default {
    name: "StoryCard",
    mounted() {
        this.onResize();
    },
    props: {
        title: String,
        description: String,
        related_character: Array,
    },
    data() {
        return {
            id: 1,
            screenWidth: window.innerWidth,
            screenHeight: window.innerHeight,
        }
    },
    methods: {
        onResize() {
            addEventListener("resize", () => {
            this.screenWidth = window.innerWidth;
            this.screenHeight = window.innerHeight;
            });
        },
        openCard() {
            console.log("He clicado");
        },
        emitRemoveCard() {
            let str = this.$el.className
            EventBus.$emit("REMOVE_STORY_CARD", str.split(' ').pop());
        },
        setImage(value) {
            return require("@/assets/img/" + value + ".jpg");
        }
    }
}
</script>