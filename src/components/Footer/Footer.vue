<template>
  <footer role="footer" class="footer bg-black text-gray-400">
    <div class="title flex justify-center">
      <img
        v-if="isMobile"
        src="@/assets/img/logo.svg"
        class="w-52 h-40 pt-5"
        alt="ROLLIFY"
      />
      <img v-else src="@/assets/img/logo_completo.jpg" class="my-10 w-104 h-20" alt="ROLLIFY" />
    </div>

    <div
      class="nav flex flex-col md:flex-row justify-center items-center md:space-x-10 mb-5 -mt-5"
    >
      <a href="/about" class="hover:text-white md:hover:bg-primary p-3 rounded">About us</a>
      <a href="" class="hover:text-white md:hover:bg-primary p-3 rounded"
        >Privacy Policy</a
      >
      <a href="" class="hover:text-white md:hover:bg-primary p-3 rounded"
        >Terms of Service</a
      >
      <a href="" class="hover:text-white md:hover:bg-primary p-3 rounded">Security</a>
    </div>
    <div class="media flex justify-center space-x-10 text-2xl">
      <a role="twitter" href="https://twitter.com/">
        <i class="fa fa-twitter hover:text-white"></i>
      </a>
      <a role="instagram" href="https://www.instagram.com/">
        <i class="fa fa-instagram hover:text-white"></i>
      </a>
      <a role="github" href="https://github.com/fullstacktf/Narrativas-Front">
        <i class="fa fa-github hover:text-white"></i>
      </a>
      <a role="facebook" href="https://www.facebook.com/">
        <i class="fa fa-facebook hover:text-white"></i>
      </a>
    </div>
    <div v-if="isMobile" class="copyright-mobile"></div>
    <div
      class="copyright flex justify-center md:justify-between md:pr-4 ml-4 md:pb-4 text-xs text-white md:text-gray-400"
    >
      <p>©{{ currentYear }} Rollify. All rights reserved</p>
      <button role="button" v-if="!isMobile" v-on:click="goToTheTop">
        <i class="fas fa-caret-square-up text-2xl"></i>
      </button>
    </div>
    <div v-if="isMobile" class="copyright-mobile"></div>
    <div v-if="isMobile" class="flex justify-center pb-6 space-x-6">
      <p>TOP THE SURFACE</p>
      <button role="button" v-on:click="goToTheTop">
        <i class="fas fa-caret-square-up text-2xl"></i>
      </button>
    </div>
  </footer>
</template>

<script>
import "../../assets/styles/index.css";
import "../../assets/styles/base.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faTwitter,
  faInstagram,
  faGithub,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

library.add(faTwitter, faInstagram, faGithub, faFacebook);

export default {
  name: "Footer",
  mounted() {
    addEventListener("resize", () => (this.screenWidth = window.innerWidth));
  },
  data() {
    return {
      currentYear: this.getCurrentYear(),
      screenWidth: window.innerWidth,
    };
  },
  computed: {
    isMobile() {
      return this.screenWidth < 768;
    },
    twitterIcon() {
      return faTwitter;
    },
  },
  methods: {
    getCurrentYear() {
      const date = new Date();
      return date.getFullYear();
    },
    goToTheTop() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    },
  },
};
</script>
<style scoped>
.copyright-mobile {
  margin: 30px 0;
  border-top: 1px solid #94a3b8;
}
</style>
