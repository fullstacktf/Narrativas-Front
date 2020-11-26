<template>
  <div class="container mx-auto">
    <div class="flex justify-center px-6 my-12">

      <div class="w-full xl:w-3/4 lg:w-11/12 flex">

        <div
          class="w-full h-auto bg-gray-400 hidden lg:block lg:w-1/2 bg-cover rounded-l-lg"
          v-bind:style="{backgroundImage:`url(${getBgImage})`}"
        ></div>

        <div class="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
          <div class="flex justify-end">
            <span class="text-right text-xs text-gray-600 px-4">
              Already a member?
            </span>
            <span class="text-right text-xs text-gray-800 underline">
              <a href="#">Sign In</a>
            </span>
          </div>
          <h3 class="pt-4 text-2xl text-center my-8">Sign up to Rollify</h3>

          <div class="px-8 pt-4 pb-8 mb-2 text-center">
            <button
              class="w-full border-2 border-black px-4 py-2 font-bold text-black rounded-full hover:bg-blue-500 focus:outline-none focus:shadow-outline"
              type="button"
            >
              <i class="fab fa-google"></i>
              <span class="ml-2"> CONTINUE WITH GOOGLE </span>
            </button>
          </div>

          <div class="text-center text-sm text-gray-800">
            Or Sign up with us
          </div>
          <form class="px-8 pt-8 pb-8 mb-4 bg-white rounded">
            <div class="mb-4">
              <input
                v-model="email"
                class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Email"
              />
            </div>
            <div class="mb-4">
              <input
                v-model="username"
                class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Username"
              />
            </div>

            <div class="mb-4">
              <input
                v-model="password"
                class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                type="password"
                placeholder="Password"
              />
              <p class="text-xs italic text-red-500">
                Please choose a password.
              </p>
            </div>

            <div class="mb-6 text-center">
              <button
                class="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                type="button"
              >
                Sign Up
              </button>
            </div>
            <hr class="mb-6 border-t" />

            <div class="text-center">
              <a
                class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
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
  name: 'SignUp',
  data: function() {
    return {
      username: "",
      email: "",
      password: ""
    }
  },
  computed: {
    getBgImage() {
      return require('@/assets/img/prompt.jpg')
    }
  }
}
</script>

