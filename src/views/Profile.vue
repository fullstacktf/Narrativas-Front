<template>
  <div
    class="flex flex-col md:flex-row my-10 md:my-20 mx-10 md:mx-0 h-auto justify-center space-y-10 md:space-y-0 md:space-x-40"
  >
    <div class="flex flex-col m-auto md:m-0">
      <div class="pic1 w-48 h-48 rounded-full"></div>
      <p class="text-4xl title">Jane Doe</p>
      <p class="text-gray-500">janedoe@example.com</p>
      <div class="total flex justify-center space-x-5 mt-5">
        <a href="/stories">
          <div class="stories">
            <p class="text-xl title">24</p>
            <p class="text-gray-500 text-lg">Stories</p>
          </div>
        </a>
        <a href="/characters">
          <div class="characters">
            <p class="text-xl title">130</p>
            <p class="text-gray-500 text-lg">Characters</p>
          </div>
        </a>
      </div>
    </div>
    <div class="content flex flex-col">
      <div
        class="total flex justify-center space-x-10 md:space-x-20 items-center text-xl"
      >
        <a href="#">
          <div class="followers">
            <p class="text-xl md:text-2xl title">539</p>
            <p class="text-gray-500 text-lg">Followers</p>
          </div>
        </a>
        <a href="#">
          <div class="following">
            <p class="text-xl md:text-2xl title">560</p>
            <p class="text-gray-500 text-lg">Following</p>
          </div>
        </a>
        <a href="#">
          <div class="liked-stories">
            <p class="text-xl md:text-2xl title">842</p>
            <p class="text-gray-500 text-lg">Liked Stories</p>
          </div>
        </a>
      </div>
      <div class="my-10 space-y-5">
        <input
          class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
          type="text"
          value="Jane Doe"
          readonly
        />
        <input
          class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
          type="text"
          value="janedoe@example.com"
          readonly
        />
      </div>
      <div class="interested-people m-auto">
        <p>They liked your stories! Take a look at their work aswell ;)</p>
        <div class="pics flex justify-around mt-5">
          <a href="#"><div class="pic2 w-20 h-20 rounded-full"></div></a>
          <a href="#"><div class="pic3 w-20 h-20 rounded-full"></div></a>
          <a href="#"><div class="pic4 w-20 h-20 rounded-full"></div></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Profile",
};
</script>

<style scoped>
.pic1 {
  background: url("../assets/img/profile1.jpg");
  background-repeat: no-repeat;
  background-size: contain;
}
.pic2 {
  background: url("../assets/img/profile2.jpg");
  background-repeat: no-repeat;
  background-size: contain;
}
.pic3 {
  background: url("../assets/img/profile3.jpg");
  background-repeat: no-repeat;
  background-size: contain;
}
.pic4 {
  background: url("../assets/img/profile4.jpg");
  background-repeat: no-repeat;
  background-size: contain;
}
.title {
  font-family: Oswald;
}

.interested-people a:hover div {
  filter: brightness(80%);
  transform: scale(1.1);
}

.total p:hover {
  filter: brightness(60%);
  transform: scale(1.1);
}
</style>
