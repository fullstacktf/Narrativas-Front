<template>
  <div class="flex flex-col items-center w-screen">
    <h3 class="text-secondary font-bold text-5xl pt-10">Team</h3>
    <div
      class="pb-10 flex flex-col md:flex-row items-center md:justify-center space-y-10 md:space-y-0 md:space-x-10 md:m-10"
    >
      <!-- <PersonCard
        name="Kevin Eliezer García Peña"
        filename="Kevin"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mi mauris, dapibus vel massa et, posuere lacinia urna. Morbi quam magna, bibendum in dui ac, sodales cursus orci."
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
      <PersonCard name="Adal Díaz Fariña" filename="Adal" description="Fullstack" /> -->

      <PersonCard2 name="Kevin Eliezer" filename="Kevin" location="Tenerife" />
      <PersonCard2 name="Himar Manuel" filename="Himar" location="Tenerife" />
      <PersonCard2 name="Alejandro PUTO AMO" filename="Alex" location="Tenerife" />
      <PersonCard2 name="Adal" filename="Adal" location="Tenerife" />
    </div>
  </div>
</template>

<script>
import PersonCard2 from "@/components/PersonCard/PersonCard2.vue";

export default {
  name: "Team",
  components: {
    PersonCard2,
  },
};
</script>

<style></style>
