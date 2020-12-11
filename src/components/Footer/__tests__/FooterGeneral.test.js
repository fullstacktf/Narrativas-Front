import { mount } from '@vue/test-utils';
import Footer from '@/components/Footer/Footer.vue';
import { fireEvent } from '@testing-library/dom';
import { render, screen } from '@testing-library/vue';

describe('Footer', () => {
    test('should render component', () => {
      render(Footer);

      const footer = screen.queryByRole('footer');
      expect(footer).toBeInTheDocument();
    });

    test('should render with logo', () => {
      render(Footer);

      const logo = screen.queryByAltText('ROLLIFY');
      expect(logo).toBeInTheDocument();
    });

    test('show current year', () => {
      render(Footer);
      const fullyear = new Date().getFullYear();

      const footer = screen.queryByText('©' + fullyear + ' Rollify. All rights reserved');
      expect(footer).toBeInTheDocument();
    });

    test('link to twitter', () => {
      render(Footer);

      const link = screen.getByRole('twitter');
      expect(link).toBeInTheDocument();
    });

    test('link to instagram', () => {
      render(Footer);

      const link = screen.getByRole('instagram');
      expect(link).toBeInTheDocument();
    });

    test('link to github', () => {
      render(Footer);

      const link = screen.getByRole('github');
      expect(link).toBeInTheDocument();
    });

    test('link to facebook', () => {
      render(Footer);

      const link = screen.getByRole('facebook');
      expect(link).toBeInTheDocument();
    });

    test('link to About us', () => {
      render(Footer);

      const link = screen.queryByText('About us');
      expect(link).toBeInTheDocument();
    });

    test('link to Privacy Policy', () => {
      render(Footer);

      const link = screen.queryByText('Privacy Policy');
      expect(link).toBeInTheDocument();
    });
    
    test('link to Terms of Service', () => {
      render(Footer);

      const link = screen.queryByText('Terms of Service');
      expect(link).toBeInTheDocument();
    });

    test('link to Security', () => {
      render(Footer);

      const link = screen.queryByText('Security');
      expect(link).toBeInTheDocument();
    });

    test('should render button to up', () => {
      render(Footer);

      const button = screen.queryByRole('button');
      expect(button).toBeInTheDocument();
    });
});
