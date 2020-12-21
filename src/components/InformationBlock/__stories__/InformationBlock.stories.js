import InformationBlock from '../InformationBlock.vue';

export default {
  title: 'Example/Information Block',
  component: InformationBlock
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { InformationBlock },
  template: '<InformationBlock v-bind="$props" />',
});

export const informationBlock = Template.bind({});