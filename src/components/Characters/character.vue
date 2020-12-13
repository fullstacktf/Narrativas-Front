<template>
  <div class="max-w-screen h-auto py-20 flex flex-col-reverse md:flex-row">
    <!-- Left section -->
    <div
      class="w-full md:w-2/4 bg-gray-100 flex flex-col items-center justify-center"
    >
      <div class="w-8/12 text-left">
        <h1 class="text-4xl pt-2">CHARACTER CREATION</h1>
        <button
          class="outline-none bg-primary text-white px-4 py-2 mt-1 mb-2"
          v-on:click="createSection"
        >
          Create section
        </button>
      </div>
      <div ref="sectionzone" class="w-8/12"></div>
    </div>

    <!-- rigth section -->

    <div class="w-full md:w-2/4 bg-gray-100 flex flex-col items-center">
      <div class="w-56 pb-4">
        <div
          class="w-56 h-68 bg-cover img"
          v-bind:style="{ backgroundImage: `url(${this.image})` }"
        ></div>
      </div>
      <form class="mb-4 flex">
        <input
          type="file"
          accept="image/*"
          @change="uploadImage($event)"
          id="file-input"
        />
      </form>
      <form class="flex flex-col items-center w-10/12 xl:w-6/12">
        <input
          class="outline-none border border-gray-400 w-full my-2 py-2 pl-2"
          type="text"
          placeholder="Name"
          autocomplete="on"
        />
        <textarea
          class="outline-none border border-gray-400 w-full my-2 py-2 pl-2 h-40"
          cols="30"
          rows="10"
          placeholder="Description"
          autocomplete="on"
        ></textarea>
      </form>
    </div>
  </div>
</template>

<script>
import CharacterBlockSection from "@/components/Characters/characterBlockSection";
import { store } from "@/store";
import { characterImageUpload } from "@/domain/services/characterServices";
import EventBus from "@/event-bus";
import Vue from "vue";

export default {
  name: "Character",
  mounted() {
    EventBus.$on("REMOVE_BLOCK_SECTION", (className) => {
      console.log(className);
      for (let i = 0; i < this.blockSection.length; i++) {
        if (this.blockSection[i].$el.className.split(" ").pop() == className) {
          this.blockSection[i].$destroy();
          this.$refs.sectionzone.removeChild(this.blockSection[i].$el);
          this.blockSection.splice(i, 1);
        }
      }
    });

    this.createSection();
    this.createSection();
  },
  destroyed() {
    store.commit("resetBlockSection");
  },
  data() {
    return {
      image: null,
      blockSection: [],
    };
  },
  methods: {
    createSection() {
      let blockSectionComponentClass = Vue.extend(CharacterBlockSection);
      let blockSectionComponent = new blockSectionComponentClass();
      blockSectionComponent.$mount();
      blockSectionComponent.$el.classList.add(
        `blockSection-${store.state.blockSectionCount}`
      );
      store.commit("incrementBlockSection");
      this.blockSection.push(blockSectionComponent);
      this.$refs.sectionzone.appendChild(blockSectionComponent.$el);
    },
    uploadImage(event) {
      const image = event.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onload = (event) => {
        this.image = event.target.result;
      };
      characterImageUpload(image).then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
    },
  },
};
</script>
