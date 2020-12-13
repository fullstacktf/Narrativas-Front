<template>
  <div>
    <ShowAllCards title="Characters" :total="5" />
  </div>
</template>

<script>
import ShowAllCards from "@/components/GridCards/ShowAllCards.vue";

export default {
  name: "Characters",
  components: {
    ShowAllCards,
  },
};
</script>
