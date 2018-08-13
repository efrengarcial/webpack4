// src/actions/contact-actions.js

import { client } from './';

const url = '/contacts';

export function fetchContacts() {
  return dispatch => {
    dispatch({
      type: 'FETCH_CONTACTS',
      payload: client.get(url)
    });
  };
}
