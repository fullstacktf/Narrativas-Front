<template>
  <div id="app">
    <!--
    <Slider />
    <SignInSignUp type="sign-in" />
    <PersonCard name="Alex" filename="Alex" description="Fullstack" />
    <InformationBlock />
    -->
    <Header />
    <Hero />
    <Parallax :url="assets/img/parallaxHome.jpg"></Parallax>
    <!-- <Footer /> -->
  </div>
</template>

<script>
import "tailwindcss/tailwind.css";
import "./assets/styles/index.css";

// import Footer from "./components/Footer.vue";
import Hero from "./components/Hero.vue";
import Header from "./components/Header.vue";
import Parallax from "./components/Parallax.vue"
// import Slider from "./components/Slider.vue";
// import PersonCard from "./components/PersonCard.vue";
// import SignInSignUp from "./components/SignInSignUp.vue";
// import InformationBlock from "./components/InformationBlock.vue";

export default {
  name: "App",
  components: {
    Header,
    Hero,
    Parallax,
  }
};
</script>

<style>
@import "./base.css";
#app {
  text-align: center;
}

img {
  margin: auto;
}
</style>
