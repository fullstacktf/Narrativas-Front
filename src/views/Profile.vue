<template>
  <div class="flex justify-around my-20">
    <div class="profile-pic w-80 h-80 rounded-full self-center"></div>

    <div class="w-136">
      <div class="total flex justify-around text-xl">
        <div class="stories">
          <div class="stories-total text-2xl">24</div>
          <div class="stories-txt text-gray-500">Stories</div>
        </div>
        <div class="characters">
          <div class="characters-total text-2xl">56</div>
          <div class="characters-txt text-gray-500">Characters</div>
        </div>
      </div>
      <div class="username mt-10">
        <input
          v-model="username"
          class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="Username"
          autocomplete="on"
          required
        />
      </div>
      <div class="email mt-10">
        <input
          v-model="email"
          class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="Email"
          autocomplete="on"
        />
      </div>
      <div class="password mt-10">
        <input
          v-model="password"
          class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
          type="password"
          placeholder="Password"
          autocomplete="on"
        />
      </div>
    </div>

    <div class="mb-4">
      <p ref="information" class="text-xs italic text-red-500">
        {{ this.information }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Profile",
};
</script>

<style>
.profile-pic {
  background: url("../assets/img/Alex.jpg");
  background-repeat: no-repeat;
  background-size: contain, cover;
}
</style>
