<template>
  <div class="flex w-auto h-auto">
      <input v-model="value" class="w-5/6 mr-1 my-1 border-2 border-bg-100 focus:outline-none" type="text">
      <button class="focus:outline-none" v-on:click="emitRemoveInput()"><i class="fas fa-trash"></i></button>
  </div>
</template>

<script>
import EventBus from "@/event-bus";
import Vue from "vue";
import { store } from "@/store";
export default {
    name: "inputSection",
    props: {
        data: String,
    },
    data() {
        return {
            value: this.data ? this.data : "",
        }
    },
    computed: {
        StoreState() {
            return store.state.saveEvent
        }
    },
    watch: {
        StoreState() {
            if (store.state.saveEvent) {
                EventBus.$emit("DATA_INPUT", this.value);
            }
        }
    },
    methods: {
        emitRemoveInput() {
            let str = this.$el.className
            EventBus.$emit("REMOVE_INPUT", str.split(' ').pop());
        },
    },
}
</script>

<style>

</style>