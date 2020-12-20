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

const renderPersonCard = () => {
  render(PersonCard, {
    props: propsByDefault
  });
}

describe('PersonCard', () => {
  test('should render component', () => {
    renderPersonCard();

    const personCard = screen.getByRole('personCard');
    expect(personCard).toBeInTheDocument();
  });

  test('should render background', () => {
    renderPersonCard();

    const background = screen.getByRole('background');
    expect(background).toBeInTheDocument();
  });

  test('should render image', () => {
    renderPersonCard();

    const image = screen.getByRole('CharacterImage');
    expect(image).toBeInTheDocument();
  });

  test('should render title', () => {
    renderPersonCard();

    const title = screen.getByText('Adal');
    expect(title).toBeInTheDocument();
  });

  test('should render hover indication', () => {
    renderPersonCard();

    const hoverIndication = screen.getByText('Hover to find me');
    expect(hoverIndication).toBeInTheDocument();
  });

  test('should render github', () => {
    renderPersonCard();

    const githubLink = screen.getByRole('githubLink');
    expect(githubLink).toBeInTheDocument();
  });

  test('should render linkedin', () => {
    renderPersonCard();

    const linkedinLink = screen.getByRole('linkedinLink');
    expect(linkedinLink).toBeInTheDocument();
  });

  test('should render twitter', () => {
    renderPersonCard();

    const twitterLink = screen.getByRole('twitterLink');
    expect(twitterLink).toBeInTheDocument();
  });
});