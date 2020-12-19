<template>
  <div>
  </div>
</template>

<script>
import ShowAllCards from "@/components/GridCards/ShowAllCards.vue";
import { getCharacters } from "@/domain/services/characterServices";
import DOMAIN from "@/utils/utils";
import Vue from "vue";

export default {
  name: "Characters",
  data() {
    return {
      infoCards: this.generateArrayObjects(),
    };
  },
  methods: {
    generateArrayObjects() {
      return this.infoCards;
    },
  },
  mounted() {
    getCharacters()
      .then((data) => {
        let infoCards = data;
        let ShowCards = Vue.extend(ShowAllCards);
        let instance = new ShowCards({
          propsData: {
            title: "Characters",
            cards: infoCards,
            path: "http://127.0.0.1:9090" + "/static/characters/",
          },
        });
        instance.$mount();
        this.$el.appendChild(instance.$el);
      })
      .catch((error) => {
        return [];
      });
  },
};
</script>
