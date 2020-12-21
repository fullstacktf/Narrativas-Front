import InputSection from '../inputSection.vue';

export default {
  title: 'Example/Site Stories',
  component: InputSection
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { InputSection },
  template: '<InputSection v-bind="$props" />',
});

export const inputSection = Template.bind({});