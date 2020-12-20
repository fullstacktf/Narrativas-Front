<template>
  <div class="mb-6 w-full">
    <div class="w-4/12 flex mx-2 items-center">
      <input
        class="title focus:outline-none bg-gray-100"
        contenteditable="true"
        type="text"
        placeholder="NAME"
        v-model="title"
      />
      <button v-on:click="createSection" class="focus:outline-none mr-2">
        <i class="fas fa-plus font-bold"></i>
      </button>
      <button v-on:click="emitRemoveBlockSection" class="focus:outline-none">
        <i class="fas fa-times font-bold"></i>
      </button>
    </div>
  </div>
</template>

<script>
import CharacterSection from "@/components/Characters/characterSection.vue";
import { store } from "@/store";
import EventBus from "@/event-bus";
import { createSection } from "@/domain/services/characterServices";

import Vue from "vue";

export default {
    name: "CharacterBlockSection",
    mounted() {
      EventBus.$on("REMOVE_SECTION", (className) => {
        for(let i = 0; i < this.sections.length; i++) {
          if(this.sections[i].$el.className.split(' ').pop() == className) {
            this.sections[i].$destroy();
            this.$el.removeChild(this.sections[i].$el);
            this.sections.splice(i, 1);
          }
        }
      });

      this.createSection()
      this.createSection()
      this.resizeInput()
    },
  name: "CharacterBlockSection",
  data() {
    return {
      sections: [],
      title: ""
    };
  },
  methods: {
    createSection() {
      let sectionComponentClass = Vue.extend(CharacterSection);
      let sectionComponent = new sectionComponentClass();
      sectionComponent.$mount();
      sectionComponent.$el.classList.add(`section-${store.state.sectionCount}`);
      store.commit("incrementSection");
      this.sections.push(sectionComponent);
      this.$el.appendChild(sectionComponent.$el);
    },
    emitRemoveBlockSection() {
      let str = this.$el.className;
      EventBus.$emit("REMOVE_BLOCK_SECTION", str.split(" ").pop());
    },
    resizeInput() {
      const nameInput = this.$el.querySelector("input");

      nameInput.addEventListener("input", () => {
        const size = Math.max(50, nameInput.value.length * 10);
        nameInput.style.setProperty("--size", `${size}px`);
      });
    },
  },
  mounted() {
    EventBus.$on("REMOVE_SECTION", (className) => {
      for (let i = 0; i < this.sections.length; i++) {
        if (this.sections[i].$el.className.split(" ").pop() == className) {
          this.sections[i].$destroy();
          this.$el.removeChild(this.sections[i].$el);
          this.sections.splice(i, 1);
        }
      }
    });

    EventBus.$on("SAVE_CHARACTER", () => {
      let id = window.location.pathname.split("/").pop();
      console.log(this.title)
      //createSection(data, id)
      //  .then(() => {
      //    console.log("seccion guardada");
      //  })
      //  .catch(() => {
      //    console.error("seccion no guardada");
      //  });
    });

    this.createSection();
    this.createSection();
    this.resizeInput();
  },
  destroyed() {
    store.commit("resetSection");
  },
};
</script>

<style scoped>
.title::placeholder {
  color: black;
  font-family: "oswald", sans-serif;
  font-weight: bold;
  font-size: 1.2rem;
}

.title {
  color: black;
  font-family: "oswald", sans-serif;
  font-weight: bold;
  font-size: 1.2rem;
  text-transform: uppercase;
  width: var(--size, 50px);
}
</style>
