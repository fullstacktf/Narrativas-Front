<template>
  <div>
    <!-- <ShowAllCards title="Characters" :cards="infoCards" /> -->
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
      // const infoCards = [
      //   {
      //     name: "Buzz Lightyear",
      //     title: "Description",
      //     content: "Bla bla bla bla bla ",
      //     filename: "character_1",
      //   },
      //   {
      //     name: "Ariel",
      //     title: "Description",
      //     content: "Bla bla bla bla bla ",
      //     filename: "character_2",
      //   },
      //   {
      //     name: "Jean Gray",
      //     title: "Description",
      //     content: "Bla bla bla bla bla ",
      //     filename: "character_3",
      //   },
      // ];
      return this.infoCards;
    },
  },
  mounted() {
    getCharacters()
      .then((data) => {
        const infoCards = data;
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
        console.log(error);
      });
  },
};
</script>
