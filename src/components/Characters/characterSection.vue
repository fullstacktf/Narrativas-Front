<template>
    <div class="w-full m-0">
        <div class="flex flex-around text-left text-gray-400 m-0">
            <span class="w-5/12 mx-2">Name</span>
            <span class="w-2/12">Value</span>
            <span class="w-5/12 mx-2" >Description</span>
        </div>
        <form class="flex items-center">
            <input class="focus:outline-none border mx-2 border-gray-400 w-5/12 py-2 pl-2" type="text" autocomplete="on" />
            <input class="focus:outline-none border border-gray-400 w-2/12 py-2 pl-2" type="text" autocomplete="on" />
            <input class="focus:outline-none border mx-2 border-gray-400 w-5/12 py-2 pl-2" type="text" autocomplete="on" />
            <button class="focus:outline-none" type='button' v-on:click="emitRemoveSection"><i class="fas fa-trash"></i></button>
        </form> 
    </div>
</template>

<script>
import EventBus from "@/event-bus";
export default {
    name: "CharacterSection",
    mounted() {
    },
    data() {
        return {
        };
    }, 
    methods: {
        emitRemoveSection () {
            let str = this.$el.className
            EventBus.$emit("REMOVE_SECTION", str.split(' ').pop());
        },
    },      
}
</script>

<style>

</style>