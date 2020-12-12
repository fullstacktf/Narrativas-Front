<template>
<div>
    <h1>CHARACTER CREATION</h1>
    <button class="bg-primary text-white px-4 py-2" v-on:click="OpenCreationMenu">Create section</button>

    <div class="bg-white w-2/12 flex flex-col flex-start py-2" v-if="enableCreation">
        <h3 class="font-bold pb-2">Create section</h3>
        <input class="border border-gray-400 pl-2 mb-2 mx-5" type="text" placeholder="Name" autocomplete="on"/>
    </div>
</div>
  
</template>

<script>
export default {
    name: 'Character',
    data() {
        return {
            enableCreation: false,
        }
    },
    methods: {
        OpenCreationMenu() {
            this.enableCreation = !this.enableCreation
        },
    },
}
</script>

<style>

</style>