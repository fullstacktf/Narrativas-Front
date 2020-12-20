import { mount } from '@vue/test-utils';
import PersonCard from '@/components/PersonCard/PersonCard.vue';
import { fireEvent } from '@testing-library/dom';
import { render, screen } from '@testing-library/vue';

const propsByDefault = {
  name: "Adal",
  filename: "Adal",
  location: "",
  twitter: "",
  github: "",
  linkedin: ""
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

    const image = screen.getByRole('CharacterImage');
    expect(image).toBeInTheDocument();
  });

  test('should render title', () => {
    render(PersonCard, {
      props: propsByDefault
    });

    const title = screen.getByText('Adal');
    expect(title).toBeInTheDocument();
  });
});