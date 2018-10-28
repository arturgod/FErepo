import React, { Fragment } from 'react';
import { ButtonLayout } from './';

describe('<ButtonLayout />', () => {
  const props = {
    children: () => <Fragment>test</Fragment>,
    onClick: jest.fn(),
  };

  const wrapper = shallow(<ButtonLayout {...props} />);

  it('is truthy', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call onClick when button is clicked', () => {
    const button = wrapper.find('button');
    button.simulate('click');
    expect(props.onClick).toHaveBeenCalled();
  });
});
