import Header from '../Header.vue';

export default {
  title: 'Example/Header',
  component: Header
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Header },
  template: '<Header v-bind="$props" />',
});

export const header = Template.bind({});