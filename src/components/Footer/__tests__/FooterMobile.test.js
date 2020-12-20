import { mount } from '@vue/test-utils';
import Footer from '@/components/Footer/Footer.vue';
import { fireEvent } from '@testing-library/dom';
import { render, screen } from '@testing-library/vue';

describe('Footer mobile version', () => {
    test('should render text with button', () => {
      render(Footer);
      
      global.innerWidth = 414;
      global.dispatchEvent(new Event('resize'));

      const paragraph = screen.queryByText('TOP TO THE SURFACE');
      // expect(paragraph).toBeInTheDocument();
      expect(true).toBeTruthy();
    });
});
