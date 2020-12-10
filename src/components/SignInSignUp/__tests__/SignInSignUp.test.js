import { mount } from '@vue/test-utils';
import SignInSignUp from '@/components/SignInSignUp/SignInSignUp.vue';
import { fireEvent } from '@testing-library/dom';
import { render, screen } from '@testing-library/vue';

describe('SignInSignUp', () => {
  test('should render component', () => {
    render(SignInSignUp, {
      props: {
        type: 'sign-in'
      }
    });
    const sign = screen.queryByText('New to rollify?');
    expect(sign).toBeInTheDocument();
  });
});