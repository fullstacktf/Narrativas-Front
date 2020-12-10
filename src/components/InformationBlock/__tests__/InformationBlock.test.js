import { mount } from '@vue/test-utils';
import InformationBlock from '@/components/InformationBlock/InformationBlock.vue';
import { fireEvent } from '@testing-library/dom';
import { render, screen } from '@testing-library/vue';

describe('InformationBlock', () => {
  test('should render component', () => {
    render(InformationBlock);
    expect(true).toBeTruthy();
  });
});