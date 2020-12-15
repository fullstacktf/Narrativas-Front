<template>
  <div
    role="personCard"
    class="container w-60 h-88 rounded overflow-hidden shadow-2xl text-left text-sm bg-white flex flex-col items-center cursor-pointer"
  >
        <div class="bg bg-secondary w-full h-32 relative bg-contain" v-bind:style="{ backgroundImage: `url(${this.background})`}"></div>
        <div class="profile w-32 h-32 rounded-full border-solid border-4 border-white shadow-md absolute z-5 mt-14 bg-contain" v-bind:style="{ backgroundImage: `url(${this.bgFilename(this.filename)})` }"></div>
        <div class="icons text-white flex mt-16">
            <i class="fab fa-twitter mx-8"></i>
            <i class="fab fa-github"></i>
            <i class="fab fa-linkedin-in mx-8"></i>
        </div>
        <div class="data w-full h-46 flex flex-col justify-start items-center">
            <h1 class="uppercase py-2">{{ this.name }}</h1>
            <span class="text-gray-500"><i class="fas fa-map-marker-alt pr-1"></i>{{ this.location }}</span>
            <button class="py-2 bg-blue my-2 px-4 rounded-lg uppercase text-white focus:outline-none font-semibold">Hover to find me</button>
        </div>

  </div>
</template>

<script>
export default {
    name: "PersonCard2",
    props: {
        name: String,
        filename: String,
        location: String,
    },
    data() {
        return {
            background: require("@/assets/img/nebulosa.jpg"),
        };
    },
    methods: {
        bgFilename(filename) {
            return require("@/assets/img/" + this.filename + ".jpg");
        },
    },

}
</script>

<style scoped>
    .container{
        margin: 10px * 5 auto;
        transition: all 0.8s cubic-bezier(0.8, -0.4, 0.2, 1.7);
        transform-style: preserve-3d;
    }

    .container:hover{
        transform: rotateY(180deg);
        background-color: black;
    }

    .container:hover .bg,
    .container:hover .profile,
    .container:hover .data {
        transition: all 0.8s cubic-bezier(0.8, -0.4, 0.2, 1.7);
        opacity: 0;
    }

    .icons{
        opacity: 0;
        font-size: 32px;
        position: relative;
        z-index: 2;
    }

    .container:hover .icons {
        transition-delay: 0.7s;
        opacity: 1;
    }

    .fa-twitter:hover, .fa-github:hover, .fa-linkedin-in:hover{
        transform: translateY(-5px);
    }
</style>
