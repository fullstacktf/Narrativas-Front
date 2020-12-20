<template>
  <div class="w-full m-0">
    <div class="flex flex-around text-left text-gray-400 m-0">
      <span class="w-5/12 mx-2">Name</span>
      <span class="w-2/12">Value</span>
      <span class="w-5/12 mx-2">Description</span>
    </div>
    <form class="flex items-center">
      <input
        class="focus:outline-none border mx-2 border-gray-400 w-5/12 py-2 pl-2"
        type="text"
        autocomplete="on"
        v-model="fieldName"
      />
      <input
        class="focus:outline-none border border-gray-400 w-2/12 py-2 pl-2"
        type="text"
        autocomplete="on"
        v-model="fieldValue"
      />

      <input
        class="focus:outline-none border mx-2 border-gray-400 w-5/12 py-2 pl-2"
        type="text"
        autocomplete="on"
        v-model="fieldDescription"
      />
      <button
        class="focus:outline-none"
        type="button"
        v-on:click="emitRemoveSection()"
      >
        <i class="fas fa-trash"></i>
      </button>
    </form>
  </div>
</template>

<script>
import EventBus from "@/event-bus";
import { createSectionField } from "@/domain/services/characterServices";

export default {
  name: "CharacterSection",
  props: {
    fieldId: {
      type: Number,
      default: 0,
    },
    name: {
      type: String,
      default: "",
    },
    value: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      id: 0,
      fieldName: this.name ? this.name : "",
      fieldValue: this.value ? this.value : "",
      fieldDescription: this.description ? this.value : "",
    };
  },
  methods: {
    emitRemoveSection() {
      let str = this.$el.className;
      EventBus.$emit("REMOVE_SECTION", str.split(" ").pop());
    },
  },
  mounted() {
    EventBus.$on("SAVE_FIELD", (fieldid, sectionid) => {
      if ((this.fieldName) && (fieldid == this.fieldId)) {
        const data = {
          name: this.fieldName,
          value: this.fieldValue,
          description: this.fieldDescription,
        };

        const characterid = window.location.pathname.split("/").pop();
        createSectionField(data, characterid, sectionid)
          .then((data) => {
            this.id = data.id;
          })
          .catch((error) => {
            console.log(error);
          });
      }
    });
  },
};
</script>
