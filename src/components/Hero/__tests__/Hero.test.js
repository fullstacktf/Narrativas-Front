import { mount } from '@vue/test-utils';
import Hero from '@/components/Hero/Hero.vue';
import { fireEvent } from '@testing-library/dom';
import { render, screen } from '@testing-library/vue';

describe('Hero', () => {
  test('should render component', () => {
    render(Hero);

    const hero = screen.queryByRole('hero');
    expect(hero).toBeInTheDocument();
  });

  test('should render image', () => {
    render(Hero);

    const image = screen.queryByAltText('Imagine');
    expect(image).toBeInTheDocument();
  });

  test('should render title', () => {
    render(Hero);

    const title = screen.queryByText('CREATE YOUR OWN UNIQUE STORY');
    expect(title).toBeInTheDocument();
  });

  test('should render title', () => {
    render(Hero);

    const title = screen.queryByText('CREATE YOUR OWN UNIQUE STORY');
    expect(title).toBeInTheDocument();
  });

  test('should render get started button', () => {
    render(Hero);

    const button = screen.queryByText('Get Started');
    expect(button).toBeInTheDocument();
  });

  test('should render description', () => {
    render(Hero);

    const paragraph = screen.queryByRole('description');
    expect(paragraph).toBeInTheDocument();
  });
});