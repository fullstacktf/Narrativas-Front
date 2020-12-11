import Slider from '../Slider.vue';

export default {
  title: 'Example/Slider',
  component: Slider
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Slider },
  template: '<Slider v-bind="$props" />',
});

export const slider = Template.bind({});