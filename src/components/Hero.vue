<template>
  <div class="container flex text-white max-w-full">
    <div class="heroImg w-3/5">
      <img src="../assets/img/Hero.jpg" alt="Imagin" />
    </div>
    <div
      class="start text-left bg-tertiary p-6 w-2/5 pl-10 flex flex-col justify-around"
    >
      <div class="top">
        <div class="title text-6xl">
          <h1>CREATE YOUR OWN UNIQUE STORY</h1>
        </div>
        <div class="startBtn mt-10">
          <button
            class="rounded-full py-3 px-6 bg-secondary hover:bg-secondary-dark text-xs font-bold"
          >
            Get Started
          </button>
        </div>
      </div>
      <div class="bottom mt-40">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nibh
          turpis, rhoncus nec dui eget, interdum semper ante. Donec venenatis,
          massa eget vestibulum feugiat, augue nibh ultrices tellus, facilisis
          est lorem et ipsum.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Hero",
};
</script>
