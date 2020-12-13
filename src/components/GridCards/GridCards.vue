<template>
  <div>
    <h1 class="text-4xl m-10">
      {{ title }} <span class="text-gray-500">({{ total }})</span>
    </h1>
    <div
      class="cards flex flex-col md:flex-row items-center md:justify-center space-y-10 md:space-y-0 md:space-x-10 md:m-10"
    >
      <Card
        name="BUZZ LIGHTYEAR"
        title="Description"
        content="Lorem ipsum bla bla bla"
        filename="character_1"
      />
      <Card
        name="ARIEL"
        title="Description"
        content="Lorem ipsum bla bla bla"
        filename="character_2"
      />
      <Card
        name="JEAN GRAY"
        title="Description"
        content="Lorem ipsum bla bla bla"
        filename="character_3"
      />
      <NewCard
        name="ADD NEW ITEM"
        title="Description"
        content="Lorem ipsum bla bla bla"
        filename="newCharacter"
      />
    </div>
    <a class="mb-5 mt-5 md:mt-0 font-oswald" href="/characters"
      >SEE MORE <i class="fa fa-eye text-xl text-primary" aria-hidden="true"></i
    ></a>
  </div>
</template>

<script>
import Card from "@/components/GridCards/Card.vue";
import NewCard from "@/components/GridCards/NewCard.vue";

export default {
  name: "GridCards",
  props: {
    title: String,
    total: Number,
  },
  components: {
    Card,
    NewCard,
  },
};
</script>

<style></style>
