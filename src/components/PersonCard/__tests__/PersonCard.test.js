import { mount } from '@vue/test-utils';
import PersonCard from '@/components/PersonCard/PersonCard.vue';
import { fireEvent } from '@testing-library/dom';
import { render, screen } from '@testing-library/vue';

const propsByDefault = {
  name: "Adal",
  filename: "Adal",
  description: "Adal es un Adal muy Adal"
};

describe('PersonCard', () => {
  test('should render component', () => {
    render(PersonCard, {
      props: propsByDefault
    });

    const personCard = screen.getByRole('personCard');
    expect(personCard).toBeInTheDocument();
  });

  test('should render image', () => {
    render(PersonCard, {
      props: propsByDefault
    });

    const image = screen.getByAltText('Character image');
    expect(image).toBeInTheDocument();
  });

  test('should render title', () => {
    render(PersonCard, {
      props: propsByDefault
    });

    const title = screen.getByText('Adal');
    expect(title).toBeInTheDocument();
  });

  test('should render description', () => {
    render(PersonCard, {
      props: propsByDefault
    });

    const description = screen.getByText('Adal es un Adal muy Adal');
    expect(description).toBeInTheDocument();
  });
});