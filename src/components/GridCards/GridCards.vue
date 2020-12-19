<template>
  <div>
    <h1 class="text-4xl m-10">
      {{ title }} <span class="text-gray-500">({{ total }})</span>
    </h1>
    <div
      ref="cards"
      class="cards flex flex-wrap flex-col-reverse md:flex-row-reverse items-center md:justify-center"
    >
      <a v-bind:href="path" class="mx-6 my-3">
        <NewCard name="ADD NEW ITEM" filename="newCharacter" />
      </a>
    </div>
    <a v-bind:href="viewAllPath">
      <h1 class="mb-5 mt-5">
        SEE MORE
        <i class="fa fa-eye text-xl text-primary ml-2" aria-hidden="true"></i>
      </h1>
    </a>
  </div>
</template>

<script>
import Card from "@/components/GridCards/Card.vue";
import NewCard from "@/components/GridCards/NewCard.vue";
import { getCharacters } from "@/domain/services/characterServices";
import { getStories } from "@/domain/services/storiesServices";
import Vue from "vue";
import { DOMAIN } from "@/utils/utils";

export default {
  name: "GridCards",
  props: {
    title: String,
    total: Number,
    path: String,
    viewAllPath: String,
  },
  components: {
    NewCard,
  },
  mounted() {
    if (this.title == "CHARACTERS") {
      getCharacters()
        .then((data) => {
          for (let i = data.length - 1; i >= 0 && i >= data.length - 3; i--) {
            let link = document.createElement("a");
            link.href = this.path + String(data[i].id);
            link.classList.add("mx-6", "my-4");
            let card = Vue.extend(Card);
            let image = DOMAIN + "/static" + this.viewAllPath + data[i].image;
            let instance = new card({
              propsData: {
                name: data[i].name,
                content: data[i].biography,
                filename: image,
              },
            });
            instance.$mount();
            link.appendChild(instance.$el);
            this.$refs.cards.appendChild(link);
          }
        })
        .catch();
    } else {
      // TO DO: GET STORIES
    }
  },
};
</script>

<style></style>
