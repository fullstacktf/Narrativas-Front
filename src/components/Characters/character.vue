<template>
  <div class="max-w-screen h-auto py-20 flex flex-col-reverse md:flex-row">
    <div
      class="w-full md:w-2/4 bg-gray-100 flex flex-col items-center justify-center"
    >
      <div class="w-8/12 text-left">
        <h1 class="text-4xl pt-2">CHARACTER CREATION</h1>
        <button
          class="focus:outline-none bg-primary text-white px-4 py-2 mt-1 mb-2 mr-6"
          v-on:click="createSection"
        >
          Create section
        </button>
        <button
          class="focus:outline-none bg-primary text-white px-4 py-2 mt-1 mb-2 mr-6"
          v-on:click="saveCharacter"
        >
          Save character
        </button>
        <button
          class="focus:outline-none bg-primary text-white px-4 py-2 mt-1 mb-2"
          v-on:click="deleteCharacter"
          v-if="this.id"
        >
          Delete character
        </button>
      </div>
      <div ref="sectionzone" class="w-8/12"></div>
    </div>

    <div class="w-full md:w-2/4 bg-gray-100 flex flex-col items-center">
      <div class="w-56 pb-4">
        <div
          class="w-56 h-68 bg-cover img"
          v-bind:style="{ backgroundImage: `url(${this.getBgImage})` }"
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
          v-model="name"
          class="outline-none border border-gray-400 w-full my-2 py-2 pl-2"
          type="text"
          placeholder="Name"
          autocomplete="on"
        />
        <textarea
          v-model="description"
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
import {
  characterImageUpload,
  createCharacter,
  deleteCharacter,
  updateCharacter,
  getCharacter,
} from "@/domain/services/characterServices";
import { DOMAIN } from "@/utils/utils";
import EventBus from "@/event-bus";
import Vue from "vue";

export default {
  name: "Character",
  data() {
    return {
      id: 0,
      name: "",
      description: "",
      imagePath: DOMAIN + "/static/default/character_default.png",
      imageName: "",
      blockSection: [],
    };
  },
  methods: {
    createSection(sectionData) {
      let blockSectionComponentClass = Vue.extend(CharacterBlockSection);
      let blockSectionComponent;
      if (sectionData) {
        blockSectionComponent = new blockSectionComponentClass({
          propsData: {
            sectionTitle: sectionData["title"],
            fields: sectionData["fields"],
          },
        });
      } else {
        blockSectionComponent = new blockSectionComponentClass();
      }
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

      characterImageUpload(image)
        .then((data) => {
          this.imagePath =
            DOMAIN + "/static/characters/" + data["data"]["image"];
          this.imageName = data["data"]["image"];
        })
        .catch((error) => {
          console.log(error);
        });
    },
    saveCharacter(event) {
      if (!this.id) {
        const data = {
          name: this.name,
          biography: this.description,
          image: this.imageName,
        };
        createCharacter(data)
          .then((response) => {
            history.pushState(
              {},
              null,
              "/character-creation/" + String(response.id)
            );
            this.id = response.id;
            EventBus.$emit("SAVE_SECTION");
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        const data = {
          id: this.id,
          name: this.name,
          biography: this.description,
          image: this.imageName,
        };
        updateCharacter(data)
          .then((response) => {
            console.log(response)
            history.pushState(
              {},
              null,
              "/character-creation/" + String(response.id)
            );
            this.id = response.id;
            EventBus.$emit("SAVE_SECTION");
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
    deleteCharacter(event) {
      deleteCharacter(this.id);
      location.href = "/";
    },
  },
  computed: {
    getBgImage() {
      return this.imagePath;
    },
  },
  mounted() {
    EventBus.$on("REMOVE_BLOCK_SECTION", (className) => {
      for (let i = 0; i < this.blockSection.length; i++) {
        if (this.blockSection[i].$el.className.split(" ").pop() == className) {
          this.blockSection[i].$destroy();
          this.$refs.sectionzone.removeChild(this.blockSection[i].$el);
          this.blockSection.splice(i, 1);
        }
      }
    });
    this.id = window.location.pathname.split("/").pop();

    if (this.id) {
      getCharacter(this.id).then((data) => {
        this.id = data.id;
        this.name = data.name;
        this.imagePath = DOMAIN + "/static/characters/" + data.image;
        this.imageName = data.image;
        this.description = data.biography;

        if (data["sections"]) {
          data.sections.forEach((section) => {
            this.createSection(section);
          });
        }
      });
    } else {
      this.createSection();
      this.createSection();
    }
  },
  destroyed() {
    store.commit("resetBlockSection");
  },
};
</script>
