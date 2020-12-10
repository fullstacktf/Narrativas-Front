<template>
  <div id="app">
    
  </div>
</template>

<script>
import "tailwindcss/tailwind.css";
import "./assets/styles/index.css";
//import "font-awesome"
// import Hero from "./components/Hero.vue";
// import Slider from "./components/Slider.vue";
// import PersonCard from "./components/PersonCard.vue";
//import SignInSignUp from "./components/SignInSignUp.vue";

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

export default {
  name: "App",
  components: {
    Header,
    Footer
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

