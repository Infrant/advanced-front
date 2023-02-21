import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import {ThemeDecorator} from 'shared/lib/storybook/ThemeDecorator/ThemeDecorator';
import {Theme} from 'app/providers/ThemeProvider';
import {Modal} from './Modal';

export default {
  title: 'shared/Modal',
  component: Modal,
  argTypes: {
    backgroundColor: {control: 'color'},
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Light = Template.bind({});
Light.args = {
  isOpen: true,
  children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, perferendis, vitae. Alias architecto beatae consequuntur cum delectus deleniti dignissimos ducimus, error facere labore magni maxime modi odit optio perferendis provident quae quasi quidem quis sed sint sit suscipit ullam ut velit veritatis voluptates! Hic quaerat, rem. Asperiores blanditiis consectetur culpa deleniti exercitationem libero molestias obcaecati optio sapiente veniam! Dolores ea eligendi esse hic provident, quam quia quibusdam quisquam ratione tempore tenetur, veniam. Dolorum eveniet id iste reiciendis sunt. Ab beatae consequatur corporis dicta est excepturi harum laboriosam magnam minima modi officiis, quae quam ratione reiciendis repudiandae sapiente sequi tempora temporibus?',
};

export const Dark = Template.bind({});
Dark.args = {
  isOpen: true,
  children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, perferendis, vitae. Alias architecto beatae consequuntur cum delectus deleniti dignissimos ducimus, error facere labore magni maxime modi odit optio perferendis provident quae quasi quidem quis sed sint sit suscipit ullam ut velit veritatis voluptates! Hic quaerat, rem. Asperiores blanditiis consectetur culpa deleniti exercitationem libero molestias obcaecati optio sapiente veniam! Dolores ea eligendi esse hic provident, quam quia quibusdam quisquam ratione tempore tenetur, veniam. Dolorum eveniet id iste reiciendis sunt. Ab beatae consequatur corporis dicta est excepturi harum laboriosam magnam minima modi officiis, quae quam ratione reiciendis repudiandae sapiente sequi tempora temporibus?',
};
Dark.decorators = [ThemeDecorator(Theme.dark)]
