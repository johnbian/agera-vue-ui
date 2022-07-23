import { shallowMount } from '@vue/test-utils';
import Button from './main.vue';

describe('Button.vue', () => {
  it('renders props.title when passed', () => {
    const title = 'test';
    const wrapper = shallowMount(Button, {
      props: { title },
    });
    expect(wrapper.text()).toMatch(title);
  });
});
