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
  props: {
    sectionTitle: String,
    fields: Array,
  },
  data() {
    return {
      id: 0,
      sections: [],
      title: "",
    };
  },
  methods: {
    createSection(section) {
      let sectionComponentClass = Vue.extend(CharacterSection);
      let sectionComponent;
      if (section) {
        sectionComponent = new sectionComponentClass({
          propsData: {
            fieldId: store.state.sectionCount,
            name: section["name"],
            value: section["value"],
            description: section["description"],
          },
        });
      } else {
        sectionComponent = new sectionComponentClass({
          propsData: {
            fieldId: store.state.sectionCount,
          },
        });
      }
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
      let nameInput = this.$el.querySelector("input");

      if (this.title) {
        let size = Math.max(50, this.title.length * 11);
        nameInput.style.setProperty("--size", `${size}px`);
      }

      nameInput.addEventListener("input", () => {
        let size = Math.max(50, nameInput.value.length * 11);
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

    EventBus.$on("SAVE_SECTION", () => {
      const id = window.location.pathname.split("/").pop();
      const data = { title: this.title };
      if (this.title) {
        createSection(data, id)
          .then((data) => {
            this.id = data.id;
            for (let i = 0; i < this.sections.length; i++) {
              let id = this.sections[i].$el.className
                .split(" ")[2]
                .split("-")[1];
              EventBus.$emit("SAVE_FIELD", id, this.id);
            }
          })
          .catch(() => {
            console.error("seccion no guardada");
          });
      }
    });
    if (this.sectionTitle) {
      this.title = this.sectionTitle;
      this.fields.forEach((field) => {
        this.createSection(field);
      });
    } else {
      this.createSection();
      this.createSection();
    }
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
