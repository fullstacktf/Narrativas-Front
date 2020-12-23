import Modal from '../Modal.vue';

export default {
  title: 'Example/Modal',
  component: Modal
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Modal },
  template: '<Modal v-bind="$props" />',
});

export const modal = Template.bind({});