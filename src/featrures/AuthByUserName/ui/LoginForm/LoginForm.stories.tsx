import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import {StoreDecorator} from 'shared/lib/storybook/StoreDecorator/StoreDecorator';
import {LoginForm} from './LoginForm';

export default {
  title: 'features/LoginForm',
  component: LoginForm,
  argTypes: {
    backgroundColor: {control: 'color'},
  },
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};
Primary.decorators = [
  StoreDecorator({
    loginForm: {
      username: 'username',
      password: 'password',
    },
  }),
]

export const WithError = Template.bind({});
WithError.args = {};
WithError.decorators = [
  StoreDecorator({
    loginForm: {
      username: 'username',
      password: 'password',
      error: 'Invalid login or password',
    },
  }),
]

export const Loading = Template.bind({});
Loading.args = {};
Loading.decorators = [
  StoreDecorator({
    loginForm: {
      username: 'username',
      password: 'password',
      isLoading: true,
    },
  }),
]
