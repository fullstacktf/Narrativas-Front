import { mount } from '@vue/test-utils';
import Character from '@/components/Characters/character.vue';
import { fireEvent } from '@testing-library/dom';
import { render, screen } from '@testing-library/vue';

describe('Character', () => {
  describe('should render component', () => {
    test('should render component', () => {
      render(Character);
  
      const characterComponent = screen.queryByRole('character');
      expect(characterComponent).toBeInTheDocument();
    });
  
    test('should render profile image', () => {
      render(Character);
  
      const imageInput = screen.queryByRole('imageProfile');
      expect(imageInput).toBeInTheDocument();
    });
  
    test('should render file input', () => {
      render(Character);
  
      const imageInput = screen.queryByRole('imageProfileInput');
      expect(imageInput).toBeInTheDocument();
    });
  
    test('should render character name input', () => {
      render(Character);
  
      const nameInput = screen.queryByPlaceholderText('Name');
      expect(nameInput).toBeInTheDocument();
    });
  
    test('should render character description input', () => {
      render(Character);
  
      const descriptionInput = screen.queryByPlaceholderText('Description');
      expect(descriptionInput).toBeInTheDocument();
    });
  
    test('should render title', () => {
      render(Character);
  
      const title = screen.queryByText('CHARACTER CREATION');
      expect(title).toBeInTheDocument();
    });
  
    test('should render create section button', () => {
      render(Character);
  
      const characterSectionButton = screen.queryByText('Create section');
      expect(characterSectionButton).toBeInTheDocument();
    });
  
    test('should render save character button', () => {
      render(Character);
  
      const saveCharacterButton = screen.queryByText('Save character');
      expect(saveCharacterButton).toBeInTheDocument();
    });
  
    // test('should render delete character', () => {
    //   render(Character);
  
    //   const deleteCharacterButton = screen.queryByText('Delete character');
    //   expect(deleteCharacterButton).toBeInTheDocument();
    // });
  });

  describe('should events work', () => {
    test('should add section when clicking on create section', () => {
      render(Character);
      const createSectionButton = screen.queryByText('Create section');

      fireEvent.click(createSectionButton);

      const allCharacterBlocks = screen.queryAllByRole('characterBlockSection');
      expect(allCharacterBlocks.length).toBe(3);
    });
  });
});