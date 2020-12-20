<template>
  <div
    role="personCard"
    class="container w-60 h-88 rounded overflow-hidden shadow-2xl text-left text-sm bg-white flex flex-col items-center cursor-pointer"
  >
        <div role="background" class="bg bg-secondary w-full h-56 bg-contain" v-bind:style="{ backgroundImage: `url(${this.background})`}"></div>
        <div role="CharacterImage" class="profile w-32 h-32 rounded-full border-solid border-4 border-white shadow-md absolute z-5 mt-12 bg-contain" v-bind:style="{ backgroundImage: `url(${this.bgFilename(this.filename)})` }"></div>
        <div class="icons text-white flex mt-14">
            <a role="twitterLink" :href="this.twitter">
                <i class="fab fa-twitter mx-8"></i>
            </a>
            <a role="githubLink" :href="this.github">
                <i class="fab fa-github"></i>
            </a>
            <a role="linkedinLink" :href="this.linkedin">
                <i class="fab fa-linkedin-in mx-8"></i>
            </a>
        </div>
        <div class="data w-full h-68 flex flex-col justify-start items-center">
            <h1 class="uppercase py-2">{{ this.name }}</h1>
            <span class="text-gray-500"><i class="fas fa-map-marker-alt pr-1"></i>{{ this.location }}</span>
            <button class="py-2 bg-blue my-2 px-4 rounded-lg uppercase text-white focus:outline-none font-semibold">Hover to find me</button>
        </div>

  </div>
</template>

<script>
export default {
    name: "PersonCard",
    props: {
        name: String,
        filename: String,
        location: String,
        twitter: String,
        github: String,
        linkedin: String
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
        transition: all 0.8s cubic-bezier(0.8, -0.4, 0.2, 1.7);
        transform-style: preserve-3d;
    }

    .container:hover{
        transform: rotateY(180deg);
        background-color: black;
    }

    .bg, .profile, .data {
        backface-visibility: hidden;
        transition: all 0.8s cubic-bezier(0.8, -0.4, 0.2, 1.7);
        transform-style: preserve-3d;
    }

    .container:hover .bg,
    .container:hover .profile,
    .container:hover .data {
        transform: rotateY(180deg);
        transition: all 0.8s cubic-bezier(0.8, -0.4, 0.2, 1.7);
    }

    .icons{
        font-size: 32px;
        z-index: 2;
    }

    .fa-linkedin-in, .fa-github, .fa-twitter {
        opacity: 0;
    }

    .container:hover .fa-linkedin-in{
        transition-delay: 0.7s;
        opacity: 1;
    }

    .container:hover .fa-github{
        transition-delay: 0.8s;
        opacity: 1;
    }

    .container:hover .fa-twitter{
        transition-delay: 0.9s;
        opacity: 1;
    }

    .container:hover .fa-twitter:hover,
    .container:hover .fa-linkedin-in:hover,
    .container:hover .fa-github:hover{
        transition-delay: 0.0s;
        animation: pulse 5s ease-in;
    }


    @keyframes pulse{
        0% {
            color: #5C3FFA;
        }
        100% {
            color: #fff;
        }
    }
</style>
