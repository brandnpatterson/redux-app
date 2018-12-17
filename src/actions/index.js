import axios from 'axios';
import { FETCH_USERS } from './types';

export const fetchUsers = () => dispatch => {
  const req = 'https://reqres.in/api/users?page=3';

  axios
    .get(req)
    .then(res => {
      dispatch({
        type: FETCH_USERS,
        payload: res.data.data
      });
    })
    .catch(err => console.error(err));
};
