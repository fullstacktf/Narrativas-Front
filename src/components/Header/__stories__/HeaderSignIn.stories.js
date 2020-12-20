import HeaderSignIn from '../HeaderSignIn.vue';

export default {
  title: 'Example/Header',
  component: HeaderSignIn
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { HeaderSignIn },
  template: '<HeaderSignIn v-bind="$props" />',
});

export const headerSignIn = Template.bind({});