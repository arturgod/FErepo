jest.mock('@ecovadis/shared', () => ({
  Button: ({ children }) => <div>{children}</div>,
}));

import React from 'react';
import { shallow } from 'enzyme';
import { Test } from './';

describe('Button', () => {
  const requiredProps = {
    onClick: jest.fn(),
  };
  it('should exist', () => {
    const wrapper = shallow(<Test {...requiredProps} />);
    expect(wrapper).toMatchSnapshot();
  });
});
