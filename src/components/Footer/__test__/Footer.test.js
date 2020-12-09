import { mount } from '@vue/test-utils';
import Footer from '@/components/Footer/Footer.vue';
import { fireEvent } from '@testing-library/dom';
import { render, screen } from '@testing-library/vue';

describe('Footer', () => {
    test('should render component', () => {
      render(Footer);
      
      const paragraph = screen.getByText('You clicked 0 times');
      expect(paragraph).toBeInTheDocument();
    });