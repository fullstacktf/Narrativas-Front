import StoryGrid from '../StoryGrid.vue';

export default {
  title: 'Example/Story Grid',
  component: StoryGrid
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { StoryGrid },
  template: '<StoryGrid v-bind="$props" />',
});

export const storyGrid = Template.bind({});
storyGrid.args = {
  title: "Personajes"
};