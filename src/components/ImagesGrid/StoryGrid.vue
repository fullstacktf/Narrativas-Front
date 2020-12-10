<template>
  <div class="flex justify-center flex-col">
    <h1 class="text-4xl mt-4">{{ this.title }}</h1>
    <div class="flex flex-wrap justify-center w-1/2">
      <ImageBox title="Test" image="stories/fan_art_1"/>
      <ImageBox title="Test" image=""/>
      <ImageBox title="Test" image=""/>
      <ImageBox title="Test" image=""/>
      <ImageBox title="Test" image=""/>
      <ImageBox title="Test" image=""/>
      <ImageBox title="Test" image=""/>
      <ImageBox title="Test" image=""/>
    </div>
  </div>
</template>

<script>
import ImageBox from "./ImageBox.vue";

export default {
  name: "StoryGrid",
  components: {
    ImageBox,
  },
  props: {
    title: String,
  },
};
</script>
