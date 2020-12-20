<template>
    <div class="w-56 h-28 cursor-pointer mt-40" v-on:click="openCard" draggable="true">
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
    },
    data() {
        return {
            id: 1,
            name: "card_1",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed lectus aliquam, accumsan turpis sit amet, accumsan mi.",
            related_character: [],
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
