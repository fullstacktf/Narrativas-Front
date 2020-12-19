<template>
  <header role="header">
    <nav
      class="navigationBar max-w-full h-18 lg:h-20 bg-black text-gray-400 text-lg flex items-center justify-between flex-row relative z-20"
    >
      <div class="flex flex-row items-center">
        <a href="/">
          <img
            class="h-20 mr-6 lg:mx-10 xl:mx-20"
            src="@/assets/img/logo.svg"
            alt="Logo"
          />
        </a>
        <div class="flex flex-row" v-if="!isMobile">
          <a
            class="hover:text-white mr-10 lg:mr-16 xl:mr-32 cursor-pointer"
            v-on:click="exploreMenuState"
            >Explore</a
          >
          <a class="hover:text-white truncate" href="/about">About us</a>
        </div>
      </div>
      <div class="pr-32 flex flex-row items-center" v-if="!isMobile">
        <a
          class="hover:text-white mr-6 lg:mr-10 xl:mr-20"
          href="#"
          v-on:click="emitSignPopup(false)"
          >Sign in</a
        >
        <a
          class="text-white inline-block rounded-lg bg-primary py-2 px-4"
          href="#"
          v-on:click="emitSignPopup(true)"
          >Sign up</a
        >
      </div>
      <div class="mr-10" v-if="isMobile">
        <i
          class="fas fa-bars hambugerButton text-white text-2xl cursor-pointer"
          v-on:click="hamburgerMenuState"
        ></i>
      </div>
    </nav>

    <!-- Explore menu -->
    <div
      class="invisible md:visible w-screen flex flex-row justify-center bg-black text-white pt-10 absolute z-10"
      v-if="enable"
    >
      <div
        class="md:w-8/12 xl:w-3/12 pr-10 md:px-16 flex flex-col justify-center"
        v-for="(section, index) in Sections"
        :key="index"
      >
        <img class="cursor-pointer" :src="section.img" alt="" />
        <h3 class="py-2">{{ section.title }}</h3>
        <p class="pb-4 text-gray-700 text-sm">{{ section.description }}</p>
      </div>
    </div>

    <!-- Nav list -->
    <div
      class="flex flex-col text-left w-screen bg-black text-white text-md md:hidden absolute z-10"
      v-if="hamburgerEnable"
    >
      <a
        class="py-2 pl-10 hover:bg-primary flex justify-between cursor-pointer"
        v-on:click="mobileExploreState"
        >Explore
        <span class="text-md text-white pr-12"><i class="fas fa-sort-down"></i></span
      ></a>

      <div
        class="exploreMobile w-screen h-full flex flex-col items-start bg-black text-white py-2 relative z-10 pb-4"
        v-show="mobileExploreEnable"
      >
        <div
          class="w-3/4 flex flex-col pl-6"
          v-for="(section, index) in Sections"
          :key="index"
        >
          <h3 class="py-2">{{ section.title }}</h3>
          <div class="flex justify-between items-center">
            <img class="cursor-pointer w-2/4" :src="section.img" alt="" />
            <p class="py-4 pl-4 text-gray-500 text-xs">
              {{ section.description }}
            </p>
          </div>
        </div>
      </div>

      <a class="py-2 pl-10 hover:bg-primary" href="/about">About us</a>
      <a class="py-2 pl-10 hover:bg-primary" v-on:click="emitSignPopup(false)">Sign in</a>
      <a class="py-2 pl-10 hover:bg-primary" v-on:click="emitSignPopup(true)">Sign up</a>
    </div>
  </header>
</template>

<script>
import EventBus from "@/event-bus";

export default {
  name: "Header",
  mounted() {
    this.onResize();
    EventBus.$on("REMOVE_SIGN_POPUP", () => {
      this.isSignOpened = false;
    });
  },
  data() {
    return {
      enable: false,
      hamburgerEnable: false,
      mobileExploreEnable: false,
      screenWidth: window.innerWidth,
      isSignOpened: false,
      Sections: [
        {
          img: require("../../assets/img/explore_1.jpg"),
          title: "Create your own stories online",
          description:
            "We offer you the tools to invent and conceive stories in an entertaining and intuitive way.",
        },
        {
          img: require("../../assets/img/explore_2.jpg"),
          title: "Customize your character",
          description:
            "Create all kinds of characters without restrictions. The limit is your imagination!!!",
        },
        {
          img: require("../../assets/img/explore_3.jpg"),
          title: "Anyone can create a story",
          description:
            "Let your imagination fly and immerse yourself in your stories. You will have the ability to create that adventure that you always dreamed of.",
        },
      ],
    };
  },
  computed: {
    isMobile() {
      return this.screenWidth < 768;
    },
  },
  methods: {
    onResize() {
      addEventListener("resize", () => {
        this.screenWidth = window.innerWidth;
        if (this.screenWidth < 768) {
          this.enable = false;
          const element = this.$el.querySelector(".navigationBar");
          element.classList.remove("line");
        } else {
          this.hamburgerEnable = false;
        }
      });
    },
    exploreMenuState() {
      this.enable = !this.enable;
      const element = this.$el.querySelector(".navigationBar");
      element.classList.toggle("line");
    },
    hamburgerMenuState() {
      this.hamburgerEnable = !this.hamburgerEnable;
    },
    mobileExploreState() {
      this.mobileExploreEnable = !this.mobileExploreEnable;
      const element = this.$el.querySelector(".exploreMobile");
      element.classList.toggle("lineLeft");
    },
    emitSignPopup(isSignUp) {
      if (this.isSignOpened) {
        EventBus.$emit("DELETE_SIGN_POPUP");
      } else {
        EventBus.$emit("SIGN_POPUP", isSignUp);
      }
      this.isSignOpened = !this.isSignOpened;
    },
  },
};
</script>

<style scoped>
.line {
  box-shadow: 0px 1px 0px 0px #fff;
}

.tall {
  height: 4rem;
}

.lineLeft {
  border-left: 1px solid #fff;
  margin-left: 40px;
  padding-left: 30px;
}
</style>
