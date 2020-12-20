import { mount } from '@vue/test-utils';
import SignInSignUp from '@/components/SignInSignUp/SignInSignUp.vue';
import { fireEvent } from '@testing-library/dom';
import { render, screen } from '@testing-library/vue';

const renderSign = () => {
  render(SignInSignUp, {
    props: {
      type: false
    }
  });
}

describe('SignInSignUp', () => {
  describe('when rendering', () => {
    test('should render component', () => {
      renderSign();
  
      const sign = screen.queryByRole('signPopup');
      expect(sign).toBeInTheDocument();
    });
  
    test('should show a label to sign up', () => {
      renderSign();
  
      const label = screen.queryByText('New to rollify?');
      expect(label).toBeInTheDocument();
    });
  
    test('should show a link to sign up', () => {
      renderSign();
  
      const link = screen.queryByText('Sign Up');
      expect(link).toBeInTheDocument();
    });
  
    test('should show a link to sign up', () => {
      renderSign();
  
      const link = screen.queryByText('Sign Up');
      expect(link).toBeInTheDocument();
    });
  
    test('should show a title', () => {
      renderSign();
  
      const title = screen.queryByText('Sign in to Rollify');
      expect(title).toBeInTheDocument();
    });
  
    test('should show a button to google', () => {
      renderSign();
  
      const buttonText = screen.queryByText('CONTINUE WITH GOOGLE');
      expect(buttonText).toBeInTheDocument();
    });
  
    test('should show a text to introduce form', () => {
      renderSign();
  
      const text = screen.queryByText('Or Sign in with us');
      expect(text).toBeInTheDocument();
    });
    
    test('should show username input', () => {
      renderSign();
  
      const input = screen.queryByPlaceholderText('Username');
      expect(input).toBeInTheDocument();
    });
  
    test('should show password input', () => {
      renderSign();
  
      const input = screen.queryByPlaceholderText('Password');
      expect(input).toBeInTheDocument();
    });
  
    test('should show label to remember me', () => {
      renderSign();
  
      const label = screen.queryByLabelText('Remember Me');
      expect(label).toBeInTheDocument();
    });
  
    test('should show signin button', () => {
      renderSign();
  
      const input = screen.queryByText('Sign In');
      expect(input).toBeInTheDocument();
    });
  
    test('should show link to create an account', () => {
      renderSign();
  
      const link = screen.queryByText('Create an Account!');
      expect(link).toBeInTheDocument();
    });
  
    test('should show link to create an account', () => {
      renderSign();
  
      const link = screen.queryByText('Forgot Password?');
      expect(link).toBeInTheDocument();
    });
  });
});
