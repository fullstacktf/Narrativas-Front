<template>
  <div>
    <h1 class="text-4xl mt-4 mb-8">{{ this.title }}</h1>
    <div class="flex justify-center">
      <div class="flex justify-center flex-wrap w-1/2">
        <ImageBox title="Hercules" image="stories/fan_art_1" />
        <ImageBox title="Assasins" image="stories/fan_art_2" />
        <ImageBox title="Star Wars" image="stories/fan_art_3" />
        <ImageBox title="Black Matters" image="stories/fan_art_4" />
        <ImageBox title="Link" image="stories/fan_art_5" />
        <ImageBox title="GoW" image="stories/fan_art_6" />
        <ImageBox title="COVID19" image="stories/fan_art_7" />
        <ImageBox title="Flashy" image="stories/fan_art_8" />
      </div>
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
