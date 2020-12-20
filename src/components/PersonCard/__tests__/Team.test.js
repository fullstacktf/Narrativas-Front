import { mount } from '@vue/test-utils';
import Team from '@/components/PersonCard/Team.vue';
import { fireEvent } from '@testing-library/dom';
import { render, screen } from '@testing-library/vue';

describe('Team', () => {
  describe('should render component', () => {
    test('should render component', () => {
      render(Team);
  
      const team = screen.queryByRole('team');
      expect(team).toBeInTheDocument();
    });
  
    test('should render title', () => {
      render(Team);
  
      const title = screen.queryByText('Team');
      expect(title).toBeInTheDocument();
    });
  });

  describe('should appear all four person cards', () => {
    test('should render four person cards', () => {
      render(Team);
  
      const cards = screen.queryAllByRole('personCard');
      expect(cards.length).toBe(4);
    });

    test('should appear himar person card', () => {
      render(Team);

      const himarCard = screen.queryByText('Himar Manuel');
      expect(himarCard).toBeInTheDocument();
    });

    test('should appear adal person card', () => {
      render(Team);

      const adalCard = screen.queryByText('Adal');
      expect(adalCard).toBeInTheDocument();
    });

    test('should appear kevin person card', () => {
      render(Team);

      const kevinCard = screen.queryByText('Kevin Eliezer');
      expect(kevinCard).toBeInTheDocument();
    });

    test('should appear alex person card', () => {
      render(Team);

      const alexCard = screen.queryByText('Alejandro');
      expect(alexCard).toBeInTheDocument();
    });
  });
});