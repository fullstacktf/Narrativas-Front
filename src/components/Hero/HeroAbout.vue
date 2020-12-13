<template>
    <div class="max-w-full h-screen bg-cover bg-no-repeat flex flex-col pb-80 items-center justify-center" v-bind:style="{ backgroundImage: `url(${this.bgImg()})` }">
        <div class="relative w-7/12 md:w-7/12 h-80 flex flex-col md:bg-primary opacity-50 items-center justify-center">
        </div>
        <div class="absolute mt-40 md:mt-0 z-5">
            <h1 class="title text-5xl md:text-6xl text-shadow text-secondary pb-2">
            ABOUT US
            </h1>
            <div class="flex flex-col items-center opacity-100">
                <h3 class="w-7/12 text-black font-bold">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </h3>
                <p class="w-7/12 py-2 text-white md:text-gray-700 font-bold text-shadow">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor finibus
                    lorem, ut cursus quam ullamcorper quis. Sed ac laoreet dolor. Vestibulum ut
                    orci consectetur, imperdiet nibh sit amet, luctus odio.
                </p>
            </div>
            <button
            role = "button"
            class="cursor-pointer w-3/12 mt-2 text-white rounded-full py-3 px-6 bg-secondary hover:bg-secondary-dark text-xs font-bold"
            >
            Get Started
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: "HeroAbout",
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
        bgImg() {
            return this.isMobile ? require('@/assets/img/heroAboutUsMobile.jpg') : require('@/assets/img/about.jpg')
        }
    }
}
</script>

<style>

</style>