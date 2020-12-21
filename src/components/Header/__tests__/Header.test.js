import { mount } from '@vue/test-utils';
import Header from '@/components/Header/Header.vue';
import { fireEvent } from '@testing-library/dom';
import { render, screen } from '@testing-library/vue';

describe('Header', () => {
  describe('rendering', () => {
    test('should render component', () => {
      render(Header);
  
      const header = screen.queryByRole('header');
      expect(header).toBeInTheDocument();
    });
  
    test('should render logo', () => {
      render(Header);
  
      const logo = screen.queryByAltText('Logo');
      expect(logo).toBeInTheDocument();
    });
  
    test('should render explore tab', () => {
      render(Header);
  
      const exploreTab = screen.queryByText('Explore');
      expect(exploreTab).toBeInTheDocument();
    });
  
    test('should render about us tab', () => {
      render(Header);
  
      const aboutTab = screen.queryByText('About us');
      expect(aboutTab).toBeInTheDocument();
    });
  
    test('should render sign in button', () => {
      render(Header);
  
      const signin = screen.queryByText('Sign in');
      expect(signin).toBeInTheDocument();
    });
  
    test('should render sign in button', () => {
      render(Header);
  
      const signup = screen.queryByText('Sign up');
      expect(signup).toBeInTheDocument();
    });
  });

  describe('when user clicks in explore tab', () => {
    test('should render option stories online when clicking explore tab', async () => {
      render(Header);
      const exploreTab = screen.queryByText('Explore');
  
      await fireEvent.click(exploreTab);
  
      const paragraph = screen.queryByText('Create your own stories online');
      expect(paragraph).toBeInTheDocument();
    });
  
    test('should render option customize character when clicking explore tab', async () => {
      render(Header);
      const exploreTab = screen.queryByText('Explore');
  
      await fireEvent.click(exploreTab);
  
      const paragraph = screen.queryByText('Customize your character');
      expect(paragraph).toBeInTheDocument();
    });
    
    test('should show option create a story when clicking explore tab', async () => {
      render(Header);
      const exploreTab = screen.queryByText('Explore');
  
      await fireEvent.click(exploreTab);
  
      const paragraph = screen.queryByText('Anyone can create a story');
      expect(paragraph).toBeInTheDocument();
    });
  
    test('should hide option all three options when clicking explore tab twice', async () => {
      render(Header);
      const exploreTab = screen.queryByText('Explore');
  
      await fireEvent.click(exploreTab);
      await fireEvent.click(exploreTab);
  
      const paragraph = screen.queryByText('Create your own stories online');
      expect(paragraph).toBeNull();
    });
  });
});