<template>
  <div>
    <HeaderSignIn v-if="this.isConnected" />
    <Header v-else />
  </div>
</template>

<script>
import Header from "./Header.vue";
import HeaderSignIn from "./HeaderSignIn";
import { getCookie, deleteCookie } from "@/utils/utils";
import EventBus from "@/event-bus";

export default {
  name: "HeaderFather",
  components: {
    Header,
    HeaderSignIn,
  },
  data() {
    return {
      isSignedIn: false,
    };
  },
  computed: {
    isConnected() {
      return this.isSignedIn;
    },
  },
  beforeMount() {
    const cookie = getCookie("token");
    if (cookie) {
      this.isSignedIn = true;
    }

    EventBus.$on("SIGNED_IN", () => {
      this.isSignedIn = true;
      location.assign("/");
    });

    EventBus.$on("DISCONNECT", () => {
      this.isSignedIn = false;
      deleteCookie("token");
      location.assign("/");
    });
  },
};
</script>

