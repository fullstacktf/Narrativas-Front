import GridCards from '../GridCards.vue';

export default {
  title: 'Example/Cards',
  component: GridCards
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { GridCards },
  template: '<GridCards v-bind="$props" />',
});

export const gridCards = Template.bind({});