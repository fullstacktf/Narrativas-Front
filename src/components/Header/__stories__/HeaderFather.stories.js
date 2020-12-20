import HeaderFather from '../HeaderFather.vue';

export default {
  title: 'Example/Header',
  component: HeaderFather
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { HeaderFather },
  template: '<HeaderFather v-bind="$props" />',
});

export const headerFather = Template.bind({});