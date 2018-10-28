import React from 'react';

const style = {
  background: 'red',
};

const withPrimary = WrappedComponent => ({ ...props }) => (
  <WrappedComponent style={style} {...props} />
);

export { withPrimary };
