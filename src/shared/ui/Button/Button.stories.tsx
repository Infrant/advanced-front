import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import {ThemeDecorator} from 'shared/lib/storybook/ThemeDecorator/ThemeDecorator';
import {Theme} from 'app/providers/ThemeProvider';
import {Button, ButtonSize, ButtonVariant} from './Button';

export default {
  title: 'shared/Button',
  component: Button,
  argTypes: {
    backgroundColor: {control: 'color'},
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Button text',
};

export const Clear = Template.bind({});
Clear.args = {
  children: 'Button text',
  variant: ButtonVariant.CLEAR,
};

export const Outline = Template.bind({});
Outline.args = {
  children: 'Button text',
  variant: ButtonVariant.OUTLINE,
};

export const OutlineSizeL = Template.bind({});
OutlineSizeL.args = {
  children: 'Button text',
  variant: ButtonVariant.OUTLINE,
  size: ButtonSize.L,
};

export const OutlineSizeXL = Template.bind({});
OutlineSizeXL.args = {
  children: 'Button text',
  variant: ButtonVariant.OUTLINE,
  size: ButtonSize.XL,
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
  children: 'Button text',
  variant: ButtonVariant.OUTLINE,
};
OutlineDark.decorators = [ThemeDecorator(Theme.dark)]

export const Background = Template.bind({});
Background.args = {
  children: 'Button text',
  variant: ButtonVariant.BACKGROUND,
};

export const BackgroundInverted = Template.bind({});
BackgroundInverted.args = {
  children: 'Button text',
  variant: ButtonVariant.BACKGROUND_INVERTED,
};

export const Square = Template.bind({});
Square.args = {
  children: '>',
  variant: ButtonVariant.BACKGROUND_INVERTED,
  square: true,
};

export const SquareL = Template.bind({});
SquareL.args = {
  children: '>',
  variant: ButtonVariant.BACKGROUND_INVERTED,
  square: true,
  size: ButtonSize.L,
};

export const SquareXL = Template.bind({});
SquareXL.args = {
  children: '>',
  variant: ButtonVariant.BACKGROUND_INVERTED,
  square: true,
  size: ButtonSize.XL,
};
