import CharacterBlockSection from '../characterBlockSection.vue';

export default {
  title: 'Example/Character',
  component: CharacterBlockSection
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { CharacterBlockSection },
  template: '<CharacterBlockSection v-bind="$props" />',
});

export const characterBlockSection = Template.bind({});