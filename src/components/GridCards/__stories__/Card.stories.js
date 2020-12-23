import Card from '../Card.vue';

export default {
  title: 'Example/Cards',
  component: Card
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Card },
  template: '<Card v-bind="$props" />',
});

export const card = Template.bind({});
card.args = {
  name: "Himar",
  content: "Esto es un contenido",
  filename: "profile2.jpg"
};