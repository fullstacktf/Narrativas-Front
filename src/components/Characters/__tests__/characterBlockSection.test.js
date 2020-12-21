import { mount } from '@vue/test-utils';
import CharacterBlockSection from '@/components/Characters/characterBlockSection.vue';
import { fireEvent } from '@testing-library/dom';
import { render, screen } from '@testing-library/vue';

describe('CharacterBlockSection', () => {
  test('should render component', () => {
    render(CharacterBlockSection);

    const blockSection = screen.queryByRole('characterBlockSection');
    expect(blockSection).toBeInTheDocument();
  });

  test('should render two character section', () => {
    render(CharacterBlockSection);

    const sections = screen.queryAllByRole('characterSection');
    expect(sections.length).toBe(2);
  });
});