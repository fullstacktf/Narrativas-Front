<template>
  <div id="app">
    <HeaderFather />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import "tailwindcss/tailwind.css";
import "./assets/styles/index.css";
import "./assets/styles/base.css";

import Footer from "./components/Footer/Footer";
import HeaderFather from "./components/Header/HeaderFather";
// import Character from "./components/Characters/character";

export default {
  name: "App",
  components: {
    HeaderFather,
    // Character,
    Footer
  },
};
</script>

<style>

#app {
  text-align: center;
}

img {
  margin: auto;
}
</style>
