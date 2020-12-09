import { mount } from '@vue/test-utils';
import Slider from '@/components/Slider/Slider.vue';
import { fireEvent } from '@testing-library/dom';
import { render, screen } from '@testing-library/vue';

describe('Slider', () => {
  test('should render component', () => {
    render(Slider);
    const slider = screen.queryByText('CREATE YOUR');
    expect(slider).toBeInTheDocument();
  });
});