import HeroAbout from '../HeroAbout.vue';

export default {
  title: 'Example/Hero',
  component: HeroAbout
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { HeroAbout },
  template: '<HeroAbout v-bind="$props" />',
});

export const heroAbout = Template.bind({});