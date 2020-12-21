import InformationRow from '../InformationRow.vue';

export default {
  title: 'Example/Information Row',
  component: InformationRow
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { InformationRow },
  template: '<InformationRow v-bind="$props" />',
});

export const informationRow = Template.bind({});
informationRow.args = {
  isReversed: false,
  image: "character_3",
  title: "Fénix",
  subtitle: "Es un fénix",
  description: "Un fénix solo para testear el componente",
};