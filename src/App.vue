<template>
  <div id="app">
    <!-- <Header /> -->
    <!-- <HeaderSignIn /> -->
    <HeaderFather />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import "tailwindcss/tailwind.css";
import "./assets/styles/index.css";
import "./assets/styles/base.css";

// import Header from "./components/Header/Header";
import HeaderSignIn from "./components/Header/HeaderSignIn";
import Footer from "./components/Footer/Footer";
import HeaderFather from "./components/Header/HeaderFather";

export default {
  name: "App",
  components: {
    // Header,
    HeaderFather,
    // HeaderSignIn,
    Footer,
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
}

img {
  margin: auto;
}
</style>
