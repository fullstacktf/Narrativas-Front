<template>
  <div id="app">
    <!-- 
      <Header />
    <router-view />
    <Footer /> 
    -->
    <HeroAboutUs />
  </div>
</template>

<script>
import "tailwindcss/tailwind.css";
import "./assets/styles/index.css";

// import Footer from "./components/Footer/Footer.vue";
// import Hero from "./components/Hero/Hero.vue";
import HeroAboutUs from "./components/Hero/HeroAboutUs.vue";
// import Header from "./components/Header/Header.vue";
// import Slider from "./components/Slider.vue";
// import PersonCard from "./components/PersonCard/PersonCard.vue";
// import SignInSignUp from "./components/SignInSignUp.vue";
// import InformationBlock from "./components/InformationBlock.vue";

export default {
  name: "App",
  components: {
    HeroAboutUs,
  },
};
</script>

<style>
@import "./base.css";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

img {
  margin: auto;
}
</style>
