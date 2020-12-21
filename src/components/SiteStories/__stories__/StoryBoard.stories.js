import StoryBoard from '../StoryBoard.vue';

export default {
  title: 'Example/Site Stories',
  component: StoryBoard
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { StoryBoard },
  template: '<StoryBoard v-bind="$props" />',
});

export const storyBoard = Template.bind({});