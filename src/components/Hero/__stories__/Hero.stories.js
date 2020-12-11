import Hero from '../Hero.vue';

export default {
  title: 'Example/Hero',
  component: Hero
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Hero },
  template: '<Hero v-bind="$props" />',
});

export const hero = Template.bind({});