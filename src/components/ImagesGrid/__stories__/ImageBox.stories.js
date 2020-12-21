import ImageBox from '../ImageBox.vue';

export default {
  title: 'Example/Image Box',
  component: ImageBox
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ImageBox },
  template: '<ImageBox v-bind="$props" />',
});

export const imageBox = Template.bind({});
imageBox.args = {
  title: "Sirena",
  image: "character_2"
};