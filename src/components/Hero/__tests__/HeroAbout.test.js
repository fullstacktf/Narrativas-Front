import { mount } from '@vue/test-utils';
import HeroAbout from '@/components/Hero/HeroAbout.vue';
import { fireEvent } from '@testing-library/dom';
import { render, screen } from '@testing-library/vue';

describe('HeroAbout', () => {
  test('should render component', () => {
    render(HeroAbout);

    const hero = screen.getByRole('heroAbout');
    expect(hero).toBeInTheDocument();
  });

  test('should render title', () => {
    render(HeroAbout);

    const title = screen.getByText('ABOUT US');
    expect(title).toBeInTheDocument();
  });

  test('should render subtitle', () => {
    render(HeroAbout);

    const subtitle = screen.getByText('Meet the team behind Rollify.');
    expect(subtitle).toBeInTheDocument();
  });
  
  test('should render description', () => {
    render(HeroAbout);

    const description = screen.getByRole('description');
    expect(description).toBeInTheDocument();
  });
});