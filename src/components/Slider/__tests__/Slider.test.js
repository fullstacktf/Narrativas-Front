import { mount } from '@vue/test-utils';
import Slider from '@/components/Slider/Slider.vue';
import { fireEvent } from '@testing-library/dom';
import { render, screen } from '@testing-library/vue';

describe('Slider', () => {
  describe('when rendering the component', () => {
    test('should render component', () => {
      render(Slider);
  
      const slider = screen.queryByRole('slider');
      expect(slider).toBeInTheDocument();
    });
  });

  describe('when rendering character slide', () => {
    test('should render title', () => {
      render(Slider);
  
      const title1 = screen.queryByText('CREATE YOUR');
      const title2 = screen.queryByText('CHARACTERS');
      expect(title1).toBeInTheDocument();
      expect(title2).toBeInTheDocument();
    });
  
    test('should render button', () => {
      render(Slider);
  
      const button = screen.queryByText('Get Started');
      expect(button).toBeInTheDocument();
    });
  });

  // describe('when rendering stories slide', () => {
  //   beforeEach(() => {
  //     jest.useFakeTimers();
  //   });

  //   test('should render title', () => {
  //     render(Slider);

  //     jest.advanceTimersByTime(10000);

  //     const title1 = screen.queryByText('CREATE YOUR');
  //     const title2 = screen.queryByText('STORIES');
  //     expect(title1).toBeInTheDocument();
  //     expect(title2).toBeInTheDocument();
  //   });
  // });
});