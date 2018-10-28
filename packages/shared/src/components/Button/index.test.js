jest.mock('./layout', () => ({
  ButtonLayout: ({ children }) => <div>{children}</div>,
}));

jest.mock('./hoc/with-primary', () => ({
  withPrimary: WrappedComponent => props => (
    <WrappedComponent id="with-primary" {...props} />
  ),
}));

import React from 'react';
import { Button } from './';

describe('Button', () => {
  const props = {
    onClick: jest.fn(),
  };

  it('should exist', () => {
    const wrapper = shallow(<Button {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should compose layout with withPrimary when primary prop is provided', () => {
    const wrapper = mount(<Button {...props} primary />);
    const withPrimary = wrapper.find('#with-primary');
    expect(withPrimary).toExist();
  });
});
