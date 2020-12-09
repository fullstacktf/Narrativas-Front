<template>
  <div id="app">
    <!--
    <Slider />
    <SignInSignUp type="sign-in" />
    <InformationBlock />
    -->
    <PersonCard name="Adal" filename="Adal" description="Adal es un Adal muy Adal" />
    <!-- <Header /> -->
    <!-- <div style="height:1000px;">Content very important :)</div> -->
    <!-- <Hero /> -->
    <!-- <Footer /> -->
  </div>
</template>

<script>
import "tailwindcss/tailwind.css";
import "./assets/styles/index.css";

// import Footer from "./components/Footer/Footer.vue";
// import Hero from "./components/Hero/Hero.vue";
// import Header from "./components/Header/Header.vue";
// import Slider from "./components/Slider.vue";
import PersonCard from "./components/PersonCard/PersonCard.vue";
// import SignInSignUp from "./components/SignInSignUp.vue";
// import InformationBlock from "./components/InformationBlock.vue";

export default {
  name: "App",
  components: {
    PersonCard
  },
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
