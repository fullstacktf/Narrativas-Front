import LateralSlide from '../LateralSlide.vue';

export default {
  title: 'Example/Lateral Slide',
  component: LateralSlide,
  argTypes: {
    image: { control: { type: 'select', options: [ 'parallaxInicio' ] } }
  }
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { LateralSlide },
  template: '<LateralSlide v-bind="$props" />',
});

export const lateralSlide = Template.bind({});
lateralSlide.args = {
  image: 'parallaxInicio'
};