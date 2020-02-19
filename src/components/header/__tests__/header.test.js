import { shallowMount } from '@vue/test-utils';

import View from '../header';

// Mock the i18n system
const mockI18n = key => key;

// Begin testing
describe('views/desktop', () => {
  let test;

  beforeEach(() => {
    test = shallowMount(View, {
      mocks: {
        $t: mockI18n,
      },
    });
  });

  it('is a Vue instance', () => {
    const inst = test.isVueInstance();
    expect(inst).toBeTruthy();
  });

  it('renders the containing component', () => {
    expect(test.find('.header').exists()).toBe(true);
  });
});
