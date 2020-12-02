<template>
  <div id="app">
    <!--
    <Slider />
    <PersonCard name="Alex" filename="Alex" description="Refachero" />
    <SignInSignUp type="sign-in" />
    <Footer />
    -->
  </div>
</template>

<script>
import "tailwindcss/tailwind.css";
import "./assets/styles/index.css";
//import "font-awesome"
import Footer from "./components/Footer.vue";
import Slider from "./components/Slider.vue";
import PersonCard from "./components/PersonCard.vue";
import SignInSignUp from "./components/SignInSignUp.vue";

export default {
  name: "App",
  components: {
    Slider,
    PersonCard,
    SignInSignUp,
    Footer,
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
  margin-top: 60px;
}

img {
  margin: auto;
}
</style>

