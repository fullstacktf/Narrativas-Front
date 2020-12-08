<template>
  <footer class="footer bg-black text-gray-400">
    <!--bg-red-900-->
    <div class="title">
      <img
        v-show="isMobile"
        src="../assets/img/logo.svg"
        class="w-52 h-40 pt-5"
        alt="ROLLIFY"
      />
      <img
        v-show="!isMobile"
        src="../assets/img/logo_completo.png"
        class="w-52 h-40"
        alt="ROLLIFY"
      />
    </div>

    <div
      class="nav flex flex-col md:flex-row justify-center md:space-x-10 mb-5 -mt-5"
    >
      <a href="" class="hover:text-white md:hover:bg-primary p-3 rounded"
        >About us</a
      >
      <a href="" class="hover:text-white md:hover:bg-primary p-3 rounded"
        >Privacy Policy</a
      >
      <a href="" class="hover:text-white md:hover:bg-primary p-3 rounded"
        >Terms of Service</a
      >
      <a href="" class="hover:text-white md:hover:bg-primary p-3 rounded"
        >Security</a
      >
    </div>
    <div class="media flex justify-center space-x-10 text-2xl">
      <a href="https://twitter.com/"
        ><i class="fa fa-twitter hover:text-white"></i
      ></a>
      <a href="https://www.instagram.com/"
        ><i class="fa fa-instagram hover:text-white"></i
      ></a>
      <a href="https://github.com/fullstacktf/Narrativas-Front"
        ><i class="fa fa-github hover:text-white"></i
      ></a>
      <a href="https://www.facebook.com/"
        ><i class="fa fa-facebook hover:text-white"></i
      ></a>
    </div>
    <div v-show="isMobile" class="copyright-mobile"></div>
    <div
      class="copyright flex justify-center md:justify-between md:pr-4 ml-4 md:pb-4 text-xs text-white md:text-gray-400"
    >
      <p>
        ©<span>{{ currentYear }}</span> Rollify. All rights reserved
      </p>
      <button v-show="!isMobile" class="">
        <i class="fas fa-caret-square-up text-2xl"></i>
      </button>
    </div>
    <div v-show="isMobile" class="copyright-mobile"></div>
    <div v-show="isMobile" class="flex justify-center pb-6 space-x-6">
      <p>TOP THE SURFACE</p>
      <button>
        <i class="fas fa-caret-square-up text-2xl"></i>
      </button>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  mounted() {
    window.onresize = () => (this.screenWidth = window.innerWidth);
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
  },
  methods: {
    getCurrentYear() {
      const date = new Date();
      return date.getFullYear();
    },
  },
};
</script>
<style>
.copyright-mobile {
  margin: 30px 0;
  border-top: 1px solid #94a3b8;
}
</style>