<template>
  <div class="w-full flex flex-wrap mb-6 justify-center mt-6" v-bind:class="{ 'md:flex-row-reverse': this.isReversed }">
    <div v-bind:class="{ 'md:mr-16': !this.isReversed }">
      <img class="h-72 w-72 mt-8" v-bind:src="getImageUrl()" />
    </div>
    <div class="h-72 w-136 mt-8 flex justify-center" v-bind:class="{ 'md:mr-16': this.isReversed }">
      <div class="h-64 w-96 md:w-112 text-left">
          <div class="flex">
            <div class="text-xl font-bold mt-2 ml-4 flex">
              <div class="bg-primary w-10 h-10 rounded-full flex justify-center">
                <i class="text-gray-100  text-2xl text-center mt-2" v-bind:class="[this.getIcon()]"></i>
              </div>
             <h3 class="ml-4 mt-1">{{ this.title.toUpperCase() }}</h3></div>
          </div>
           <h2 class="text-3xl mt-4">{{this.subtitle}}</h2>
           <p class="mt-4">{{ this.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
const icons = {
  "collaborate":"fas fa-users",
  "follow":"fas fa-journal-whills",
  "customize":"fas fa-user-edit",
  "relationship":"fa fa-heart"
}

export default {
  name: "InformationRow",
  props: {
    isReversed: Boolean,
    image: String,
    title: String,
    subtitle: String,
    description: String,
  },
  methods: {
    getImageUrl() {
      return require("@/assets/img/" + this.image + ".jpg");
    },
    getIcon() {
      return icons[this.image]
    }
  },
};
</script>

<style>
</style>
