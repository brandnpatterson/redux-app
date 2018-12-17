import React from 'react';
import User from './User';

const Users = ({ users }) => {
  return users.map(user => {
    return <User firstName={user.first_name} key={user.id} />;
  });
};

export default Users;
