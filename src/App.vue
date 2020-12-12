<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import "tailwindcss/tailwind.css";
import "./assets/styles/index.css";
import "./assets/styles/base.css";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

export default {
  name: "App",
  components: {
    Header,
    Footer,
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
