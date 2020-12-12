<template>
<div class="max-w-screen h-screen flex">
    <!-- Left section -->
    <div class="w-2/4 bg-secondary">
        <h1>CHARACTER CREATION</h1>
        <button class="bg-primary text-white px-4 py-2" v-on:click="OpenCreationMenu">Create section</button>

        <div class="bg-white w-2/12 flex flex-col flex-start py-2" v-if="enableCreation">
            <h3 class="font-bold pb-2">Create section</h3>
            <input class="border border-gray-400 pl-2 mb-2 mx-5" type="text" placeholder="Name" autocomplete="on"/>
        </div>
    </div>

    <!-- rigth section -->

    <div class="w-2/4 bg-primary flex flex-col items-center justify-center">
        <div class="w-3/12 flex flex-col text-rigth">
            <img class="m-0 w-full" src="@/assets/img/Adal.jpg" alt="character">
            <i class="fas fa-pencil-alt pt-2 pb-6 text-right"></i>
        </div>
        <form class="flex flex-col items-center w-4/12" vaction="">
            <input class="w-full my-2 py-2" type="text" placeholder="Name" autocomplete="on" />
            <input class="w-full my-2 py-2" type="text" placeholder="Descriptions" autocomplete="on"/>
        </form>
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