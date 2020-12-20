import SignInSignUp from '../SignInSignUp.vue';

export default {
  title: 'Example/Sign In Sign Up',
  component: SignInSignUp
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SignInSignUp },
  template: '<SignInSignUp v-bind="$props" />',
});

export const signInSignUp = Template.bind({});
signInSignUp.args = {
  type: false
};