import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import {ThemeDecorator} from 'shared/lib/storybook/ThemeDecorator/ThemeDecorator';
import {Theme} from 'app/providers/ThemeProvider';
import {Text, TextVariant} from './Text';

export default {
  title: 'shared/Text',
  component: Text,
  argTypes: {
    backgroundColor: {control: 'color'},
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const TextAndTitle = Template.bind({});
TextAndTitle.args = {
  title: 'TitleTitleTitleTitleTitle',
  text: 'TextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextText',
};

export const Error = Template.bind({});
Error.args = {
  variant: TextVariant.ERROR,
  title: 'TitleTitleTitleTitleTitle',
  text: 'TextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextText',
};

export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
  title: 'TitleTitleTitleTitleTitle',
};

export const OnlyText = Template.bind({});
OnlyText.args = {
  text: 'TextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextText',
};

export const TextAndTitleDark = Template.bind({});
TextAndTitleDark.args = {
  title: 'TitleTitleTitleTitleTitle',
  text: 'TextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextText',
};
TextAndTitleDark.decorators = [ThemeDecorator(Theme.dark)]

export const OnlyTitleDark = Template.bind({});
OnlyTitleDark.args = {
  title: 'TitleTitleTitleTitleTitle',
};
OnlyTitleDark.decorators = [ThemeDecorator(Theme.dark)]

export const OnlyTextDark = Template.bind({});
OnlyTextDark.args = {
  text: 'TextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextText',
};
OnlyTextDark.decorators = [ThemeDecorator(Theme.dark)]
