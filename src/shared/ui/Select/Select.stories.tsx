import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import {Select} from './Select';

export default {
  title: 'shared/Select',
  component: Select,
  argTypes: {
    backgroundColor: {control: 'color'},
  },
  args: {
    to: '/',
  },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'test label',
  options: [
    {value: '1', content: 'test 1'},
    {value: '2', content: 'test 2'},
  ],
};
