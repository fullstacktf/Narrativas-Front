<template>
  <div id="app">
    <SignInSignUp type="sign-in" />
  </div>
</template>

<script>
import SignInSignUp from "./components/SignInSignUp.vue";

export default {
  name: "App",
  components: {
    SignInSignUp,
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
