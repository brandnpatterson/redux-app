import React from 'react';
import { string } from 'prop-types';

const propTypes = {
  firstName: string.isRequired
};

const User = ({ firstName }) => {
  return <li>{firstName}</li>;
};

User.propTypes = propTypes;

export default User;
