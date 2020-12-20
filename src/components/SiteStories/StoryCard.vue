<template>
    <div class="w-56 h-28 cursor-pointer absolute z-10" v-on:click="openCard" draggable="true">
        <div class="w-full bg-primary h-10 flex items-center justify-between text-white px-2">
            <span>{{this.name}}</span>
            <button class="focus:outline-none" v-on:click="emitRemoveCard()">
                <i class="fas fa-times"></i>
            </button>
        </div>
        <div class="w-full h-90 bg-white px-2 text-justify">
            <p class="text-xs">{{this.description}}</p>
        </div>
    </div>
    
</template>

<script>
import EventBus from "@/event-bus";
export default {
    name: "StoryCard",
    mounted() {
        this.onResize();
        let marginTop = 11+Math.floor(Math.random() * 85);
        let marginLeft = 6+Math.floor(Math.random() * 90);
        this.$el.style.margin = `${marginTop}vh 0 0 ${marginLeft}vw`
    },
    props: {
        id: String,
        name: String,
        description: String,
    },
    data() {
        return {
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
            EventBus.$emit("OPEN_CARD", id);
        },
        emitRemoveCard() {
            let str = this.$el.className
            EventBus.$emit("REMOVE_STORY_CARD", str.split(' ').pop());
        },
    }
}
</script>