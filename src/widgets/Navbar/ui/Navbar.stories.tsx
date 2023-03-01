import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import {ThemeDecorator} from 'shared/lib/storybook/ThemeDecorator/ThemeDecorator';
import {Theme} from 'app/providers/ThemeProvider';
import {StoreDecorator} from 'shared/lib/storybook/StoreDecorator/StoreDecorator';
import {Navbar} from './Navbar';

export default {
  title: 'widget/Navbar',
  component: Navbar,
  argTypes: {
    backgroundColor: {control: 'color'},
  },
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const Light = Template.bind({});
Light.args = {
};
Light.decorators = [StoreDecorator({
  user: {
    authData: null,
  },
})]

export const Dark = Template.bind({});
Dark.args = {
};
Dark.decorators = [ThemeDecorator(Theme.dark), StoreDecorator({
  user: {
    authData: {
      username: 'username',
      id: 'id',
    },
  },
})]
