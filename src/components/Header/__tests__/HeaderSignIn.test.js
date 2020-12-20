import { mount } from '@vue/test-utils';
import HeaderSignIn from '@/components/Header/HeaderSignIn.vue';
import { fireEvent } from '@testing-library/dom';
import { render, screen } from '@testing-library/vue';

describe('HeaderSignIn', () => {
  describe('component rendering', () => {
    test('should render component', () => {
      render(HeaderSignIn);
  
      const header = screen.queryByRole('headerSignIn');
      expect(header).toBeInTheDocument();
    });
  
    test('should render logo', () => {
      render(HeaderSignIn);
  
      const logo = screen.queryByAltText('Logo');
      expect(logo).toBeInTheDocument();
    });
  
    test('should render about us tab', () => {
      render(HeaderSignIn);
  
      const aboutTab = screen.queryByText('About us');
      expect(aboutTab).toBeInTheDocument();
    });
  
    test('should render explore story tab', () => {
      render(HeaderSignIn);
  
      const storyTab = screen.queryByText('Explore Stories');
      expect(storyTab).toBeInTheDocument();
    });
  
    test('should render dashboard tab', () => {
      render(HeaderSignIn);
  
      const dashboardTab = screen.queryByText('Dashboard');
      expect(dashboardTab).toBeInTheDocument();
    });
  
    test('should render add button', () => {
      render(HeaderSignIn);
  
      const addButton = screen.queryByRole('addButton');
      expect(addButton).toBeInTheDocument();
    });
  
    test('should render add button', () => {
      render(HeaderSignIn);
  
      const profileButton = screen.queryByRole('profileButton');
      expect(profileButton).toBeInTheDocument();
    });

    test('should NOT render new character', () => {
      render(HeaderSignIn);
  
      const paragraph = screen.queryByText('New character');
      expect(paragraph).toBeNull();
    });

    test('should NOT render new story', () => {
      render(HeaderSignIn);
  
      const paragraph = screen.queryByText('New story');
      expect(paragraph).toBeNull();
    });
  });

  describe('when clicking add button', () => {
    test('should render new character', async () => {
      render(HeaderSignIn);
      const addButton = screen.queryByRole('addButton');

      await fireEvent.click(addButton);
  
      const paragraph = screen.queryByText('New character');
      expect(paragraph).toBeInTheDocument();
    });

    test('should render new story', async () => {
      render(HeaderSignIn);
      const addButton = screen.queryByRole('addButton');

      await fireEvent.click(addButton);
  
      const paragraph = screen.queryByText('New story');
      expect(paragraph).toBeInTheDocument();
    });

    test('should NOT stay "new" options when clicking add button twice', async () => {
      render(HeaderSignIn);
      const addButton = screen.queryByRole('addButton');

      await fireEvent.click(addButton);
      await fireEvent.click(addButton);
  
      const paragraph = screen.queryByText('New story');
      expect(paragraph).toBeNull();
    });
  });

  describe('when clicking profile button', () => {
    test('should render username', async () => {
      render(HeaderSignIn);
      const profileButton = screen.queryByRole('profileButton');

      await fireEvent.click(profileButton);
  
      const paragraph = screen.queryByText('Signed in as');
      const username = screen.queryByText('Username');
      expect(paragraph).toBeInTheDocument();
      expect(username).toBeInTheDocument();
    });

    test('should render profile link', async () => {
      render(HeaderSignIn);
      const profileButton = screen.queryByRole('profileButton');

      await fireEvent.click(profileButton);
  
      const paragraph = screen.queryByText('Profile');
      expect(paragraph).toBeInTheDocument();
    });

    test('should render your stories link', async () => {
      render(HeaderSignIn);
      const profileButton = screen.queryByRole('profileButton');

      await fireEvent.click(profileButton);
  
      const paragraph = screen.queryByText('Your stories');
      expect(paragraph).toBeInTheDocument();
    });

    test('should render your characters link', async () => {
      render(HeaderSignIn);
      const profileButton = screen.queryByRole('profileButton');

      await fireEvent.click(profileButton);
  
      const paragraph = screen.queryByText('Your characters');
      expect(paragraph).toBeInTheDocument();
    });

    test('should render settings link', async () => {
      render(HeaderSignIn);
      const profileButton = screen.queryByRole('profileButton');

      await fireEvent.click(profileButton);
  
      const paragraph = screen.queryByText('Settings');
      expect(paragraph).toBeInTheDocument();
    });
    
    test('should render log out link', async () => {
      render(HeaderSignIn);
      const profileButton = screen.queryByRole('profileButton');

      await fireEvent.click(profileButton);
  
      const paragraph = screen.queryByText('Log Out');
      expect(paragraph).toBeInTheDocument();
    });

    test('should NOT render any option when clicking profile button twice', async () => {
      render(HeaderSignIn);
      const profileButton = screen.queryByRole('profileButton');

      await fireEvent.click(profileButton);
      await fireEvent.click(profileButton);
  
      const paragraph = screen.queryByText('Profile');
      expect(paragraph).toBeNull();
    });
  });
});