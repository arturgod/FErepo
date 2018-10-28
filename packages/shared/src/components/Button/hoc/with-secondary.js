import React from 'react';

const style = {
  background: 'cornflowerblue',
};

const withSecondary = WrappedComponent => ({ ...props }) => (
  <WrappedComponent style={style} {...props} />
);

export { withSecondary };
