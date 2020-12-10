<template>
  <div id="app">
    <!--
    <Slider />
    <SignInSignUp type="sign-in" />
    <InformationBlock />
    <PersonCard name="Adal" filename="Adal" description="Adal es un Adal muy Adal" />
    <Header />
    <Hero />
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
    HeroAboutUs
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
