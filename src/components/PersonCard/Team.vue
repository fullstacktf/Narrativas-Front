<template>
  <div role="team" class="flex flex-col items-center w-screen">
    <h3 class="text-secondary font-bold text-5xl pt-10">Team</h3>
    <div
      class="pb-10 flex flex-col flex-wrap md:flex-row items-center md:justify-center space-y-10 md:space-y-0 md:space-x-10 md:m-10"
    >
      <PersonCard name="Kevin Eliezer" filename="Kevin" location="Tenerife" />
      <PersonCard name="Himar Manuel" filename="Himar" location="Tenerife" />
      <PersonCard name="Alejandro" filename="Alex" location="Tenerife" />
      <PersonCard name="Adal" filename="Adal" location="Tenerife" />
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

