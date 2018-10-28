import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Button } from './';

storiesOf('Button', module)
  .add('Standard', () => <Button onClick={action('clicked')}>Standard button</Button>)
  .add('with primary', () => <Button onClick={action('clicked')} primary>Primary button</Button>)
  .add('with secondary', () => <Button onClick={action('clicked')} secondary>Secondary button</Button>);
