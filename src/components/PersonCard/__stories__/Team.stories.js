import Team from '../Team.vue';

export default {
  title: 'Example/Team',
  component: Team,
  argTypes: {
    filename: { control: { type: 'select', options: [ 'Adal', 'Alex', 'Himar', 'Kevin' ] } }
  }
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Team },
  template: '<Team v-bind="$props" />',
});

export const team = Template.bind({});
