import StoryCard from '../StoryCard.vue';

export default {
  title: 'Example/Site Stories',
  component: StoryCard
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { StoryCard },
  template: '<StoryCard v-bind="$props" />',
});

export const storyCard = Template.bind({});
storyCard.args = {
  id: 0,
  name: "Historia 1",
  description: "Esta es una historia muy triste",
};