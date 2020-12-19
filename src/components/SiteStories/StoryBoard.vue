<template>
    <div class="max-w-full h-92vh bg-gray-500">
        <div class="h-85vh">
            <StoryCard/>
        </div>
        <nav class="w-full bg-white h-7vh flex items-center justify-between px-8">
            <div class="flex items-center">
                <i class="fas fa-house-user text-gray-600"></i>
                <span class="text-lg text-gray-400 p-2">{{this.name}}</span>
                <i class="fas fa-sort-up text-gray-600 pt-2"></i>
            </div>
            <button class="py-2 px-4 bg-green text-white focus:outline-none">
                <i class="fas fa-plus pr-2"></i>
                <span>Event</span>
            </button>
        </nav>
    </div>
  
</template>

<script>
import StoryCard from "@/components/SiteStories/StoryCard"
export default {
    name:"StoryBoard",
    components: {
        StoryCard,
    },
    mounted() {
        const element = this.$refs.StoryCard
        console.log(element);
    },
    data() {
        return{
            name: "Prueba",
        }
    },
    methods: {

    }
}
</script>

<style>

</style>