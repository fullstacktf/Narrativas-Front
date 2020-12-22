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
          content: "An innocent girl story",
          filename: "story_1.jpg",
        },
        {
          name: "Sabrina",
          title: "Synopsis",
          content: "Sabrina Spellman must reconcile her dual nature as a half-Witch, half-mortal while fighting the evil forces that threaten her, her family and the daylight world humans inhabit.",
          filename: "story_2.jpg",
        },
        {
          name: "Hänsel & Gretel",
          title: "Synopsis",
          content: "When their mother descends into madness, siblings Gretel and Hansel must fend for themselves in the dark and unforgiving woods.",
          filename: "story_3.jpg",
        },
      ];
      return infoCards;
    },
  },
};
</script>
