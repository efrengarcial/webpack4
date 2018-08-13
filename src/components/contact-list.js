// src/components/contact-list.js

import React from 'react';
import ContactCard from './contact-card';
import { Card } from 'antd';
import PropTypes from 'prop-types';

export default function ContactList({ contacts }) {
  const cards = () => {
    return contacts.map(contact => {
      return <ContactCard key={contact._id} contact={contact} />;
    });
  };

  return <Card>{cards()}</Card>;
}

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired
};
