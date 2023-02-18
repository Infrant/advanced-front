import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import {ThemeDecorator} from 'shared/lib/storybook/ThemeDecorator/ThemeDecorator';
import {Theme} from 'app/providers/ThemeProvider';
import {AppLink, AppLinkTheme} from './AppLink';

export default {
  title: 'shared/AppLink',
  component: AppLink,
  argTypes: {
    backgroundColor: {control: 'color'},
  },
  args: {
    to: '/',
  },
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Link text',
  theme: AppLinkTheme.primary,
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Link text',
  theme: AppLinkTheme.secondary,
};

export const SecondaryDark = Template.bind({});
SecondaryDark.args = {
  children: 'Link text',
  theme: AppLinkTheme.secondary,
};
SecondaryDark.decorators = [ThemeDecorator(Theme.dark)]
