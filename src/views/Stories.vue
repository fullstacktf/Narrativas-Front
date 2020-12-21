<template>
  <div>
    <ShowAllCards title="Stories" :cards="infoCards" :path="path" />
  </div>
</template>

<script>
import ShowAllCards from "@/components/GridCards/ShowAllCards.vue";
import { DOMAIN } from "@/utils/utils";

export default {
  name: "Stories",
  data() {
    return {
      infoCards: this.generateArrayObjects(),
      path: DOMAIN + "/static/stories/",
    };
  },
  components: {
    ShowAllCards,
  },
  methods: {
    generateArrayObjects() {
      const infoCards = [
        {
          name: "Red Hood",
          title: "Synopsis",
          content: "Bla bla bla bla bla ",
          filename: "story_1.jpg",
        },
        {
          name: "Sabrina",
          title: "Synopsis",
          content: "Bla bla bla bla bla ",
          filename: "story_2.jpg",
        },
        {
          name: "Hänsel & Gretel",
          title: "Synopsis",
          content: "Bla bla bla bla bla ",
          filename: "story_3.jpg",
        },
      ];
      return infoCards;
    },
  },
};
</script>
