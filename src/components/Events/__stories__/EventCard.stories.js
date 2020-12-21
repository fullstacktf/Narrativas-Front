import EventCard from '../EventCard.vue';

export default {
  title: 'Example/Event Card',
  component: EventCard
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { EventCard },
  template: '<EventCard v-bind="$props" />',
});

export const eventCard = Template.bind({});