import Character from '../character.vue';

export default {
  title: 'Example/Character',
  component: Character
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Character },
  template: '<Character v-bind="$props" />',
});

export const character = Template.bind({});