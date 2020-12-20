<template>
  <div class="flex w-auto h-auto">
      <input :v-model="this.model" class="w-5/6 mr-1 my-1 border-2 border-bg-100 focus:outline-none" type="text">
      <button class="focus:outline-none" v-on:click="emitRemoveInput()"><i class="fas fa-trash"></i></button>
  </div>
</template>

<script>
import EventBus from "@/event-bus";
import Vue from "vue";
export default {
    name: "inputSection",
    props: {
        model: String,
    },
    methods: {
        emitRemoveInput() {
            let str = this.$el.className
            EventBus.$emit("REMOVE_INPUT", str.split(' ').pop());
        },
    }
}
</script>

<style>

</style>