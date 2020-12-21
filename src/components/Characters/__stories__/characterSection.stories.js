import CharacterSection from '../characterSection.vue';

export default {
  title: 'Example/Character',
  component: CharacterSection
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { CharacterSection },
  template: '<CharacterSection v-bind="$props" />',
});

export const characterSection = Template.bind({});