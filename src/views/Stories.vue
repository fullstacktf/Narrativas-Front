<template>
  <div>
    <ShowAllCards title="Stories" :cards="infoCards" />
  </div>
</template>

<script>
import ShowAllCards from "@/components/GridCards/ShowAllCards.vue";

export default {
  name: "Stories",
  data() {
    return {
      infoCards: this.generateArrayObjects(),
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
          filename: "story_1",
        },
        {
          name: "Sabrina",
          title: "Synopsis",
          content: "Bla bla bla bla bla ",
          filename: "story_2",
        },
        {
          name: "Hänsel & Gretel",
          title: "Synopsis",
          content: "Bla bla bla bla bla ",
          filename: "story_3",
        },
      ];
      return infoCards;
    },
  },
};
</script>
