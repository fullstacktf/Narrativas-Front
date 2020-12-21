import Draggable from '../Draggable.vue';

export default {
  title: 'Example/Site Stories',
  component: Draggable
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Draggable },
  template: '<Draggable v-bind="$props" />',
});

export const draggable = Template.bind({});