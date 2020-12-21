import NewCard from '../NewCard.vue';

export default {
  title: 'Example/Cards',
  component: NewCard
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { NewCard },
  template: '<NewCard v-bind="$props" />',
});

export const newCard = Template.bind({});
newCard.args = {
  name: "Himar",
  filename: "profile3"
}