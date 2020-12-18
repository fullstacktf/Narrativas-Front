<template>
    <div class="w-56 h-28 cursor-pointer" v-on:click="openCard" draggable="true">
        <div class="w-full bg-primary h-10 flex items-center text-white px-2">
            <span>{{this.name}}</span>
        </div>
        <div class="w-full h-90 bg-white px-2 text-justify">
            <p class="text-xs">{{this.description}}</p>
        </div>
    </div>
    
</template>

<script>
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
            console.log("He clicado");
        },
    }
}
</script>

<style>

</style>