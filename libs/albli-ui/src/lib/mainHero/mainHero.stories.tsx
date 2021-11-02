import { Story, Meta } from '@storybook/react';
import { MainHero, MainHeroProps } from './mainHero';

export default {
  component: MainHero,
  title: 'MainHero',
} as Meta;

const Template: Story<MainHeroProps> = (args) => <MainHero {...args} />;

export const Primary = Template.bind({})
Primary.args = {
}
