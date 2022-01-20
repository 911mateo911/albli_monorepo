import { Story, Meta } from '@storybook/react';
import { Input } from './input';
import { InputProps } from './input.interface';

export default {
    component: Input,
    title: 'Input'
} as Meta;

export const Template: Story<InputProps> = args => <Input {...args} />;
Template.args = {
    name: 'input',
    onChange: () => ({}),
    value: 'as',
    placeholder: 'Emri'
}
