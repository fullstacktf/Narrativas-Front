<template>
  <div role="team" class="flex flex-col items-center w-full">
    <h3 class="text-secondary font-bold text-5xl pt-10 py-6">Team</h3>
    <div
      class="pb-10 flex flex-col flex-wrap md:flex-row items-center md:justify-center"
    >
      <PersonCard
        class="my-4 mx-6"
        name="Kevin Eliezer"
        filename="Kevin"
        location="Tenerife"
      />
      <PersonCard
        class="my-4 mx-6"
        name="Himar Manuel"
        filename="Himar"
        location="Tenerife"
      />
      <PersonCard
        class="my-4 mx-6"
        name="Alejandro"
        filename="Alex"
        location="Tenerife"
      />
      <PersonCard
        class="my-4 mx-6"
        name="Adal"
        filename="Adal"
        location="Tenerife"
      />
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

