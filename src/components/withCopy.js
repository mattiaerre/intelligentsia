import React from 'react';
import copy from './copy.json';

const withCopy = WrappedComponent => props => (
  <WrappedComponent {...props} copy={copy} />
);

export default withCopy;
