<template>
  <div ref="insertLogin" class="center-screen w-full h-full">
  </div>
</template>

<script>
import SignInSignUp from "@/components/SignInSignUp/SignInSignUp.vue";
import Vue from "vue";
import EventBus from "@/event-bus";

export default {
  name: "Modal",
  methods: {
    removeSignIn() {
      this.instance.$destroy();
      this.$el.removeChild(this.instance.$el);
      this.instance = null;
    },
  },
  mounted() {
    EventBus.$on("SIGN_POPUP", (payload) => {
      if (!this.instance) {
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
