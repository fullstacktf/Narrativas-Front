<template>
  <div>
    <ShowAllCards title="Characters" :cards="infoCards" />
  </div>
</template>

<script>
import ShowAllCards from "@/components/GridCards/ShowAllCards.vue";

export default {
  name: "Characters",
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
          name: "Buzz Lightyear",
          title: "Description",
          content: "Bla bla bla bla bla ",
          filename: "character_1",
        },
        {
          name: "Ariel",
          title: "Description",
          content: "Bla bla bla bla bla ",
          filename: "character_2",
        },
        {
          name: "Jean Gray",
          title: "Description",
          content: "Bla bla bla bla bla ",
          filename: "character_3",
        },
      ];
      return infoCards;
    },
  },
};
</script>
