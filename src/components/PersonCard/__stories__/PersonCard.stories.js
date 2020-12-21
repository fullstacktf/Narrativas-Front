import PersonCard from '../PersonCard.vue';

export default {
  title: 'Example/Person Card',
  component: PersonCard,
  argTypes: {
    filename: { control: { type: 'select', options: [ 'Adal', 'Alex', 'Himar', 'Kevin' ] } }
  }
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { PersonCard },
  template: '<PersonCard v-bind="$props" />',
});

export const personCard = Template.bind({});
personCard.args = {
  name: "Adal",
  filename: "Adal",
  location: "Some place"
};
