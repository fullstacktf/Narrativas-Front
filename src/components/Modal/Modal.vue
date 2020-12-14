<template>
  <div ref="insertLogin"></div>
</template>

<script>
import SignInSignUp from "@/components/SignInSignUp/SignInSignUp.vue";
import { deleteCookie } from "@/utils/utils"
import Vue from "vue";
import EventBus from "@/event-bus";

export default {
  name: "Modal",
  methods: {
    removeSignIn() {
      this.instance.$destroy();
      this.$el.removeChild(this.instance.$el);
      this.instance = null;
      this.$refs.insertLogin.removeAttribute("class");
    },
  },
  mounted() {
    EventBus.$on("SIGN_POPUP", (payload) => {
      if (!this.instance) {
        this.$refs.insertLogin.classList.add("center-screen");
        this.$refs.insertLogin.classList.add("w-full");
        this.$refs.insertLogin.classList.add("h-full");

        let signComponent = Vue.extend(SignInSignUp);
        this.instance = new signComponent();
        this.instance.$mount();

        this.$refs.insertLogin.appendChild(this.instance.$el);
      }
    });

    EventBus.$on("REMOVE_SIGN_POPUP", () => {
      this.removeSignIn();
    });

    EventBus.$on("DELETE_SIGN_POPUP", () => {
      this.removeSignIn();
    });

    EventBus.$on("SIGNED_IN", () => {
      this.removeSignIn();
    });

    EventBus.$on("DISCONNECT", () => {
      this.removeSignIn();
      deleteCookie("token");
    });
  },
};
</script>

<style scoped>
.center-screen {
  position: fixed;
  top: 10%;
}
</style>
