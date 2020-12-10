<template>
  <div class="container flex text-white h-screen max-w-full md:p-48">
    <div class="start md:text-left p-6 md:w-2/5 pl-10 flex flex-col justify-around">
      <div class="">
        <h1 class="title text-5xl md:text-6xl text-shadow text-secondary">ABOUT US</h1>
        <p class="text-black">
          Phasellus suscipit libero turpis, nec ornare quam venenatis placerat.
          Suspendisse a urna sit amet tortor accumsan molestie. Mauris sit amet lorem vel
          arcu ullamcorper congue. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit.
        </p>
        <p class="text-gray-400">
          Etiam dictum, ex a volutpat gravida, tellus lectus dignissim augue, sit amet
          vehicula lorem tortor eget lectus. Pellentesque fermentum luctus erat, vel
          ultrices augue aliquet at. Nam pretium leo ipsum, vel tincidunt justo ultricies
          in. Ut ultricies ultrices dignissim.
        </p>
        <button
          class="rounded-full py-3 px-6 bg-secondary hover:bg-secondary-dark text-xs font-bold"
        >
          Get Started
        </button>
      </div>
    </div>
    <div v-show="!isMobile" md:class="w-3/5">
      <img src="@/assets/img/heroAboutUs.jpg" alt="Imagine" />
    </div>
  </div>
</template>

<script>
export default {
  name: "HeroAboutUs",
  mounted() {
    this.onResize();
  },
  data() {
    return {
      screenWidth: window.innerWidth,
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
        this.addRemoveClasses();
      });
      this.addRemoveClasses();
    },
    addRemoveClasses() {
      const container = this.$el;
      if (this.screenWidth < 768) {
        container.querySelector(".start").classList.add("bg-img");
        container.querySelector(".title").classList.add("text-shadow");
      } else {
        container.querySelector(".start").classList.remove("bg-img");
        container.querySelector(".title").classList.remove("text-shadow");
      }
    },
  },
};
</script>

<style scoped>
.bg-img {
  background-image: url("../../assets/img/heroAboutUsMobile.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}

.text-shadow {
  text-shadow: 2px 2px 8px black;
}
</style>
