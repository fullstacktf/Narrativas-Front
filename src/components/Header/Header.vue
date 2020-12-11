<template>
	<div> 
		<nav class="navigationBar max-w-full h-18 lg:h-20 bg-black text-gray-600 text-lg flex items-center justify-between flex-row relative z-10" v-if="!this.signIn">
			<div class="flex flex-row items-center">
				<img class="h-20 mr-6 lg:mx-10 xl:mx-20" src="@/assets/img/logo.svg" alt="Logo"/>
				<div class="flex flex-row" v-if="!isMobile">
					<a class="hover:text-white mr-10 lg:mr-16 xl:mr-32  cursor-pointer" v-on:click="exploreMenuState">Explore</a>
					<a class="hover:text-white truncate">About us</a>
				</div>
			</div>  
			<div class="pr-32 flex flex-row items-center" v-if="!isMobile">
				<a class="hover:text-white mr-6 lg:mr-10 xl:mr-20" href="">Sign in</a>
				<a class="text-white inline-block rounded-lg bg-primary py-2 px-4" href="">Sign up</a>
			</div>
			<div class="mr-10" v-if="isMobile">
					<i class="fas fa-bars hambugerButton text-white text-2xl cursor-pointer" v-on:click="hamburgerMenuState"></i>
			</div>
		</nav>

    <nav class="navigationBar max-w-full h-18 lg:h-20 bg-black text-gray-600 text-lg flex items-center justify-between md:justify-around flex-row relative z-10" v-if="this.signIn">
			<img v-if="!isMobile" class="h-20 mr-6 lg:mx-10 xl:mx-20" src="@/assets/img/logo_completo.png" alt="Logo"/>
      <img v-else class="m-0 h-20 mr-6 lg:mx-10 xl:mx-20" src="@/assets/img/logo.svg" alt="Logo"/>
      <div class="" v-if="!isMobile">
				<a class="hover:text-white truncate cursor-pointer">About us</a>
        <a class="hover:text-white truncate ml-10 lg:ml-16 cursor-pointer">Explore Story</a>
        <a class="hover:text-white truncate m-10 lg:ml-16 cursor-pointer">Dashboard</a> 
			</div>
      <div class="flex items-center" v-if="!isMobile">
        <i class="fas fa-plus pr-1 cursor-pointer text-white"></i><i class="fas fa-sort-down cursor-pointer text-white"></i>
        <button class="bg-white rounded-full w-12 h-12 ml-5"></button>
      </div>

			<div class="mr-10" v-if="isMobile">
					<i class="fas fa-bars hambugerButton text-white text-2xl cursor-pointer" v-on:click="hamburgerMenuStateSignIn"></i>
			</div>
		</nav>

		<!-- Explore menu -->
		<div class = "invisible md:visible w-screen h-full flex flex-row justify-center bg-black text-white pt-10 relative z-0" v-if="enable">
			<div class="md:w-8/12 xl:w-3/12 pr-10 md:px-16 flex flex-col justify-center" v-for="section of Sections" :key="section">
				<img class="cursor-pointer" :src="section.img" alt="">
				<h3 class="py-2">{{section.title}}</h3>
				<p class="pb-4 text-gray-700 text-sm">{{section.description}}</p>
			</div>
		</div>

		<!-- Nav list Sign out -->
		<div class="flex flex-col text-left w-screen bg-black text-white text-md md:hidden relative z-0" v-if="hamburgerEnable">
			<a class="py-2 pl-10 hover:bg-primary flex justify-between cursor-pointer" v-on:click="mobileExploreState">Explore <span class="text-md text-white pr-12"><i class="fas fa-sort-down"></i></span></a>
			
			<div class = "exploreMobile w-screen h-full flex flex-col items-start bg-black text-white py-2 relative z-10" v-show="mobileExploreEnable" v-for="section of Sections" :key="section">
				<div class="w-3/4 flex flex-col pl-6">
					<h3 class="py-2">{{section.title}}</h3>
					<div class="flex justify-between">
						<img class="cursor-pointer w-2/4" :src="section.img" alt="">
						<p class="py-4 pl-4 text-gray-500 text-xs">{{section.description}}</p>
					</div>
				</div>
			</div>

			<a class="py-2 pl-10 hover:bg-primary" href="">About us</a>
			<a class="py-2 pl-10 hover:bg-primary" href="">Sign in</a>
			<a class="py-2 pl-10 hover:bg-primary" href="">Sign up</a>
		</div>

    <!-- Nav list Sign In -->
		<div class="flex flex-col text-left w-screen bg-black text-white text-md md:hidden relative z-0" v-if="hamburgerEnableSignIn">
			<div class="flex flex-col border-b-2 border-white">
        <a class="py-2 pl-10 hover:bg-primary" href="">About us</a>
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
export default {
	name: 'Header',
	mounted() {
		this.onResize()
  	},
	data() {
		return {
			signIn: false,
			enable: false,
      hamburgerEnable: false,
      hamburgerEnableSignIn: false,
			mobileExploreEnable: false,
			screenWidth: window.innerWidth,
			Sections: [
				{
					img: "@/assets/img/explore_1.jpg",
					title: "Create your own stories online",
					description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sollicitudin consectetur faucibus.",
				},
				{
					img: "@/assets/img/explore_2.jpg",
					title: "Customize your character",
					description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sollicitudin consectetur faucibus.",
				},
				{
					img: "@/assets/img/explore_3.jpg",
					title: "Any one can create a story",
					description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sollicitudin consectetur faucibus.",
				}
			]
		}
	},
	computed: {
		isMobile() {
      		return this.screenWidth < 768;
		}
  	},
	methods: {
		onResize() {
			addEventListener("resize", () => { 
				this.screenWidth = window.innerWidth;
				if (this.screenWidth < 768) {
					this.enable = false;
					const element  = this.$el.querySelector(".navigationBar");
					element.classList.remove("line");
				} else {
					this.hamburgerEnable = false;
				}
    		})
		},
		exploreMenuState() {
			this.enable = !this.enable;
			const element  = this.$el.querySelector(".navigationBar");
			element.classList.toggle("line");
		},	
		hamburgerMenuState() {
			this.hamburgerEnable = !this.hamburgerEnable;
		},
		mobileExploreState() {
			this.mobileExploreEnable = !this.mobileExploreEnable;
			const element  = this.$el.querySelector(".exploreMobile");
			element.classList.toggle("lineLeft");
    },
    hamburgerMenuStateSignIn() {
      this.hamburgerEnableSignIn = !this.hamburgerEnableSignIn;
    }
	},
};
</script>

<style>
	.line {
		box-shadow: 0px 1px 0px 0px #fff;
	}

	.tall {
		height: 4rem;
	}

	.lineLeft {
		border-left:1px solid #fff;
		margin-left: 40px;
		padding-left: 30px;
	}
</style>