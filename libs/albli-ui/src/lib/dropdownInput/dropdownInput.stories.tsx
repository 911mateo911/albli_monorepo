import { Meta, Story } from '@storybook/react';
import { DropdownInput } from '.';
import { DropdownInputProps } from './dropdownInput.interface';

export default {
    title: 'DropdownInput',
    component: DropdownInput
} as Meta;

export const Template: Story<DropdownInputProps> = args => <DropdownInput {...args} />
Template.args = {
    values: ['mateo', 'malaj', 'albliUi', 'publishPage'],
    selectedValue: null,
    placeholder: 'Category',
    onChange: () => ({})
}
