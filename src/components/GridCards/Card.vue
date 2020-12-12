<template>
  <div class="container w-56 h-88 relative">
    <div class="card w-56 h-80 rounded-lg overflow-hidden">
      <div
        class="profile w-full h-full"
        v-bind:style="{ background: `url(${getBgImage}) center/ cover` }"
      ></div>
      <div class="text w-full h-48 flex flex-col items-start bg-white">
        <h1 class="title text-black mt-5 flex pl-4">
          <span>Description</span>
        </h1>
        <p class="content text-gray-500 p-4 text-sm">{{ content }}</p>
      </div>
    </div>
    <div class="name text-black pb-2 flex justify-between w-full">
      <h1>{{ name }}</h1>
      <button>
        <i class="fa fa-pencil text-gray-500" aria-hidden="true"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    name: String,
    content: String,
    filename: String,
  },
  computed: {
    getBgImage() {
      return require("@/assets/img/" + this.filename + ".jpg");
    },
  },
};
</script>

<style scoped>
.card {
  position: absolute;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
}

.profile {
  position: absolute;
  transition: 0.5s;
}

.text {
  position: absolute;
  bottom: 0;
  transform: translateY(230px);
  transition: 0.5s;
}

.content {
  opacity: 0;
  transition: 0.5s ease;
}

.name {
  position: absolute;
  bottom: 0;
}

span {
  display: block;
  transition: 0.7s cubic-bezier(0.75, -1, 0, 1.15);
}

span:nth-child(1) {
  transform: translateX(-200px);
}

.card:hover .text {
  transform: translateY(0);
}

.card:hover .profile {
  transform: translateY(-70px) scale(1.1);
}

.card:hover .title span {
  transform: translateX(0);
  transition-delay: 0.5s;
}

.card:hover .content {
  opacity: 1;
  transition-delay: 0.5s;
}
</style>
