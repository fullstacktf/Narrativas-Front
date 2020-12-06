<template>
  <div class="container mx-auto">
    <div class="flex justify-center px-6 my-12">
      <div class="w-full xl:w-3/4 lg:w-11/12 flex">
        <div
          class="w-full h-auto bg-gray-400 hidden lg:block lg:w-1/2 bg-cover rounded-l-lg"
          v-bind:style="{ backgroundImage: `url(${getBgImage})` }"
        ></div>

        <div class="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
          <div class="flex justify-end">
            <span class="text-right text-xs text-gray-600 px-4">
              <div v-if="screen === `sign-in`">New to rollify?</div>
              <div v-if="screen === `sign-up`">Already a member?</div>
            </span>
            <span
              class="text-right text-xs text-gray-800 underline cursor-pointer"
            >
              <a v-if="screen === `sign-in`" v-on:click="screen = `sign-up`"
                >Sign Up</a
              >
              <a v-if="screen === `sign-up`" v-on:click="screen = `sign-in`"
                >Sign In</a
              >
            </span>
            <button
              class="ml-8 text-xs style text-decoration-none focus:outline-none"
            >
              X
            </button>
          </div>
          <h3 class="pt-4 text-2xl text-center my-8">
            <div v-if="screen === `sign-in`">Sign in to Rollify</div>
            <div v-if="screen === `sign-up`">Sign up to Rollify</div>
          </h3>

          <div class="px-8 pt-4 pb-8 mb-2 text-center">
            <button
              class="w-full border-2 border-black px-4 py-2 font-bold text-black rounded-full hover:bg-primaryColor-500 focus:outline-none focus:shadow-outline"
              type="button"
            >
              <i class="fab fa-google"></i>
              <span class="ml-2"> CONTINUE WITH GOOGLE </span>
            </button>
          </div>

          <div class="text-center text-sm text-gray-800">
            <div v-if="screen === `sign-up`">Or Sign up with us</div>
            <div v-if="screen === `sign-in`">Or Sign in with us</div>
          </div>
          <form class="px-8 pt-8 pb-8 mb-4 bg-white rounded">
            <div class="mb-4">
              <div class="mb-4">
                <input
                  v-model="username"
                  class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Username"
                  autocomplete="on"
                />
              </div>

              <input
                v-if="screen === `sign-up`"
                v-model="email"
                class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Email"
                autocomplete="on"
              />
            </div>

            <div class="mb-4">
              <input
                v-model="password"
                class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                type="password"
                placeholder="Password"
                autocomplete="on"
              />
              <p id="information" class="text-xs italic text-red-500">
                {{ this.information }}
              </p>
            </div>

            <div class="mb-4" v-if="screen === `sign-in`">
              <input
                class="mr-2 leading-tight"
                type="checkbox"
                id="checkbox_id"
              />
              <label class="text-sm" for="checkbox_id"> Remember Me </label>
            </div>

            <div class="mb-6 text-center">
              <button
                class="w-full px-4 py-2 font-bold text-white bg-primaryColor-500 rounded-full hover:bg-primaryColor-700 focus:outline-none focus:shadow-outline"
                type="button"
                v-on:click="sendData"
              >
                <div v-if="screen === `sign-up`">Sign Up</div>
                <div v-if="screen === `sign-in`">Sign In</div>
              </button>
            </div>
            <hr class="mb-6 border-t" />

            <div v-if="screen === `sign-in`" class="text-center">
              <a
                class="inline-block text-sm text-primaryColor-500 align-baseline hover:text-primaryColor-800 cursor-pointer"
                v-on:click="screen = `sign-up`"
              >
                Create an Account!
              </a>
            </div>

            <div class="text-center">
              <a
                class="inline-block text-sm text-primaryColor-500 align-baseline hover:text-primaryColor-800"
                href="#"
              >
                Forgot Password?
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "SignInSignUp",
  props: {
    type: String,
  },
  data: function () {
    return {
      username: "",
      email: "",
      password: "",
      screen: this.type,
      information: "",
    };
  },
  computed: {
    getBgImage() {
      return require("@/assets/img/prompt.jpg");
    },
  },
  methods: {
    sendData: function (event) {
      if (this.screen === "sign-in") {
        this.userRegister();
      } else if (screen === "sign-up") {
        this.userLogin();
      }
    }
  }
};
</script>

