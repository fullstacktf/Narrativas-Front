<template>
  <div class="flex flex-col items-center w-screen">
    <h3 class="text-secondary font-bold text-2xl pt-10">Team</h3>
    <p class="w-4/6 text-gray-500 m-10">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mi mauris, dapibus
      vel massa et, posuere lacinia urna. Morbi quam magna, bibendum in dui ac, sodales
      cursus orci. Duis pretium facilisis erat, vitae facilisis diam varius in. Donec
      sagittis faucibus cursus.
    </p>
    <div
      class="pb-10 flex flex-col md:flex-row items-center md:justify-center space-y-10 md:space-y-0 md:space-x-10 md:m-10"
    >
      <PersonCard
        name="Kevin Eliezer García Peña"
        filename="Kevin"
        description="Fullstack"
      />
      <PersonCard
        name="Himar Manuel Barquín Carrasco"
        filename="Himar"
        description="Fullstack"
      />
      <PersonCard
        name="Alejandro Ravelo Moreno"
        filename="Alex"
        description="Fullstack"
      />
      <PersonCard name="Adal Díaz Fariña" filename="Adal" description="Fullstack" />
    </div>
  </div>
</template>

<script>
import PersonCard from "@/components/PersonCard/PersonCard.vue";

export default {
  name: "Team",
  components: {
    PersonCard,
  },
};
</script>

<style></style>
