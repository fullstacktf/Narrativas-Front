import Footer from '../Footer.vue';

export default {
  title: 'Example/Footer',
  component: Footer
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Footer },
  template: '<Footer v-bind="$props" />',
});

export const footer = Template.bind({});