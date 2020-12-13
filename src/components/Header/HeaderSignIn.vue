<template>
  <div>
    <nav
      class="navigationBar max-w-full h-18 lg:h-20 bg-black text-gray-600 text-lg flex items-center justify-between md:justify-around flex-row relative z-10"
    >
      <a href="/">
        <img
          v-if="!isMobile"
          class="h-20 m-0 py-2 mr-6 lg:mx-10 xl:mx-20"
          src="@/assets/img/logo_completo.jpg"
          alt="Logo"
        />
        <img
          v-else
          class="logo m-0 w-2/12 mr-6 lg:mx-10 xl:mx-20"
          src="@/assets/img/logo.svg"
          alt="Logo"
        />
      </a>
      <div v-if="!isMobile">
        <a class="hover:text-white truncate cursor-pointer" href="/about"
          >About us</a
        >
        <a class="hover:text-white truncate ml-10 lg:ml-16 cursor-pointer"
          >Explore Story</a
        >
        <a class="hover:text-white truncate m-10 lg:ml-16 cursor-pointer"
          >Dashboard</a
        >
      </div>
      <div class="flex items-center" v-if="!isMobile">
        <button v-on:click="menuState" class="cursor-pointer outline-none">
          <i class="fas fa-plus pr-1 text-white"></i
          ><i class="fas fa-sort-down text-white"></i>
        </button>

        <div
          class="card alignPlusMenu flex flex-col absolute z-10 bg-white text-left w-auto"
          v-if="enable"
        >
          <span class="h-3 bg-white"></span>
          <a
            class="pb-2 pt-2 px-5 hover:bg-primary hover:text-white cursor-pointer"
            >New story</a
          >
          <a class="py-2 px-5 hover:bg-primary hover:text-white cursor-pointer"
            >New character</a
          >
        </div>

        <button
          class="flex items-center outline-none"
          v-on:click="profileState"
        >
          <div class="bg-white w-12 h-12 rounded-full ml-5 mr-1"></div>
          <i class="fas fa-sort-down text-white"></i>
        </button>

        <div
          class="card alignProfile bg-white w-auto absolute z-10 text-left"
          v-if="profile"
        >
          <div class="pl-4 pt-10 pb-4 flex flex-col border-b-2 border-gray-400">
            <p>Sign in as</p>
            <p class="font-bold">User name</p>
          </div>
          <div class="flex flex-col border-b-2 border-gray-400">
            <a
              class="pb-2 pt-2 px-5 hover:bg-primary hover:text-white cursor-pointer"
              >Profile</a
            >
          </div>
          <div class="flex flex-col border-b-2 border-gray-400">
            <a
              class="pb-2 pt-2 px-5 hover:bg-primary hover:text-white cursor-pointer"
              >Your stories</a
            >
            <a
              class="py-2 px-5 hover:bg-primary hover:text-white cursor-pointer"
              >Your character</a
            >
          </div>
          <div class="flex flex-col">
            <a
              class="pb-2 pt-2 px-5 hover:bg-primary hover:text-white cursor-pointer"
              >Settings</a
            >
            <a
              class="py-2 px-5 hover:bg-primary hover:text-white cursor-pointer"
              v-on:click="disconnect()"
              >Log Out</a
            >
          </div>
        </div>
      </div>

      <div class="mr-10" v-if="isMobile">
        <i
          class="fas fa-bars hambugerButton text-white text-2xl cursor-pointer"
          v-on:click="hamburgerMenuState"
        ></i>
      </div>
    </nav>

    <!-- Nav list -->
    <div
      class="pt-2 flex flex-col text-left w-screen bg-black text-white text-md md:hidden absolute z-10"
      v-if="hamburgerEnable"
    >
      <div class="flex flex-col border-b-2 border-white">
        <a class="py-2 pl-10 hover:bg-primary" href="/about">About us</a>
        <a class="py-2 pl-10 hover:bg-primary" href="">Explore Stories</a>
        <a class="py-2 pl-10 hover:bg-primary" href="">Dashboard</a>
        <a class="py-2 pl-10 hover:bg-primary" href="">Your stories</a>
        <a class="py-2 pl-10 hover:bg-primary" href="">Your character</a>
      </div>
      <div class="flex flex-col">
        <a class="py-2 pl-10 hover:bg-primary" href="">Settings</a>
        <a class="py-2 pl-10 hover:bg-primary" href="">Profile</a>
        <a class="py-2 pl-10 hover:bg-primary" href="">Logout</a>
      </div>
    </div>
  </div>
</template>

<script>
import EventBus from "@/event-bus";

export default {
  name: "Header",
  mounted() {
    this.onResize();
  },
  data() {
    return {
      hamburgerEnable: false,
      enable: false,
      profile: false,
      screenWidth: window.innerWidth,
      Sections: [
        {
          img: "@/assets/img/explore_1.jpg",
          title: "Create your own stories online",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sollicitudin consectetur faucibus.",
        },
        {
          img: "@/assets/img/explore_2.jpg",
          title: "Customize your character",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sollicitudin consectetur faucibus.",
        },
        {
          img: "@/assets/img/explore_3.jpg",
          title: "Any one can create a story",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sollicitudin consectetur faucibus.",
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
    hamburgerMenuState() {
      this.hamburgerEnable = !this.hamburgerEnable;
      const element = this.$el.querySelector(".logo");
      const burger = this.$el.querySelector(".hambugerButton");
      element.classList.toggle("changelogoWidth");
    },
    menuState() {
      this.enable = !this.enable;
    },
    profileState() {
      this.profile = !this.profile;
    },
    disconnect() {
      EventBus.$emit("DISCONNECT");
    },
  },
};
</script>

<style scoped>
    .card {
        clip-path: polygon(78% 0, 83% 9%, 100% 9%, 100% 100%, 0 100%, 0 9%, 73% 9%);
    }

    .alignPlusMenu {
        top: 5rem;
        right: 11vw;
    }

    .alignPlusMenu {
    top: 5rem;
    right: 11vw;
    }

    .alignProfile {
    top: 5rem;
    right: 7vw;
    }

    .changelogoWidth {
    padding-top: 5vh;
    padding-bottom: 4vh;
    padding-left: 5vw;
    transform: scale(2.7);
}
</style>
