import React from 'react';
import PropTypes from 'prop-types';
import { branch, compose, withHandlers, setPropTypes, pure } from 'recompose';
import { ButtonLayout } from './layout';
import { withPrimary } from './hoc/with-primary';
import { withSecondary } from './hoc/with-secondary';

const propTypes = {
  onClick: PropTypes.func.isRequired,
};

const withButtonHandlers = withHandlers({
  onClick: ({ onClick }) => () => onClick(),
});

const Button = compose(
  setPropTypes(propTypes),
  pure,
  withButtonHandlers,
  branch(({ primary }) => primary, withPrimary),
  branch(({ secondary }) => secondary, withSecondary),
)(ButtonLayout);

export { Button };
