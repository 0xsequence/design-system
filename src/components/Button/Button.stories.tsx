import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ScanIcon } from '../../icons';

import { Button } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => {
  return <Button {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  label: 'Click me',
  size: 'md',
};

export const DefaultWithIcon = Template.bind({});
DefaultWithIcon.args = {
  label: 'Click me',
  size: 'md',
  icon: ScanIcon,
};

export const Primary = Template.bind({});
Primary.args = {
  label: 'Click me',
  size: 'md',
  variant: 'primary',
};

export const PrimaryWithIcon = Template.bind({});
PrimaryWithIcon.args = {
  label: 'Click me',
  size: 'md',
  variant: 'primary',
  icon: ScanIcon,
};
