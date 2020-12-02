<template>
  <div id="app" class="flex mx-8 space-x-8">
    <PersonCard name="Kevin Eliezer García Peña" filename="Kevin" description="Sexy y guapeton aguacate de chocolate con tarta de queso lorem lipsum y croquetas de avellana" />
    <PersonCard name="Himar Manuel Barquín Carrasco" filename="Himar2" description="Sexy y guapeton" />
    <PersonCard name="Alejandro Ravelo Moreno" filename="Alex" description="Sexy y guapeton" />
    <PersonCard name="Adal Díaz Fariña" filename="Adal2" description="Sexy y guapeton" />
  </div>
</template>

<script>
import PersonCard from "./components/PersonCard.vue";

export default {
  name: "App",
  components: {
    PersonCard
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

img {
  margin: auto;
}
</style>
