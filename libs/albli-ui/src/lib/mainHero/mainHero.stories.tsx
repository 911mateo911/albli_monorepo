import { Story, Meta } from '@storybook/react';
import { MainHero } from './mainHero';
import { MainHeroProps } from './mainHero.interface';

export default {
    component: MainHero,
    title: 'MainHero',
} as Meta;

const Template: Story<MainHeroProps> = (args) => <MainHero {...args} />;

export const Primary = Template.bind({})
Primary.args = {
    title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit',
    subtitle: `Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. `
}
