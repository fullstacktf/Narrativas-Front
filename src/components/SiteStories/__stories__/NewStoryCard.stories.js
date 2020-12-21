import NewStoryCard from '../NewStoryCard.vue';

export default {
  title: 'Example/Site Stories',
  component: NewStoryCard
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { NewStoryCard },
  template: '<NewStoryCard v-bind="$props" />',
});

export const newStoryCard = Template.bind({});